export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
        {/* About Text Section */}
        <div className="md:w-1/2 space-y-6 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Me
          </h2>
          <p className="text-lg md:text-xl">
            Hello! I&apos;m Kunal Joshi, a passionate web developer with a
            background in logistics coordination and front-end development.
            Recently, I attended a web development bootcamp and have been
            focused on building sleek, interactive web applications using modern
            frameworks.
          </p>
          <p className="text-lg md:text-xl">
            Currently, I&apos;m working at Arbelos Interactive, where I create
            engaging and efficient web experiences. I enjoy problem-solving,
            learning new technologies, and collaborating with others to bring
            ideas to life.
          </p>
        </div>

        {/* Skills / Technologies Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-blue-600 font-semibold">HTML</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-blue-600 font-semibold">CSS</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-blue-600 font-semibold">JavaScript</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-blue-600 font-semibold">React</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-blue-600 font-semibold">Next.js</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-blue-600 font-semibold">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
