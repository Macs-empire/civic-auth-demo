import { Link } from 'react-router-dom'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Navbar() {
  const { publicKey } = useWallet()
  
  return (
    <nav style={{
      background: '#333',
      padding: '15px',
      display: 'flex',
      gap: '20px'
    }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      {publicKey && (
        <>
          <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
          <Link to="/settings" style={{ color: 'white' }}>Settings</Link>
        </>
      )}
    </nav>
  )
}