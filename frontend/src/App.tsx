import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './pages/Footer';
import { Login } from './pages/Login';
import { Layout } from './layout/Layout';

const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const Language = lazy(() => import('./pages/Language'));
const Experience = lazy(() => import('./pages/Experience'));
const Certificate = lazy(() => import('./pages/Certificate'));
const Projects = lazy(() => import('./pages/Projects'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Loading = lazy(() => import('./components/Loading/Loading'));

function MainLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <Language />
      <Experience />
      <Certificate />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/login' element={<Layout />} >
            <Route index element={<Login />} />
          </Route>
          <Route path='*' element={<PageNotFound />} /> 
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
