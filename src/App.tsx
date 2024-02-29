import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
