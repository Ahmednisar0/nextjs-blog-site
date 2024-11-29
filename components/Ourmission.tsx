import { FaLeaf, FaBookOpen, FaHandsHelping } from 'react-icons/fa';

export default function Mission() {
  return (
    <section id="mission-section" className="flex flex-col md:flex-row items-center w-full bg-yellow-200">
    {/* Image for Mobile (First) */}
    <div className="w-full md:w-1/2">
      <img
        src="/images/mission.jpg" // Replace with your actual image path
        alt="Our Mission"
        className="w-full h-48 md:h-screen object-cover" // Smaller image height on mobile, larger on desktop
      />
    </div>

    {/* Text Content on the Right */}
    <div className="w-full md:w-1/2 md:pl-12 md:pr-6 text-gray-800">
      {/* Heading in Mobile View centered */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-red-600 text-center md:text-left">
        Our Mission
      </h2>

        {/* First Icon and Text */}
        <div className="flex flex-col items-center md:items-start mb-6">
          <FaLeaf className="text-5xl md:text-6xl text-green-600 mb-4" />
          <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
            We are dedicated to protecting birds and their habitats by raising
            awareness and implementing conservation efforts across diverse
            ecosystems, engaging communities in meaningful actions for
            environmental change.
          </p>
        </div>

        {/* Second Icon and Text */}
        <div className="flex flex-col items-center md:items-start mb-6">
          <FaBookOpen className="text-5xl md:text-6xl text-green-600 mb-4" />
          <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
            We focus on educating the public about bird preservation, with
            in-depth resources on caring for bird eggs, nurturing hatchlings,
            and ensuring a healthy environment for long-term survival.
          </p>
        </div>

        {/* Third Icon and Text */}
        <div className="flex flex-col items-center md:items-start mb-6">
          <FaHandsHelping className="text-5xl md:text-6xl text-green-600 mb-4" />
          <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
            Encouraging community involvement to support bird conservation and
            inspire sustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
}
