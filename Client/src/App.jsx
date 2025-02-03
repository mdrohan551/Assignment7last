

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
    return (
       <BrowserRouter>
           <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path='/' element={<HomePage/>}/>
                   {/* <Route path='/create' element={<CreatePage/>}/> */}
               </Routes>
           </Suspense>
       </BrowserRouter>
    );
};

export default App;