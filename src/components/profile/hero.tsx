import { ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <section id="hero" className="w-full">
      <div className="flex w-full items-start justify-start gap-8">
        <div className="flex flex-col items-start gap-3 justify-evenly">
          <span className="text-4xl md:text-5xl text-shadow-sm font-bold">AjaySingh</span>
          <p className=" text-shadow-sm tracking-normal font-normal">
            Aspiring Software Engineer proficient in the MERN stack,
            knowledgeable
            <br /> in React Native and Next.js, and familiar with Docker.<br />
            <span>📍 Thane, Maharashtra</span>
          </p>
          
        </div>
        <div>
          <div className="rounded-full overflow-hidden h-28 w-28">
            <img
              className=" h-auto grayscale rounded-full hover:grayscale-0 hover:scale-105 transition duration-300"
              src="ajay.jpg"
            />
          </div>
        </div>
      </div>
      </section>
  );
}
