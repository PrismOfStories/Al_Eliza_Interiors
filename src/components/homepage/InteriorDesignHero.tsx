import { FaChevronRight } from "react-icons/fa";

export default function ArchitectureHero() {
  return (
    <section className=" h-full bg-[#fbfbfb] px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="w-full max-w-[100rem] min-h-screen mx-auto h-full flex flex-col justify-between space-y-8 py-20 lg:py-40">
        <div className="w-full">
          <p className="text-center text-[10px] sm:text-lg uppercase tracking-[0.25em] text-black font-medium">
            {" "}
            Established in 2021
          </p>
        </div>

        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          <div>
            <div className="text-[140px] xl:text-9xl leading-[0.8] font-black text-black tracking-tight">
              +4
            </div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-black mt-2 ml-1">
              Years of experience
            </p>
          </div>
          <div>
            <h1 className="font-black leading-[0.85] text-black tracking-tight space-y-8">
              <div className="text-[50px] sm:text-[70px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px]">
                YOUR DREAMS
              </div>
              <div className="text-[50px] sm:text-[70px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px] -mt-2 lg:-mt-4">
                OUR EXPERTISE
              </div>
            </h1>
          </div>
          <div>
            <div className="text-[140px] xl:text-9xl leading-[0.8] font-black text-black tracking-tight">
              10+
            </div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-black mt-2 mr-1">
              Successful Projects
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          <div>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-black max-w-[50ch] mx-auto lg:mx-0">
              At Al Eliza Interior Design , we transform residential and
              commercial spaces into refined, functional environments. Our
              designs elevate mood, enhance utility, and add lasting value.
              Collaborating closely, we craft elegant yet practical interiors
              that leave remarkable first impressions.
            </p>
          </div>
          <div>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-black max-w-[50ch] mx-auto lg:mx-0 lg:ml-auto text-left lg:text-right mb-5">
              Ready to begin?{" "}
              <span className="text-brown italic font-medium">Contact us</span>{" "}
              us to bring your vision to life.
            </p>{" "}
            <button className="group cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-4 text-lg font-medium transition-colors duration-300 [transform:skewX(-20deg)]">
              <span className="flex items-center gap-2 [transform:skewX(20deg)]">
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
