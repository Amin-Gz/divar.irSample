import Header from "../oragans/Header";
import MobileMenu from "../oragans/MobileMenu";
import SideBar from "../oragans/SideBar";
import Products from "../oragans/products";

function MainPage() {
  return (
    <>
      <Header />
      <section className="md:h-[calc(100vh-64px)] mt-[64px] w-screen flex flex-col md:flex-row overflow-hidden pt-8">
        <SideBar />
        <Products />
        <MobileMenu />
      </section>
    </>
  );
}

export default MainPage;
