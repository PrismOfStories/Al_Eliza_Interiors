import { FaChevronRight } from "react-icons/fa";

export default function ArchitectureHero() {
  return (
    <section className=" h-full bg-[#fbfbfb] px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="w-full max-w-[100rem] min-h-screen mx-auto h-full flex flex-col justify-between space-y-8 py-20 lg:py-40">
        <div className="w-full">
          <p className="text-center text-lg sm:text-lg uppercase tracking-[0.25em] text-gold-dark font-medium font-michroma">
            {" "}
            Established in 2021
          </p>
        </div>

        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16 ">
          <div className="font-michroma ">
            <div className="text-[140px] mb-6 xl:text-8xl leading-[0.8] font-black text-black tracking-tight">
              +4
            </div>
            <p className="text-[11px]  uppercase tracking-[0.15em] text-gold-dark mt-2 ml-1">
              Years of experience
            </p>
          </div>
          <div>
            <h1 className="font-black text-black tracking-tight space-y-14 font-michroma">
              <p className="w-full text-center text-2xl lg:text-7xl tracking-widest">
                YOUR DREAMS
              </p>
              <p className="w-full text-center text-xl lg:text-6xl -mt-2 lg:-mt-4 tracking-widest">
                OUR EXPERTISE
              </p>
            </h1>
          </div>
          <div className="font-michroma">
            <div className="text-[140px]  mb-6 xl:text-8xl leading-[0.8] font-black text-black tracking-tight">
              10+
            </div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gold-dark mt-2 mr-1">
              Successful Projects
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          <div>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] tracking-widest text-black max-w-[50ch] mx-auto lg:mx-0 font-michroma">
              At Al Eliza Interior Design , we transform residential and
              commercial spaces into refined, functional environments. Our
              designs elevate mood, enhance utility, and add lasting value.
              Collaborating closely, we craft elegant yet practical interiors
              that leave remarkable first impressions.
            </p>
          </div>
          <div className="font-michroma">
            <p className="text-[14px] sm:text-[15px] tracking-widest leading-[1.7] text-black max-w-[50ch] mx-auto lg:mx-0 lg:ml-auto text-left lg:text-right mb-5">
              Ready to begin?{" "}
              <span className="text-brown italic font-medium">Contact us</span>{" "}
              us to bring your vision to life.
            </p>{" "}
            <button className="group cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-4 text-lg font-medium transition-colors duration-300 [transform:skewX(-20deg)]">
              <span className="flex items-center font-michroma  gap-2 [transform:skewX(20deg)]">
                Tell us about your project
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
