import './App.css';
import { MainBody, Logo } from "./styles/BaseStyle"
import LoginPage from "./pages/LoginPage";
import NavigationComponent from "./components/NavigationComponent";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (
    <MainBody>
      <NavigationComponent />
      <SidebarComponent/>
      {/*       <LoginPage />
      <Logo /> */}
    </MainBody>
  );
}

export default App;