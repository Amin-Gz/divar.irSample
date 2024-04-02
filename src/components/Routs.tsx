import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/MainPage";
import FirstPage from "../pages/FirstPage";
import NewProduct from "../pages/NewProduct";
import PageNotFound from "../pages/PageNotFound";
import { RecoilRoot } from "recoil";
import ProductDetails from "../pages/ProductDetails";
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
    path: "/New-product",
    element: <NewProduct />,
  },
  {
    path: "/Product-details",
    element: <ProductDetails />,
  },
]);
function Routs() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default Routs;
