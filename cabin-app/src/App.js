import './App.css';
import { MainBody, Logo } from "./styles/BaseStyle"
import LoginPage from "./pages/LoginPage";
import NavigationModule from "./components/NavigationModule";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (
    <MainBody className="container-fluid vh-100 d-flex flex-column m-0 p-0">
      <NavigationModule />
      <SidebarComponent />
    </MainBody>
  );
}

export default App;