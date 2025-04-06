import { useWallet } from '@solana/wallet-adapter-react';
import CivicAuth from './components/CivicAuth';
import './App.css';
function App() {
  const { connected, publicKey } = useWallet();

  return (
    <div className="App">
      <h1>Civic Auth Demo</h1>
      {connected ? (
        <div>
          <p>Wallet: {publicKey.toString().slice(0, 8)}...</p>
          <CivicAuth />
        </div>
      ) : (
        <p>🔌 Connect wallet to begin</p>
      )}
    </div>
  );
}

export default App;