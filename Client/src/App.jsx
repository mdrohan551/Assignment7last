

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const DetailsPage = lazy(() => import('./pages/DetailsPage.jsx'));
const Blogpage = lazy(() => import('./pages/Blogpage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));



const App = () => {
    return (
       <BrowserRouter>
           <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path='/' element={<HomePage/>}/>
                   <Route path="/details/:slug" element={<DetailsPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/blog' element={<Blogpage/>}/>
                    <Route path='/service' element={<ServicesPage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>

               </Routes>
           </Suspense>
       </BrowserRouter>
    );
};

export default App;