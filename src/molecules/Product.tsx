function Product() {
  return (
    // todo react icons chat icon bottomn left side of the second div
    // todo image containing two rows
    <a
      href="/product-details"
      className="w-[350px] h-[150px]  border p-3 grid grid-cols-2 grid-rows-2 text-start rounded-md"
    >
      <div>
        <p className="break-words">دوچرخه برند بایسیکل </p>
      </div>
      <img
        src="./src/assets/pics/majazi.png"
        alt=""
        className="h-full border rounded-md"
      />
      <div className=" text-[14px] text-slate-700">
        <p> نو</p>
        <p> گران</p>
        <p> تهران</p>
      </div>
    </a>
  );
}

export default Product;
