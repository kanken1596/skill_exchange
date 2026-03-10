import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="app-container">
      <Header />
      <main style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>404</h1>
          <h2 style={{ fontSize: '24px', margin: '0 0 20px 0' }}>頁面未找到</h2>
          <p style={{ fontSize: '16px', color: '#555', margin: '0 0 20px 0' }}>
            抱歉，您訪問的頁面不存在或正在開發中。
          </p>
          <button 
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#755b23',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            返回首頁
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound