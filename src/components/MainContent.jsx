import SkillPost from './SkillPost'

function MainContent() {
  const skills = [
    {
      id: 1,
      title: '學習Python程式設計',
      provider: 'Alice',
      description: '我可以教你如何使用Python進行程式設計，從基礎到進階都可以。'
    },
    {
      id: 2,
      title: '學習日語會話',
      provider: 'Bob',
      description: '我可以幫助你提升日語會話能力，適合初學者和中級學習者。'
    },
    {
      id: 3,
      title: '學習烹飪技巧',
      provider: 'Charlie',
      description: '我可以教你一些簡單又美味的料理，適合家庭主婦和烹飪愛好者。'
    }
  ]

  return (
    <section className="main-content">
      <h2 className="content-head">最新技能發布</h2>
      <div>
        {skills.map((skill, index) => (
          <div key={skill.id}>
            <SkillPost 
              title={skill.title}
              provider={skill.provider}
              description={skill.description}
            />
            {index < skills.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainContent