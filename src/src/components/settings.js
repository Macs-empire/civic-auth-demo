import Navbar from '../components/navbar'

export default function Settings() {
  return (
    <div>
      <Navbar />
      <h1 style={{ margin: '20px' }}>Settings</h1>
      
      <div style={{ margin: '20px' }}>
        <label>
          Dark Mode: 
          <input type="checkbox" style={{ marginLeft: '10px' }} />
        </label>
      </div>
    </div>
  )
}