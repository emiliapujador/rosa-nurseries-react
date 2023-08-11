export default function Comments() {
  return (
    <div className="bg-[#E8ECED] flex flex-col justify-center items-center text-center md:flex-col py-36 lg:py-44">
      <h3 className="lg:text-[40px] md:text-[30px] text-[25px] text-center font-serif  text-darkGreen px-[30px] md:px-[30px]  md:w-[400px] lg:w-[500px] lg:pb-[70px]">
        What our customers say about us
      </h3>
      <div className="px-[30px] flex flex-col gap-3 lg:gap-7 md:flex-col lg:flex-row lg:flex-1 md:gap-0 max-w-[400px] lg:max-w-[1500px]">
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
