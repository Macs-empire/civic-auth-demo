import { useWallet } from '@solana/wallet-adapter-react'
import Navbar from '../components/navbar'

export default function Dashboard() {
  const { publicKey } = useWallet()

  return (
    <div>
      <Navbar />
      <h1 style={{ margin: '20px' }}>Your Dashboard</h1>
      
      {publicKey && (
        <div style={{ margin: '20px' }}>
          <p>Wallet Address: {publicKey.toBase58()}</p>
          <p>Balance: -- SOL</p>
        </div>
      )}
    </div>
  )
}