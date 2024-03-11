import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import NewProduct from "./pages/NewProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/Newproduct",
    element: <NewProduct />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
