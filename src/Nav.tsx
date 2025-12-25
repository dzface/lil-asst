import { Link } from "react-router"


export const Nav = () => {
  return (<>
    <div>
      <Link to='/'> Home</Link>
      <Link to='/test1'> Test</Link>
      <Link to='/test2'> Test2</Link>
    </div>
  
  </>)
}


// onChangem onClick 이벤트 발생시 이동할 때는 useNavtivate 사용
// const navigate = useNavigate();
// const onClickEvent = () => {
//   navigate('이동 할 주소', {replace: true});  //replace : true 뒤로가기 불가
// }
// useLocation() 사용해서 state 전달 가능
// navigate("/", { state: { cardId: cardId } });

// const location = useLocation();
// const { cardId } = location.state;