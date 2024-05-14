// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Layout } from './layout/Layout'
import { lazy, Suspense } from 'react'
import { Language } from './pages/Language'
import { Experience } from './pages/Experience'
import { Certificate } from './pages/Certificate'
import { Projects } from './pages/Projects'
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))
const Tools = lazy(() => import('./pages/Tools'))
const Loading = lazy(() => import('./components/Loading/Loading'))
function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Home />
        {/* <About /> */}
        <Tools />
        <Language />
        <Experience />
        <Certificate />
        <Projects />
      </Suspense>
    </>
  )
}

export default App
