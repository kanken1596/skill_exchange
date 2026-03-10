import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <h1 className="header-logo">技能交換平台</h1>
      <nav>
        <ul className="nav-ul">
          <li className="nav-li">
            <a 
              className="nav-a" 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
            >
              首頁
            </a>
          </li>
          <li className="nav-li">
            <a 
              className="nav-a" 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                navigate('/search')
              }}
            >
              尋找技能
            </a>
          </li>
          <li className="nav-li">
            <a 
              className="nav-a" 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                navigate('/provide')
              }}
            >
              提供技能
            </a>
          </li>
          <li className="nav-li">
            <a 
              className="nav-a" 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                navigate('/profile')
              }}
            >
              我的主頁
            </a>
          </li>
          <li className="nav-li">
            <a 
              className="nav-a" 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                navigate('/login')
              }}
            >
              登入/註冊
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header