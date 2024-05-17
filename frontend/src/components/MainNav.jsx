import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <Button
          onClick={logout}
          variant="ghost"
          className="text-base font-bold hover:text-orange-500 hover:bg-white"
        >
          Log Out
        </Button>
      ) : (
        <Button
          onClick={loginWithRedirect}
          variant="ghost"
          className="text-base font-bold hover:text-orange-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </div>
  );
};

export default MainNav;
