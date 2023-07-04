import { MainBody, Logo } from "./styles/BaseStyle"
import './App.css';
import LoginPage from "./containers/LoginPage";
import NavigationComponent from "./components/NavigationComponent";

function App() {
  return (
    <MainBody>
      <NavigationComponent />
      {/*       <LoginPage />
      <Logo /> */}
    </MainBody>
  );
}

export default App;