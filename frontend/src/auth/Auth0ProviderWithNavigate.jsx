import useCreateMyUser from "@/api/MyUserApi";
import { Auth0Provider, User } from "@auth0/auth0-react";
import PropTypes from "prop-types";

const Auth0ProviderWithNavigate = ({ children }) => {
  const { createUser } = useCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = () => {
    if (User?.sub && User?.email) {
      createUser({
        auth0Id: User.sub,
        email: User.email,
      });
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

Auth0ProviderWithNavigate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth0ProviderWithNavigate;
