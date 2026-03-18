import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import loginPlane from "@/assets/login-plane.png";
import sasLogo from "@/assets/sas.svg";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/employee");
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
              Sign in to access your dashboard, manage flights, view messages, and stay connected with your team.
            </p>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            Log in
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
