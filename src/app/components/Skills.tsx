import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import {
  SiAwsamplify,
  SiBootstrap,
  SiCypress,
  SiFirebase,
  SiJest,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-gray-700">
          {/* Skill Cards */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaHtml5 className="text-4xl text-orange-500 mb-4" />
            <p className="font-semibold">HTML</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaCss3Alt className="text-4xl text-blue-500 mb-4" />
            <p className="font-semibold">CSS</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaJsSquare className="text-4xl text-yellow-500 mb-4" />
            <p className="font-semibold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaReact className="text-4xl text-blue-400 mb-4" />
            <p className="font-semibold">React</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiNextdotjs className="text-4xl text-gray-800 mb-4" />
            <p className="font-semibold">Next.js</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiTailwindcss className="text-4xl text-blue-600 mb-4" />
            <p className="font-semibold">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiTypescript className="text-4xl text-blue-500 mb-4" />
            <p className="font-semibold">Typescript</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiSass className="text-4xl text-pink-500 mb-4" />
            <p className="font-semibold">Sass</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiFirebase className="text-4xl text-orange-500 mb-4" />
            <p className="font-semibold">Firebase</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiAwsamplify className="text-4xl text-purple-500 mb-4" />
            <p className="font-semibold">AWS Amplify</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiCypress className="text-4xl text-green-500 mb-4" />
            <p className="font-semibold">Cypress</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiJest className="text-4xl text-red-500 mb-4" />
            <p className="font-semibold">JEST</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <SiBootstrap className="text-4xl text-purple-600 mb-4" />
            <p className="font-semibold">Bootstrap</p>
          </div>
        </div>
      </div>
    </section>
  );
}
