import Content from "./Content";
import ProfilImg from "./ProfilImg";

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="w-full sm:w-4/5 mx-0 sm:mx-auto flex justify-between items-center flex-col sm:flex-row pt-24 sm:pt-20"
    >
      <Content />
      <ProfilImg />
    </div>
  );
}
