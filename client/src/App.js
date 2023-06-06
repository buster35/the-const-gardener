import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer} from "./components"
import { UserProvider } from "./ctx/UserContext";
import { HomePage, Login, PostItem } from "./pages";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Header />
          <div className="pt-3 px-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/post/:id" element={<PostItem />} />
            </Routes>
          </div>
          <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
