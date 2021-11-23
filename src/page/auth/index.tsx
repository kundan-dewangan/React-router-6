import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

const Login = React.lazy(() => import('./login'));

const Auth = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Routes>
                <Route
                    path={`/`}
                    element={<Navigate replace to={`${pathname}/login`} />}
                />
                <Route
                    path={`login`}
                    element={<Login />}
                />
                <Route
                    path="/:pageName"
                    element={<Navigate replace to="/error" />}
                />
            </Routes>
        </>
    );
};

export default Auth;
