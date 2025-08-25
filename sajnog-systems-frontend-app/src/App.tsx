import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage.tsx";
import Layout from "./components/Layout";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<MainPage/>}/>
              <Route path='/privacy'element={<PrivacyPolicyPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
