import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const OAUTH_STATE_KEY = "discord_oauth_state";

const DiscordCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("Validating Discord callback...");

  useEffect(() => {
    const errorParam = searchParams.get("error");
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const expectedState = sessionStorage.getItem(OAUTH_STATE_KEY);

    console.info("[Discord OAuth] Callback received", {
      hasCode: !!code,
      hasState: !!state,
      hasExpectedState: !!expectedState,
      errorParam,
    });

    if (errorParam) {
      setError("Discord login was cancelled or denied. Please try again.");
      setStatus("OAuth authorization failed.");
      return;
    }

    if (!code) {
      setError("No authorization code received from Discord.");
      setStatus("Missing authorization code.");
      return;
    }

    if (!state || !expectedState || state !== expectedState) {
      setError("Invalid OAuth state. Please restart login.");
      setStatus("OAuth state validation failed.");
      return;
    }

    sessionStorage.removeItem(OAUTH_STATE_KEY);
    void handleCallback(code);
  }, [searchParams]);

  const handleCallback = async (code: string) => {
    try {
      setStatus("Exchanging authorization code with backend...");
      const redirectUri = `${window.location.origin}/employee/callback`;

      const { data, error: fnError } = await supabase.functions.invoke(
        "discord-callback",
        {
          body: { code, redirect_uri: redirectUri },
        }
      );

      if (fnError || data?.error) {
        console.error("[Discord OAuth] Callback exchange failed", {
          fnError,
          data,
        });
        setError("Failed to complete Discord login. Please try again.");
        setStatus("Backend code exchange failed.");
        return;
      }

      if (!data?.id || !data?.username || !data?.email) {
        console.error("[Discord OAuth] Missing required user fields", data);
        setError("Discord login response is incomplete. Please try again.");
        setStatus("Invalid user payload from backend.");
        return;
      }

      setStatus("Login successful. Creating authenticated session...");

      login({
        id: data.id,
        username: data.username,
        email: data.email,
        avatar: data.avatar ?? null,
      });

      console.info("[Discord OAuth] Session created successfully", {
        userId: data.id,
        username: data.username,
      });

      navigate("/employee", { replace: true });
    } catch (err) {
      console.error("[Discord OAuth] Unexpected callback error", err);
      setError("Unexpected login error. Please try again.");
      setStatus("Unexpected callback failure.");
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
            <p className="text-sm text-foreground font-semibold">Login failed</p>
            <p className="text-sm text-muted-foreground">{error}</p>
            <p className="text-xs text-muted-foreground">Status: {status}</p>
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
            <p className="text-sm text-muted-foreground">{status}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DiscordCallbackPage;
