import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./HomePage";
import { TestPage } from "./TestPage";
import { TestPage2 } from "./TestPage2";
import { Nav } from "./Nav";
import { UnderPage } from "./UnderPage";
import { NoMatchPage } from "./NoMatchPage";

export const Router = () => {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/test1/" element={<TestPage />}>
          {/* 중첩라우트 사용시 "/" 없이 상대경로여야 함 */}
          <Route path="under-page" element={<UnderPage />}/>
        </Route>
        <Route path="/test2" element={<TestPage2 />} />
        {/* 불일치 페이지 사이트 */}
        <Route path="*" element={<NoMatchPage/> } />
      </Routes>
    </BrowserRouter>
  )
}