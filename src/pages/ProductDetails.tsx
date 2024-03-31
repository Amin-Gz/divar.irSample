import BreadCrump from "../molecule/BreadCrump";
import Header from "../oragans/Header";

function ProductDetails() {
  return (
    <>
      {/* tablet and laptop */}
      <section className="w-full bg-slate-100 hidden md:block">
        <Header />
        <BreadCrump />
        <div className="w-screen h-screen flex ">
          <div className="row1 bg-blue-500 h-full"></div>
          <div className="row2 bg-red-700 h-full"></div>
        </div>
      </section>
      {/* Mobile */}
      <section className="block md:hidden">
        <img src="./src/assets/pics/offline.svg" alt="" />
      </section>
    </>
  );
}

export default ProductDetails;
