// Import the Button component
import Button from "@components/atoms/Button/Button";
import TitleCard from "@components/atoms/Texts/TitleCard";
import { FaSave } from "react-icons/fa";
import { RiResetLeftFill } from "react-icons/ri";

export default function App() {
  return (
    <>
      <div className="flex gap-1">
        <TitleCard
          title="Welcome to the Dashboard"
          className="font-[590] text-[28px]"
        />
        {/* Use the Button component */}
        <Button
          icon={<RiResetLeftFill />} // Pass the icon here
          label="Reset"
          onClick={() => alert("Button clicked!")}
          className=""
        />
        <Button
          icon={<FaSave />} // Pass the icon here
          label="Save"
          onClick={() => alert("Button clicked!")}
          className=""
        />
        <Button
          label="EMI Calculator"
          onClick={() => alert("Button clicked!")}
          className="rounded-[8px]"
        />
      </div>
    </>
  );
}
