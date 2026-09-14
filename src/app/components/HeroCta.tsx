import { FaPlay } from "react-icons/fa";

export default function HeroCta() {
  return (
    <div className="absolute left-[8%] top-1/2 z-20 -translate-y-1/2">
      <div>
        <h1 className="font-heading text-6xl font-medium leading-[0.95] tracking-tight text-black md:text-7xl">
          SAMUEL
          <br />
          FELIPE
        </h1>

        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-neutral-600">
          Desenvolvedor Full-Stack 
        </p>
      </div>

      <div className="mt-12 flex items-center gap-5">
        <button
          aria-label="Watch video"
          className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black transition-all duration-300 hover:border-purple-600 hover:shadow-[3px_0_0_#9333ea,-3px_0_0_#7e22ce]"
        >
          <FaPlay className="ml-0.5 text-[11px] text-black transition-all duration-300 group-hover:translate-x-[1px] group-hover:text-purple-600" />
        </button>

        <span className="text-sm font-medium text-black hover:text-purple-600 cursor-pointer">
          [ Assista minha Trajetória ]
        </span>
      </div>

      <button className="mt-8 cursor-pointer border border-black bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
        Explore my work
      </button>
    </div>
  );
}