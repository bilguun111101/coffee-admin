import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
// import Main from './Main/Main';
// import LogIn from "./LogIn/LogIn";
// import SignUp from "./SignUp/SignUp";

const Main = lazy(() => import("./Main/Main"));
const SignUp = lazy(() => import("./SignUp/SignUp"))
const LogIn = lazy(() => import("./LogIn/LogIn"));
const Layout = lazy(() => import("./Layout"));

const PagesRouter = () => {
    const [user, setUser] = useState(true);
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Layout>
    </Router>
  )
}

export default PagesRouter