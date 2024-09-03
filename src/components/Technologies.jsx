import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCpp className="text-7xl text-gray-100" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-red-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl text-blue-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-teal-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
