import { ReactElement } from "react";


export default function Education(): ReactElement {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-2xl font-bold">
          Education
        </h2>
        <div className=" w-full">
          <h3 className="text-sm font">
            Bachelor of Science in Computer Science
          </h3>
          <div className="flex justify-between items-center w-full">
          <p className="text-sm ">Mumbai University, Maharashtra</p>
          <p className="text-sm ">Expected Graduation: May 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
