import './App.css';

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider, RequireAuthProvider } from './providers/';
import { MenuComponent } from './components/';
import { EntryModule, DashboardModule } from './modules';

import { Button } from "react-bootstrap";
import { AboutPageModule } from './modules/AboutPageModule';

function App() {

  const Layout = () => {
    return(
      <div>
        <MenuComponent />
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>)
  }

  return (
    <div className="App">
      {/* <div>STATE { JSON.stringify(componentState) }</div> */}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            
            <Route
              path="/entry"
              element={ <EntryModule /> } />

            <Route element={<RequireAuthProvider><Layout /></RequireAuthProvider>}>
              <Route
                path="/"
                element={<DashboardModule />} />

              <Route
                path="/about"
                element={<AboutPageModule />} />

            </Route>

            <Route
              path="*"
              element={<div className='w-100 vh-100 d-flex flex-column justify-content-center align-items-center gap-4'>
                <div>Error 404</div>
                <Button href="/">Wróć na główną stronę</Button>
              </div>} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
