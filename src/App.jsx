import React, {useState} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [cart, setCart] = useState({});

  // Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NavigationBar/>}>
          <Route index element={<IndexPage/>}/>
          <Route path="about" element={<AboutPage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </>
    )
  )
  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  );
}

export default App;
