import { NavContainer } from './AppStyled';
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

export default function App() {

  const URL = 'https://mock-api.driven.com.br/api/v8/cineflex';
  
  return (
      <>
          <NavContainer>CINEFLEX</NavContainer>
          
          <HomePage URL={URL} />
          <SeatsPage URL={URL} />
          <SessionsPage URL={URL} />
          <SuccessPage URL={URL} />
      </>
  );
}
