import Header from "../oragans/Header";
import SideBar from "../oragans/SideBar";
import Products from "../oragans/products";

function MainPage() {
  return (
    <>
      <Header />
      <section className="md:h-screen w-screen flex flex-col md:flex-row overflow-hidden mt-8">
        <SideBar />
        <Products />
      </section>
    </>
  );
}

export default MainPage;
