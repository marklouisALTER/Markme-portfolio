import React from 'react'
import { lazy, Suspense } from 'react';
import { Footer } from './Footer';
const Navbar = lazy(() => import('../components/Navbar/Navbar'));
const Home = lazy(() => import('./Home'));
const Language = lazy(() => import('./Language'));
const Experience = lazy(() => import('./Experience'));
const Certificate = lazy(() => import('./Certificate'));
const Projects = lazy(() => import('./Projects'));
const Blogs = lazy(() => import('./Blogs'));
const Loading = lazy(() => import('../components/Loading/Loading'));

export const Portfolio:React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
        <Navbar />
        <Home />
        <Language />
        <Experience />
        <Certificate />
        <Projects />
        <Blogs />
        <Footer />
    </Suspense>
  )
}
