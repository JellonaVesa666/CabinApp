import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import { MainBody, Logo } from "./styles/BaseStyle"
import LoginPage from "./pages/LoginPage";
import NavigationModule from "./components/NavigationModule";
import SearchPage from './pages/SearchPage';
import SidebarModule from './components/SidebarModule';

function App() {
  return (
    <MainBody className="container-fluid vh-100 d-flex flex-column m-0 p-0">
      <NavigationModule />
      <SidebarModule />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </MainBody>
  );
}

export default App;