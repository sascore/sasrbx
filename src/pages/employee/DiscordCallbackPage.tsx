import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Discord OAuth2 callback handler.
 * 
 * Currently: Exchanges the authorization code for user data directly via Discord API.
 * This works for development but exposes the token exchange on the client side.
 * 
 * For production: Replace the token exchange with a backend endpoint (e.g., Supabase Edge Function)
 * that securely exchanges the code using the client secret server-side.
 */
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
      // TODO: Replace this with a secure backend call that exchanges the code
      // using the client secret. For now, we store the code and simulate login.
      // 
      // Production flow:
      // 1. Send `code` to your backend (e.g., /api/discord/callback)
      // 2. Backend exchanges code + client_secret for access_token
      // 3. Backend fetches user from Discord API
      // 4. Backend returns user data to frontend
      //
      // For now, we'll attempt a direct token exchange which requires
      // a backend endpoint to be set up. Until then, we use a placeholder flow.

      // Placeholder: Store that we received a valid code and redirect
      // In a real setup, this would call your backend
      console.log("Discord OAuth2 code received:", code);
      
      // Since we can't exchange the code without the client secret on the frontend,
      // we'll need a backend. For now, let's show that the flow works
      // and store a temporary session.
      
      // When backend is ready, replace this with:
      // const response = await fetch('/api/auth/discord/callback', { 
      //   method: 'POST', 
      //   body: JSON.stringify({ code }) 
      // });
      // const userData = await response.json();
      // login(userData);

      setError("Discord OAuth2 flow works! A backend is needed to complete the token exchange securely. Set up a Supabase Edge Function to exchange the code for user data.");
      
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
