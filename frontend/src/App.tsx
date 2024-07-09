import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Layout } from './layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';
import { Portfolio } from './pages/Portfolio';
import { AdminLayout } from './layout/AdminLayout';
import { TodoList } from './pages/dashboard/TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/login' element={<Layout />} >
          <Route index element={<Login />} />
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='todo-list' element={<TodoList />} />
        </Route>
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
