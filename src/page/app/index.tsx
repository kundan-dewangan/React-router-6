// import React, { Component, Suspense } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// // import AppLayout from '../../layout/AppLayout';

// const HomePageRender = React.lazy(() =>
//     import(/* webpackChunkName: "pages" */ './home/home')
// );

// class App extends Component {
//     constructor(props: any) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         const match  = this.props;
//         console.log("Match::",match)
//         return (
//             // <AppLayout>
//             <div className="dashboard-wrapper">
//                 <Suspense fallback={<div className="loading" />}>
//                     <Routes>
//                         {/* <Navigate
//                             to={`${match.url}/home`}
//                         /> */}

//                         <Route path="*" element={<Navigate to={`/home`} />} />

//                         <Route
//                             path={`/home`}
//                             element={<HomePageRender />}
//                         />
//                         {/* <Navigate to="/error" /> */}
//                     </Routes>
//                 </Suspense>
//             </div>
//             // </AppLayout>
//         );
//     }
// }


// export default App


import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

 const HomePageRender = React.lazy(() => import('./home/home'));

const AppComponent = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Routes>
                <Route
                    path={`/`}
                    element={<Navigate replace to={`${pathname}/home`} />}
                />
                <Route
                    path={`home`}
                    element={<HomePageRender />}
                />
                <Route
                    path="/:pageName"
                    element={<Navigate replace to="/error" />}
                />
            </Routes>
        </>
    );
};

export default AppComponent;
