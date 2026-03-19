import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginPlane from "@/assets/login-plane.png";
import sasLogo from "@/assets/sas.svg";
import { useAuth } from "@/contexts/AuthContext";

const DISCORD_CLIENT_ID = "1483937727186604212";
const REDIRECT_URI = `${window.location.origin}/employee/callback`;
const DISCORD_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20email`;

const LoginPage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/employee", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleDiscordLogin = () => {
    window.location.href = DISCORD_AUTH_URL;
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={loginPlane}
          alt="SAS Aircraft"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/40" />
      </div>

      {/* Right: login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <img src={sasLogo} alt="SAS" className="h-8" />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-foreground">
              Welcome to SAS Employee Hub
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sign in with Discord to access your dashboard, manage flights, view messages, and stay connected with your team.
            </p>
          </div>

          <button
            onClick={handleDiscordLogin}
            className="w-full py-3 rounded-full bg-[hsl(235,86%,65%)] text-white font-bold text-sm hover:bg-[hsl(235,86%,58%)] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
            </svg>
            Log in with Discord
          </button>

          <p className="text-center text-xs text-muted-foreground">
            By signing in, you agree to the SAS Employee Hub terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
