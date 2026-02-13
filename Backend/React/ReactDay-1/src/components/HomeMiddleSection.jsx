import mainImage from "../assets/main-image.png";
const HomeMiddleSection = () => {
  return (
    <div>
      <div className="homeMiddleSection bg-[#FFFFFF] flex flex-col gap-4 w-full h-90 p-4 rounded-xl">
        <div className="homeNavbar flex justify-between items-center p-2">
          <div className="font-bold">
            <h2>Horizon Courts</h2>
          </div>
          <div className="flex justify-between gap-6 font-medium text-sm">
            <a href="" className="cursor-pointer hover:font-bold">
              About Us
            </a>
            <a href="" className="cursor-pointer hover:font-bold">
              Services
            </a>
            <a href="" className="cursor-pointer hover:font-bold">
              Coaches
            </a>
            <a href="" className="cursor-pointer hover:font-bold">
              Events
            </a>
            <a href="" className="cursor-pointer hover:font-bold">
              Contacts
            </a>
          </div>
          <div className="py-1 px-2 border rounded-2xl bg-black text-white font-light whitespace-nowrap outline-none border-none">
            <button className="cursor-pointer">
              Book now <i class="ri-arrow-right-up-long-line"></i>
            </button>
          </div>
        </div>
        <div
          className="homeImg h-full w-[90] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${mainImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default HomeMiddleSection;
