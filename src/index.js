import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import App from './main';
import '@solana/wallet-adapter-react-ui/styles.css';

//Initialize wallets
const wallets = [new PhantomWalletAdapter()];

//Set Solana network (devnet/mainnet)
const endpoint = clusterApiUrl('devnet'); 

//Wrap app with providers
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </StrictMode>
);