import { useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import useCreateMyUser from "@/api/MyUserApi";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    const handleUserCreationAndRedirect = async () => {
      if (user?.sub && user?.email) {
        await createUser({
          auth0Id: user.sub,
          email: user.email,
        });
        hasCreatedUser.current = true;
        navigate("/");
      }
    };

    handleUserCreationAndRedirect();
  }, [user, createUser, navigate]);

  return (
    <h1 className="text-3xl font-bold text-orange-500 flex justify-center mt-10 w-full">
      Redirecting... Please wait!
    </h1>
  );
};

export default AuthCallbackPage;
