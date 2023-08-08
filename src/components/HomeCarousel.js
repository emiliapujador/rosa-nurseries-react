function HomeCarousel() {
  return (
    <div>
      <img
        id="hero mobile"
        className="w-[100%] h-auto md:hidden lg:hidden m-0"
        src="/Images/new-mobile-hero.png"
        alt="Rosa Nurseries"
      />
      <img
        id="hero desktop"
        className="hidden md:block lg:block md:w-[100%] lg:w-[100%] md:h-auto lg:h-auto md:mt-6"
        src="/Images/new-desktop-hero.png"
        alt="Rosa Nurseries"
      />
    </div>
  );
}

export default HomeCarousel;
