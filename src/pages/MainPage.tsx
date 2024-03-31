import Header from "../oragans/Header";
import SideBar from "../oragans/SideBar";
import Products from "../oragans/products";

function MainPage() {
  return (
    <>
      <Header />
      <section className="md:h-[calc(100vh-64px)] md:mt-[64px] w-screen flex flex-col md:flex-row overflow-hidden pt-8">
        <SideBar />
        <Products />
      </section>
    </>
  );
}

export default MainPage;
