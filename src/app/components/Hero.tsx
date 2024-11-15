import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 md:px-12 lg:px-24"
    >
      {/* Text Section */}
      <div className="flex flex-col items-start md:items-start md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Hi, I&apos;m <span className="text-blue-600">Kunal Joshi</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          A passionate web developer skilled in creating seamless and modern web
          experiences.
        </p>
        <Link href="#projects">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            View My Work
          </button>
        </Link>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 mt-10 md:mt-0  flex items-center justify-center">
        <Image
          src="/assets/gifs/good-pfp.jpg"
          alt="Kunal Joshi"
          width={400}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
