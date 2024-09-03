import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
const Hero = () => {
    return (
        <div className="container mx-auto  text-black ">
            <div className="max-w-7xl mx-auto  shadow-lg rounded-lg overflow-hidden">
                {/* Content Section */}
                <div className="w-full p-6 flex flex-col items-center bg-orange-200 bg-opacity-35">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  mt-5 font-bold text-slate-900 ">
                        Gayatri Jadhav
                    </h2>
                    <p className="mt-4 text-slate-900 text-3xl">
                        Frontend Developer
                    </p>

                    <button className="mt-4 px-4 py-2 bg-lime-500 bg-opacity-30 hover:bg-lime-900 text-white rounded">
                        About Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
