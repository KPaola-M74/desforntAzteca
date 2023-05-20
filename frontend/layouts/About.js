import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = () => {
  
  
  const experience = {
    title: "EQUIPO",
    list: [
      "Karen Paola Moreno Palacios",
      "Brayan Stiven Acuña Vanegas",
      "Juan Manuel Castillo Molina",
      "Victor Daniel Valencia Ñañez",
      "Lina Marcela Rivas Rebolledo"
    ],
  };
  
  return (
    <section className="section mt-16">
      <div className="container text-center">
        <h2 className="section-title mb-12">{experience.title}</h2>
        <ul className="experience-list">
          {experience.list.map((item, index) => (
            <li
              className="experience-item"
              key={"experience-" + index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
