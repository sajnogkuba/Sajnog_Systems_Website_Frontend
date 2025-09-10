import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
// import TestPage from "./pages/TestPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<MainPage/>}/>
              <Route path='/privacy' element={<PrivacyPolicyPage />} />
              {/* <Route path='/test' element={<TestPage />} /> */}
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
