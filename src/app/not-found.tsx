import Link from "next/link";

export const metadata = {
  title: "404 || Not Found",
};

const NotFound = () => {
  return (
    <main className="relative z-10 mb-0 bg-background">
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
        <h1 className="font-paragraph text-[120px] leading-none md:text-[280px] lg:text-[400px] text-white">
          404
        </h1>
        <h2 className="mb-8 mt-6 text-[28px] font-normal leading-tight md:mb-12 md:text-[48px] lg:text-[64px] text-gold">
          Page Not Found
        </h2>
        <Link href="/" className="inline-block ">
          <div className="text-center text-white hover:text-gold">
            <span>Back to Homepage</span>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
