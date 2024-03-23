import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

export default function Auth0ProviderWithNavigate({ children }: Props) {
  const domain = import.meta.env.VITE_AUTH0_DOMIAN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectURI = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectURI) {
    throw new Error("unable to initialise auth!");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("User: ", user);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectURI,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
