import { useState } from 'react';
import { AuthProvider } from '@civic/auth-web3';
import { useWallet } from '@solana/wallet-adapter-react';

export default function CivicAuth() {
  const { publicKey } = useWallet();
  const [authToken, setAuthToken] = useState(null);

  const handleAuth = async () => {
    try {
      //Initialize AuthProvider
      const auth = new AuthProvider({
        solana: { publicKey: publicKey.toString() },
        redirectUrl: window.location.origin,
        appName: 'Civic Auth Demo',
        appId: process.env.REACT_APP_CIVIC_APP_ID
      });
      
      //Trigger login flow
      const token = await auth.login();
      
      //Store token
      setAuthToken(token);
      console.log('Auth Token:', token);
      
    } catch (error) {
      console.error('Auth Error:', error);
    }
  };

  return (
    <div>
      {authToken ? (
        <p>✅ Authenticated! Token: {authToken.slice(0, 10)}...</p>
      ) : (
        <button onClick={handleAuth} className="civic-auth-button">
          Sign In with Civic
        </button>
      )}
    </div>
  );
}