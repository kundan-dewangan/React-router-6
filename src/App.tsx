import React, { Suspense, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageApp = React.lazy(() => import('./page/app'));
const PageAuth = React.lazy(() => import('./page/auth'));
const PageError = React.lazy(() => import('./page/error'));


//Check Authentication 
const AuthRoute = ({ children, authUser }: { children: JSX.Element, authUser: boolean }) => {
  let location = useLocation();
  if (!authUser) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
  return children;
}

function App() {
  const loginDetails = localStorage.getItem('auth') == "true" ? true : false
  const [user] = useState(loginDetails || false)
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<div className="loading" />}>
        <BrowserRouter>
          <Routes>
            <Route path="app/*" element={
              <AuthRoute authUser={user}>
                <PageApp />
              </AuthRoute>
            }>
            </Route>
            <Route
              path="auth/*"
              element={<PageAuth />}
            />
            <Route
              path="/:pageName"
              element={<Navigate replace to="/error" />}
            />
            <Route
              path="/error"
              element={<PageError />}
            />
            <Route
              path="/"
              element={<Navigate replace to="/app" />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default App;

