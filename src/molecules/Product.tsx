import { Link } from "react-router-dom";

function Product() {
  return (
    // todo react icons chat icon bottomn left side of the second div
    // todo image containing two rows
    <Link
      to="/product-details"
      className="w-[350px] h-[150px]  border p-3 grid text-start rounded-md grid-cols-2 grid-rows-2"
    >
      <div>
        <p className="break-words">دوچرخه برند بایسیکل </p>
      </div>
      <img
        src="./src/assets/pics/item-1.jpeg"
        alt=""
        className="h-full  rounded-md col-start-2 row-span-2 w-full   "
      />
      <div className=" text-[14px] text-slate-700">
        <p>
          نو
          <br /> گران
          <br /> تهران
        </p>
      </div>
    </Link>
  );
}

export default Product;
