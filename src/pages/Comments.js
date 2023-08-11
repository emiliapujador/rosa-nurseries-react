import "./Comments.css";

function Comments() {
  return (
    <div className="bg-[#E8ECED] h-[500px] lg:h-[500px] md:[400px] ">
      <h3 className="lg:text-[40px] md:text-[30px] text-[25px] text-center font-serif container mx-auto text-darkGreen px-[30px] md:px-[30px] lg:px-[100px] lg:mt-[60px] mt-[40px] md:pt-[50px] pt-[30px]">
        What our customers say about us
      </h3>
      <div>
        <div clasName="flex flex-col items-center justify-center px-[30px]">
          <p clasName="text-[15px] md:text-[20px] lg:text-[25px] text-blackR">
            {" "}
            “Excellent treatment by the employees. Incredible variety of plants.
            I will be back!”.
          </p>
          <p clasName="text-[13px] md:text-[18px] lg:text-[22px] text-blackR">
            Jack Smith
          </p>
          <div>
            <p>
              "Beautiful nursery in the heart of Chelsea. The employees advised
              me on what I was looking for. Thank you very much!"
            </p>
            <p>Michelle Harvey</p>
          </div>
          <div>
            <p>
              Warm and cordial treatment. The place feels very peaceful. I also
              bought online and had my order at home in two days. Highly
              recommended”
            </p>
            <p>Samuel Holland</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;

{
  /* <div>
        <div className="flex ">
          <span class="comment1">
            “ Excellent treatment by the employees. Incredible variety of
            plants. I will be back!”.
          </span>
          <p class="customer-name">Jack Smith</p>
        </div>

        <div class="">
          <span class="comment2">
            “Beautiful nursery in the heart of Chelsea. The employees advised me
            on what I was looking for. Thank you very much! ”.
          </span>
          <p customer-name>Michelle Harvey</p>
        </div>

        <div class="">
          <span class="comment3">
            Warm and cordial treatment. The place feels very peaceful. I also
            bought online and had my order at home in two days. Highly
            recommended”.
          </span>
          <p class="costumer-name">Samuel Holland</p>
        </div>
      </div> */
}
