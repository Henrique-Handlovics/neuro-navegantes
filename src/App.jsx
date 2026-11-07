import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Assuntos from './components/Assuntos/Assuntos'
import Videos from './components/Videos/Videos'
import Tutoriais from './components/Tutorial/Tutorial'
import Security from './components/Seguranca/Seguranca'
import Quiz from './components/Quiz/Quiz'
import Footer from './components/Footer/Footer'
import AccessibilityPanel from './components/Acessibilidade/AccessibilityPanel'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        <Assuntos />
        <Videos />
        <Tutoriais />
        <Security />
        <Quiz />
      </main>
      <Footer />
      <AccessibilityPanel />
    </>
  )
}

export default App
