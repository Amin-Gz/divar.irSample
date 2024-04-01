import FpCities from "../oragans/FpCities";
import FpFooter from "../oragans/FpFooter";
import FpNavbar from "../oragans/FpNavbar";

function Firstpage() {
  return (
    <section className=" w-screen h-screen flex justify-center items-start">
      <div className="w-screen max-w-[568px]  flex flex-col items-center justify-start">
        <img
          src="./src/assets/pics/divarLogo.svg"
          className="w-[64px] h-[64px] md:mt-[40px] mt-[16px] mb-[16px]"
          alt="Divar_Logo"
        />
        <FpNavbar></FpNavbar>
        <FpCities></FpCities>
        <FpFooter></FpFooter>
      </div>
    </section>
  );
}

export default Firstpage;
