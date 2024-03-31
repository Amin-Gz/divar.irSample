import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import NewProduct from "./pages/NewProduct";
import PageNotFound from "./pages/PageNotFound";
import { RecoilRoot } from "recoil";
import ProductDetails from "./pages/ProductDetails";
const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
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
  {
    path: "/Productdetails",
    element: <ProductDetails />,
  },
]);
function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
