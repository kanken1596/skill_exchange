import { useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()

    return (
    <aside>
      <h2 className="side-header">技能分類</h2>
      <ul className="side-ul">
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>程式設計</a>
        </li>
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>語言學習</a>
        </li>
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>烹飪技巧</a>
        </li>
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>攝影技巧</a>
        </li>
      </ul>

      <h2 className="side-header">熱門標籤</h2>
      <ul className="side-ul">
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>#Python</a>
        </li>
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>#日語</a>
        </li>
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>#烹飪</a>
        </li>
        <li className="side-li">
          <a className="side-a" href="#" onClick={(e) => {
            e.preventDefault()
            navigate('/404')
          }}>#攝影</a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar