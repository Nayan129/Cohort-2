import HomeMiddleSection from "../components/HomeMiddleSection";

const HomePage = () => {
  return (
    <div className="bg-[#F3F5F7] flex flex-col gap-6 p-5">
      <button className="w-fit border px-2 py-1 rounded-2xl cursor-pointer">
        Home page
      </button>

      <h2 className="font-medium text-2xl max-w-3xl">
        Clean web design and intuitive user experience <br />
        that reflects the club's dynamic spirit <br />
        and premium feel.
      </h2>

      <HomeMiddleSection />
    </div>
  );
};

export default HomePage;
