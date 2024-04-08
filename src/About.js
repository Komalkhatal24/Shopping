import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Ecommerce",
    name: "Ecommerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus libero nec libero varius, eget malesuada dolor vehicula.",
    mission: "Our mission is to provide high-quality products to our customers.",
    vision: "To become the leading ecommerce platform worldwide.",
    team: [
      { id: 1, name: "John Doe", role: "CEO" },
      { id: 2, name: "Jane Doe", role: "CTO" },
      { id: 3, name: "Alice Smith", role: "Marketing Director" },
    ],
  };

  return (
    <>
      {myName}
      
      <HeroSection myData={data} />
    </>
  );
};

export default About;
