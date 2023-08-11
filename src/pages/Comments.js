export default function Comments() {
  return (
    <div className="bg-[#E8ECED] flex flex-col justify-center items-center text-center gap-3  lg:gap-5 md:flex-col py-36 lg:py-52">
      <h3 className="lg:text-[40px] md:text-[30px] text-[25px] text-center font-serif  text-darkGreen px-[30px] md:px-[30px]  md:w-[400px] lg:w-[500px] lg:mb-8">
        What our customers say about us
      </h3>
      <div className="px-[30px] flex flex-col gap-3 md:flex-col lg:flex-row lg:flex-1 md:gap-0 max-w-[400px] lg:max-w-none">
        <Quote name="Jack Smith">
          "Excellent treatment by the employees. Incredible varity of plants. i
          will be back."
        </Quote>
        <Quote name="Michelle Harvey">
          "Beautiful nursery in the heart of Chelsea. The employees advised me
          on what I was looking for. Thank you very much!"
        </Quote>
        <Quote name="Samuel Holland">
          "Excellent treatment by the employees. Incredible varity of plants. i
          will be back."
        </Quote>
      </div>
    </div>
  );
}

function Quote({ name, children }) {
  return (
    <div clasName="flex flex-col ">
      <p className="text-[16px] md:text-[20px] lg:text-[22px] text-blackR">
        {children}
      </p>
      <span className="pt-[10px] text-[14px] font-bold">{name}</span>
    </div>
  );
}

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
