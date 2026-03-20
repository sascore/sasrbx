import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const DiscordCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = searchParams.get("code");
    const errorParam = searchParams.get("error");

    if (errorParam) {
      setError("Login was cancelled or denied.");
      setTimeout(() => navigate("/employee/login", { replace: true }), 2000);
      return;
    }

    if (!code) {
      setError("No authorization code received.");
      setTimeout(() => navigate("/employee/login", { replace: true }), 2000);
      return;
    }

    handleCallback(code);
  }, []);

  const handleCallback = async (code: string) => {
    try {
      const redirectUri = `${window.location.origin}/employee/callback`;

      const { data, error: fnError } = await supabase.functions.invoke(
        "discord-callback",
        {
          body: { code, redirect_uri: redirectUri },
        }
      );

      if (fnError || data?.error) {
        console.error("Discord callback error:", fnError || data?.error);
        setError("Failed to complete login. Please try again.");
        setTimeout(() => navigate("/employee/login", { replace: true }), 3000);
        return;
      }

      login({
        id: data.id,
        username: data.username,
        email: data.email,
        avatar: data.avatar,
      });

      navigate("/employee", { replace: true });
    } catch (err) {
      console.error("Discord callback error:", err);
      setError("Failed to complete login. Please try again.");
      setTimeout(() => navigate("/employee/login", { replace: true }), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4 max-w-md px-6">
        {error ? (
          <>
            <div className="w-12 h-12 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
              <span className="text-destructive text-xl">!</span>
            </div>
            <p className="text-sm text-muted-foreground">{error}</p>
            <button
              onClick={() => navigate("/employee/login", { replace: true })}
              className="px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Back to Login
            </button>
          </>
        ) : (
          <>
            <div className="w-12 h-12 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <p className="text-sm text-muted-foreground">Completing login...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DiscordCallbackPage;
