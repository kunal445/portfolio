import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Projects
        </h2>

        {/* Professional Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">
            Professional Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card for Arbelos Interactive Project 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative flex flex-col">
              {/* Company Tag */}
              <div className="self-start bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Arbelos Interactive
              </div>

              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/landOfTadeo.jpg"
                  alt="Land of Tadeo Home page"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Land Of Tadeo
              </h4>
              <p className="text-gray-600 mb-4">
                Land of Tadeo is an engaging online gaming website that
                integrates the game using the WebGL library for immersive 3D
                experiences. The platform is fully responsive and developed with
                Next.js, JavaScript, HTML5, CSS3, and SASS to ensure seamless
                functionality across devices.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  NextJS
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  CSS3
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  WebGL
                </span>
              </div>
              <a
                href="https://landoftadeo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>

            {/* Project Card for Arbelos Interactive Project 2 */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative">
              {/* Company Tag */}
              <div className="self-start bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Arbelos Interactive
              </div>

              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/speaksynk.jpg" // Replace with the actual image path
                  alt="Speaksynk home page"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Speaksynk
              </h4>
              <p className="text-gray-600 mb-4">
                Speaksynk is a sophisticated and responsive web application
                designed to seamlessly translate videos between languages using
                the power of AI and machine learning. Developing this project
                required expertise in technologies including, but not limited
                to, HTML5, CSS3, JavaScript, SASS, Git, Next.js, TypeScript,
                GraphQL, Jest, Cypress, AWS Authentication, and AWS Amplify.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  NextJS
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Cypress
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  AWS
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Figma
                </span>
              </div>
              <a
                href="https://speaksynk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Personal Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Project Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative">
              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/beachstays.gif" // Replace with the actual image path
                  alt="Personal Project 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                BeachStays
              </h4>
              <p className="text-gray-600 mb-4">
                Beachstays is a multipage website developed from a PSD design,
                featuring a fully responsive layout optimized for various screen
                sizes. The project was built using JavaScript, HTML5, CSS3, and
                SASS, ensuring both visual appeal and seamless functionality
                across devices. The website integrates interactive elements and
                a smooth user experience, demonstrating strong front-end
                development skills
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  HTML5
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  CSS3
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  SASS
                </span>
              </div>
              <div className=" flex">
                <Link
                  href="https://beachstays-kunal.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  View Project
                </Link>
                <Link
                  href="https://github.com/kunal445/KuanlJoshiProject1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  Source Code
                </Link>
              </div>
            </div>

            {/* Personal Project Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative">
              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/anidex.gif" // Replace with the actual image path
                  alt="Anidex"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">Anidex</h4>
              <p className="text-gray-600 mb-4">
                Anidex is a simple yet powerful, responsive web application
                designed to help users quickly find detailed information about
                their favorite anime. Built in collaboration with my partner
                Antoine Duong, the app leverages the Jikan REST API for seamless
                integration of anime data. The project showcases a solid
                understanding of HTML5, CSS3, JavaScript, SASS, Git, and pair
                programming to create an intuitive and efficient user
                experience.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  HTMl5
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  CSS3
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  REST API
                </span>
              </div>
              <div className=" flex">
                <Link
                  href="https://anidex-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  View Project
                </Link>
                <Link
                  href="https://github.com/wd40-group-12/project-2-anime-facts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  Source Code
                </Link>
              </div>
            </div>

            {/* Personal Project Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative">
              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/MMOHunter.gif" // Replace with the actual image path
                  alt="MMOHunter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                MMOHunter
              </h4>
              <p className="text-gray-600 mb-4">
                MMOHunter is a feature-rich React web application designed to
                help users discover the next MMO (Massively Multiplayer Online
                game) based on their preferred genre. Built with React, React
                Router, and Firebase, the app offers an intuitive interface for
                browsing a wide variety of MMOs, with filtering options to
                narrow down choices by game genre. The application ensures
                smooth navigation and seamless data management, providing an
                engaging user experience for MMO enthusiasts.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Firebase
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  REST API
                </span>
              </div>
              <div className=" flex">
                <Link
                  href="https://mmohunter.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  View Project
                </Link>
                <Link
                  href="https://github.com/kunal445/KunalJoshiProject3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  Source Code
                </Link>
              </div>
            </div>

            {/* Personal Project Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative">
              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/concertAcountant.gif" // Replace with the actual image path
                  alt="Concert Accountant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Concert Accountant
              </h4>
              <p className="text-gray-600 mb-4">
                Concert Accountant is a dynamic web application built with React
                that allows users to efficiently manage and track upcoming
                concerts along with their associated budgets. By integrating
                with the Ticketmaster API, the app provides real-time concert
                listings and pricing information.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Firebase
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  REST API
                </span>
              </div>
              <div className=" flex">
                <Link
                  href="https://concertaccountant.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  View Project
                </Link>
                <Link
                  href="https://github.com/Project4-Concert-Accountant/concert-accountant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-4 block px-2"
                >
                  Source Code
                </Link>
              </div>
            </div>

            {/* Personal Project Card 5 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition relative">
              {/* Project Image */}
              <div className="relative w-full h-72 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/assets/gifs/idolshowdown.gif" // Replace with the actual image path
                  alt="Personal Project 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Project Details */}
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Idol Showdown
              </h4>
              <p className="text-gray-600 mb-4">
                Idol Showdown is a fan-driven 2D fighting game featuring
                characters from Hololive, a popular virtual YouTuber agency. The
                game is available on Steam and was developed by a dedicated team
                of over 80 members. Built using the Unity game engine and
                programmed in C#, the project emphasizes collaboration and best
                practices in software development. Key skills involved in the
                creation of this game include C#, Unity, Git, code reviews, and
                pair programming.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  C#
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Unity
                </span>
                <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                  Git
                </span>
              </div>
              <Link
                href="https://store.steampowered.com/app/1742020/Idol_Showdown/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 block"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
