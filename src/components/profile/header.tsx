
import { ModeToggle } from "@/components/toggleButton";
export default function Header() {
  return (
    <>
    <header className="flex items-center flex-row justify-between w-full ">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-2">
       
        <span className="uppercase cursor-pointer">Home</span>
        </div>
        <div className="flex items-center justify-center gap-2">
         |
          <span onClick={() => window.location.href = "https://www.canva.com/design/DAGot1I_b5s/psSshRZX_e6dam1SPIuq0g/view"} className="uppercase cursor-pointer ">Resume</span>
        </div>
      </div>
      <ModeToggle />
    </header>
    </>
  );
}
