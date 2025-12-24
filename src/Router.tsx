import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage";
import { TestPage } from "./TestPage";
import { TestPage2 } from "./TestPage2";


export const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/test1" element={<TestPage/>} />
        <Route path="/test2" element={ <TestPage2/>} />
      </Routes>
    </BrowserRouter>
  )
}