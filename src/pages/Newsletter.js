import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="flex lg:flex-row md:flex-row container mx-auto  px-[30px] lg:px-[100px] justify-around py-[60px] lg:py-[100px] items-center flex-col">
      <div className="flex flex-col  ">
        <div className="flex flex-col items-center">
          <p className="font-serif text-darkGreen text-[25px] md:text-[30px] lg:text-[40px] mb-[10px] lg:mb-[40px] md:mb-[20px]">
            Sign up to our newsletter
          </p>
          <p className=" text-darkGreen text-[15px] md:text-[20px] lg:text-[25px] text-center md:max-w-[300px]">
            Exclusive online and in-store discounts directly to your email
          </p>
        </div>
        <div className="flex justify-center items-center mt-[20px] md:mt-[40px] lg:mt-[60px]">
          <form netlify className="flex flex-col items-center  max-w-[250px]">
            <input
              className="mt-[20px] max-h-[30px] w-full text-left p-3 text-blackR text-[15px] md:text-[16px] lg:text-[18px] border-darkGreen border-2 md:border-3 lg:border-4 max-w-[250px] lg:max-w-[400px]"
              type="email"
              placeholder="Email adress"
              name="email"
            />
            <br />
            <button
              className=" max-h-[30px] w-full text-center p-3  text-[15px] md:text-[16px] lg:text-[18px] border-darkGreen border-2 md:border-3 lg:border-4 max-w-[250px] flex items-center justify-center lg:max-w-[400px]  hover:bg-darkGreen active:bg-darkGreen hover:text-whiteR"
              type="submit"
            >
              <span className="">Suscribe</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex">
        <img
          className=" lg:max-h-[500px] max-h-[250px] mt-[30px]
        "
          src="/Images/palm-tree.jpg"
          alt="team"
        />
      </div>
    </div>
  );
}

export default Newsletter;
