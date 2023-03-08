import { NavContainer } from './AppStyled';
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

export default function App() {
    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>

            <HomePage />
            <SeatsPage />
            <SessionsPage />
            <SuccessPage />
        </>
    )
}
