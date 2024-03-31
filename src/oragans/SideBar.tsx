import { GrLocation } from "react-icons/gr";
function SideBar() {
  return (
    <div className="felx flex-col w-full md:w-[380px] md:h-full items-center justify-between  p-5">
      <ul className="grid grid-cols-4 md:grid-cols-1 gap-6 text-[14px]">
        <p className="hidden md:inline-block">دسته ها</p>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/real-estate.png"
              alt="house"
              className="md:hidden w-16"
            />
            املاک
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50  w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/vehicles.png"
              alt="house"
              className="md:hidden w-16"
            />
            وسایل نقلیه
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50  w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/electronic-devices.png"
              alt="house"
              className="md:hidden w-16"
            />
            کالای دیجیتال
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/home-kitchen.png"
              alt="house"
              className="md:hidden w-16"
            />
            خانه و آشپزخانه
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/services.png"
              alt="house"
              className="md:hidden w-16"
            />
            خدمات
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/personal.png"
              alt="house"
              className="md:hidden w-16"
            />
            وسایل شخصی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/leisure-hobbies.png"
              alt="house"
              className="md:hidden w-16"
            />
            سرگرمی و فراغت
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50  w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/community.png"
              alt="house"
              className="md:hidden w-16"
            />
            اجتماعی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/tools-materials-equipment.png"
              alt="house"
              className="md:hidden w-16"
            />
            تجهیزات و صنعتی
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-center md:text-start bg-slate-50 w-fit md:w-full flex flex-col items-center md:flex-row"
          >
            <GrLocation className="stroke-[rgba(0,30,50,0.35)] scale-110 ml-2 hidden md:block " />
            <img
              src="./src/assets/pics/jobs.png"
              alt="house"
              className="md:hidden w-16"
            />
            استخدام و کاریابی
          </a>
        </li>
      </ul>
      <br />
      <hr />
      <div className="hidden md:block">محل</div>
      <hr />
      <div className="hidden md:block">قیمت</div>
      <hr />
      <div className="hidden md:block">وضعیت آگهی</div>
      <hr />
    </div>
  );
}

export default SideBar;
