import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AboutUsLanding() {
  return (
    <div className=" px-[30px] container md:px-[30px] lg:px-[100px] mx-auto md:pt-[60px] lg:pt-[150px] pt-[30px]">
      <div className="flex flex-col items-center md:flex-row md:container md:mx-auto">
        <div className="flex flex-1">
          <img
            className="md:h-[300px] md:w-[300px] hidden md:block lg:block md:rounded-[100%] lg:h-[400px] lg:w-[400px]
        "
            src="/Images/about-landing.jpg"
            alt="team"
          />
        </div>
        <div className="flex flex-col md:flex-1">
          <h2 className="font-serif text-[25px] self-center py-[30px] font-medium text-[#243B30] md:text-[30px] lg-text-[46px]">
            About us
          </h2>
          <div className="text-[18px] text-[#2C2929] text-justify font-normal lg:text-[20px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.{" "}
            </p>
            <p>
              Ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu.
            </p>
          </div>

          <p
            className=" text-darkGreen font-serif text-[18px] self-center items-center
            border-b-[1px] border-darkGreen max-w-[90px] mt-[20px] active:text-lightGreen hover:text-lightGreen lg:text-[20px] lg:max-w-[100px] font-light"
          >
            Read more
          </p>
        </div>
        <div className="pt-[30px] md:hidden lg:hidden">
          <img
            className="w-[250px] h-[250px] rounded-[100%] md:hidden
        "
            src="/Images/about-landing.jpg"
            alt="team"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsLanding;
