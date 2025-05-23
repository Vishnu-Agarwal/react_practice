

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import { Update } from './Update';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/edit/:id" element={<Add/>}></Route>  
        </Route>
      </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
