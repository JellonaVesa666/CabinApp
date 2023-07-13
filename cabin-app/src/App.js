import './App.css';
import { MainBody, Logo } from "./styles/BaseStyle"
import LoginPage from "./pages/LoginPage";
import NavigationComponent from "./components/NavigationComponent";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (


    <MainBody>
      <div class="row">
        <div class="col m-0 p-0">
          <NavigationComponent />
        </div>
      </div>
      <div class="row flex-grow-1">
        <div class="col-12 border position-relative">
          <SidebarComponent />
          
        </div>
      </div>
      {/*       <LoginPage />
      <Logo /> */}
    </MainBody>
  );
}

export default App;