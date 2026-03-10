import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Sidebar />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

export default Home