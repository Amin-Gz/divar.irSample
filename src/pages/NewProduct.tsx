import { useEffect } from "react";
import LogIn from "../oragans/LogIn";
import Header from "../oragans/Header";
import CreateProduct from "../oragans/CreateProduct";
import appAxios from "../components/server";
import { useRecoilState } from "recoil";
import { rAuth, rBool, rLoading } from "../recoil/states.atom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const [auth, setAuth] = useRecoilState(rAuth);
  const [load, setload] = useRecoilState(rLoading);
  const [bool, setbool] = useRecoilState(rBool);
  const navigate = useNavigate();
  function backButonHandler() {
    !bool && setbool(true);
    bool && navigate("/main");
  }
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
  function modalhandler(): any {
    setload(false);
  }
  return (
    <>
      <div className="first:hidden first:md:block">
        <Header />
      </div>
      {/* mobile header */}
      <header className="fixed top-0 right-0 w-full h-[64px] px-6 border-b flex md:hidden items-center justify-start gap-4">
        <button
          className="*:scale-125 *:text-divarFontHover"
          onClick={() => {
            backButonHandler();
          }}
        >
          <IoMdArrowRoundForward />
        </button>
        <form action="" className="relative " hidden={bool}>
          <input
            type="text"
            placeholder="جستجوی در دسته ها"
            className="  px-1 py-[5px] rounded-md outline-none w-full border hover:border-divarFont focus:border-divar font-[100] inline-block relative pr-[30px]"
          />
          <FaSearch className="absolute top-[10px] right-[10px] fill-[rgba(0,30,50,0.35)]" />
        </form>
        <p hidden={!bool}>ثبت آگهی</p>
      </header>
      {/* -- */}
      <section className=" w-screen h-[calc(100vh-64px)] mt-16 flex items-start justify-center">
        <div className=" rounded-full border p-4 text-slate-500" hidden={!load}>
          ...Loading...
        </div>
        {/*  {auth ? setload(true) : setload(false)} question_question_question_questio_question*/}
        {auth && modalhandler()}
        <LogIn hidden={!load} />
        <CreateProduct hidden={load} />
      </section>
    </>
  );
}

export default NewProduct;
