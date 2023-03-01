import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './Detail/Detail';
import Layout from './Layout';
import Main from './Main/Main';
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";

// const Layout = lazy(() => import("./Layout"));
// const Main = lazy(() => import("./Main/Main"));
// const LogIn = lazy(() => import("./LogIn/LogIn"));
// const SignUp = lazy(() => import("./SignUp/SignUp"))
// const Detail = lazy(() => import("./Detail/Detail"));

const PagesRouter = () => {
    const [user, setUser] = useState(true);
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Main />}>
                  <Route path='/:id' element={<Detail />} />
                </Route>
                {/* <Route path='/login' element={<LogIn />} /> */}
                {/* <Route path='/signup' element={<SignUp />} /> */}
            </Routes>
        </Layout>
    </Router>
  )
}

export default PagesRouter