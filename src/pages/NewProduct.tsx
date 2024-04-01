import { useEffect } from "react";
import LogIn from "../oragans/LogIn";
import Header from "../oragans/Header";
// import CreateProduct from "../oragans/CreateProduct";
import appAxios from "../components/server";
import { useRecoilState } from "recoil";
import { rAuth } from "../recoil/states.atom";
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(rAuth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    appAxios
      .post("/authorize", {
        token,
      })
      .then((res) => {
        console.log(res);
        setAuth(true);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        
      });
  }, []);
  // todo chek the validation of token and if true > CreateProduct: false > LogIn and loading
  return (
    <>
      <Header></Header>
      <section className="bg-yellow-200 w-screen h-[calc(100vh-64px)] mt-16">
        <LogIn></LogIn>
        {/* <CreateProduct></CreateProduct> */}
      </section>
    </>
  );
}

export default NewProduct;
