import { useNavigate } from 'react-router-dom'

function SkillPost({ title, provider, description }) {
  const navigate = useNavigate()

  const handleContactClick = () => {
    // 導向 404 頁面
    navigate('/404')
  }

  return (
    <div className="skill-post">
      <h3 className="post-head">{title}</h3>
      <p>提供者：{provider}</p>
      <p>描述：{description}</p>
      <button onClick={handleContactClick}>聯繫提供者</button>
    </div>
  )
}

export default SkillPost