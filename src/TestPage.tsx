import { Outlet } from "react-router-dom"; 
//중첩라우트 사용시 Outlet을 반드시 넣어주거나 부모경로 끝에 /*를 추가해주어야함
export const TestPage = () => {
  return (
    <>
      This is Test page
      <Outlet/>
    </>
  );
};
