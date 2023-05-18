import Definition from "../../components/Definition/Definition";
import Hero from "../../components/Hero/Hero";
import Limitations from "../../components/Limitations/Limitations";
import Tips from "../../components/Tips/Tips";
import SCHome from "./Home.styled";

export default function Home() {
  return (
    <SCHome>
      <Hero />
      <Definition />
      <Tips />
      <Limitations />
    </SCHome>
  );
}
