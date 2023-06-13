import { MainBody, Logo } from "./styles/BaseStyle"
import './App.css';
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <MainBody>
      <LoginPage />
      <Logo />
    </MainBody>
  );
}

export default App;