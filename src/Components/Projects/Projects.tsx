import Frontend from "./Frontend";
import Fullstack from "./Fullstack";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full sm:w-4/5 mx-0 sm:mx-auto px-4 sm:px-0 pt-24"
    >
      <Frontend />
      <Fullstack />
    </div>
  );
}
