import {
  BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ROUTES } from './utils/routes';

function App() {
  // React.useEffect(() => {
  //   if (ROUTES.length > 1) {
  //     // location.reload()
  //   }
  //   else if (ROUTES.length == 1 && window.location.pathname != '/login') {
  //     window.location.href = window.location.origin + '/login'
  //   }
  // }, [])
  return (
    <>
      <Router>
        <h1 className='bg-slate-800 text-white text-3xl font-heading font-bold p-3'>Admin Panel</h1>
        <div>
          <ul className='mb-4 flex gap-3 p-3 border-b border-gray-200'>
            {ROUTES.map(route =>
              <li>
                <Link className='bg-slate-400 p-1 pr-6 pl-6 rounded text-white' to={route.path}>{route.name}</Link>
              </li>
            )}
          </ul>

          <div className='pl-4 pr-4'>
            <Routes>
              {ROUTES.map(route =>
                <Route path={route.path} element={route.component} />
              )}
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

