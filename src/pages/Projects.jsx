import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://i.pinimg.com/736x/8f/66/ce/8f66ceccc25abc3251ddbd22e39c7c5e.jpg",
      image2:
        "https://i.pinimg.com/736x/39/64/b9/3964b9d1de9b18f108d75c50dae44b26.jpg",
    },
    {
      image1:
        "https://i.pinimg.com/736x/53/1e/59/531e59e6f0ef8421d89628ce31491519.jpg",
      image2:
        "https://i.pinimg.com/736x/d5/2c/2d/d52c2d7a49a9be55f9150915020b54de.jpg",
    },
    {
      image1:
        "https://i.pinimg.com/1200x/13/69/44/1369448902794850de2941c46cbcf6c6.jpg",
      image2:
        "https://i.pinimg.com/736x/07/a3/c8/07a3c8013f4cb2ace9c17142cbfd686b.jpg",
    },
    {
      image1:
        "https://i.pinimg.com/736x/a3/c0/12/a3c012cd53fd3a85b53b6c79d33ebec6.jpg",
      image2:
        "https://i.pinimg.com/1200x/2d/fe/a9/2dfea95cc9e6e062f1621666a18dd603.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".project-row").forEach((row) => {
      gsap.from(row, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden ">
      {/* Header */}
      <div className="relative text-center pt-[10vh]">
        <h1 className="font-[font2] lg:text-[12vw] text-5xl uppercase tracking-tight text-black select-none text-left">
          Projects
        </h1>
      </div>

      {/* Projects */}
      <div className="mt-20 space-y-20 w-full">
        {projects.map((elem, idx) => (
          <div key={idx} className="project-row">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
