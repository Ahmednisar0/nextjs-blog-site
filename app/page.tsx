`use client`
import Navbar from "@/components/Navbar";
import Mission from "@/components/Ourmission";

export default function Home() {
  

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Background Image */}
      <div
        className="h-screen bg-cover mt- bg-center"
        style={{ backgroundImage: "url('/images/bg1.avif')" }}
      >
        {/* Overlay Content */}
        <div className="flex items-center md:pl-16 h-full md:text-left text-white bg-black bg-opacity-50 px-8">
          <div>
            <h1 className="md:text-5xl font-bold mb-6 md:mt-20 text-center md:text-left text-3xl mt-44 text-yellow-200">Welcome to Nest Heaven</h1>
            <p className="text-xl max-w-6xl md:text-left text-center sm:mb2 md:mb-6">
              At Nest Heaven, our mission is to provide valuable information and guidance to help protect birds during the hatching process. Birds face numerous challenges, from environmental threats to human interference, and we are here to equip you with the knowledge needed to support them.
            </p><div className="hidden md:block">
            <p className="text-xl sm:mb2 md:mb-6">
              We are passionate about bird conservation and the delicate process of hatching. Whether it’s understanding how to care for eggs, creating safe nesting environments, or minimizing disturbances, we aim to empower you with practical advice and insights.
            </p>
            <p className="text-xl max-w-6xl">
              On our platform, you’ll find articles, guides, and tips on topics such as safeguarding nests, identifying bird species, and protecting hatchlings. Our goal is to make it easy for everyone to contribute to the safety and success of our feathered friends.
            </p></div>
          </div>
        </div>
      </div>
      <div><Mission/></div>
    </div>
  );
}
