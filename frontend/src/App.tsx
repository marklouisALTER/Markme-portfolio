import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Layout } from './layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';
import { Portfolio } from './pages/Portfolio';
import { AdminLayout } from './layout/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/login' element={<Layout />} >
          <Route index element={<Login />} />
        </Route>
        <Route path='/dashboard' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
