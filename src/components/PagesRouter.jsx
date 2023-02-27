import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

const Main = lazy(() => import("./Main/Main"));
const LogIn = lazy(() => import("./LogIn/LogIn"))
const SignUp = lazy(() => import("./SignUp/SignUp"))

const PagesRouter = () => {
    const [user, setUser] = useState(true);
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Main />} />
                {
                    user ? (
                        <>
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/signup' element={<SignUp />} />
                        </>
                    ) : <></>
                }
            </Routes>
        </Layout>
    </Router>
  )
}

export default PagesRouter