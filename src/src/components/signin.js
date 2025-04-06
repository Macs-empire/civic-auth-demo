import { useWallet } from '@solana/wallet-adapter-react'
import { useNavigate } from 'react-router-dom'
import WalletConnection from '../components/WalletConnection'

export default function SignIn() {
  const { publicKey } = useWallet()
  const navigate = useNavigate()

  if (publicKey) {
    navigate('/dashboard')
  }
// eslint-disable-next-line no-lone-blocks
{/* I can decide to center the div later margin: '20px auto',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor:'512da8',
        color: 'white*/}
  return (
    <div className="signin-page">
      <h1>Welcome to My App</h1>
      <p>Connect your wallet to continue</p>
      <WalletConnection />
    </div>
  )
}