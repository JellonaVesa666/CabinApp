import { MainBody, Logo } from "./styles/BaseStyle"
import './App.css';
import LoginPage from "./pages/LoginPage";
import NavigationComponent from "./components/NavigationComponent";
import { SidebarComponent } from "./components/SidebarComponent";
import { BodyComponent } from "./components/BodyComponent";

function App() {
  return (
    <MainBody>
      <NavigationComponent />
      <BodyComponent />
      {/*       <LoginPage />
      <Logo /> */}
    </MainBody>
  );
}

export default App;