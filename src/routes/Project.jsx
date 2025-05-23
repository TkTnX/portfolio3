import { useParams } from "react-router";
import { useProjects } from "../hooks/useProjects";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Github } from "lucide-react";

export const ProjectPage = () => {
  const [project, setProject] = useState(null);
  const { getProject, loading, error } = useProjects();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProject() {
      const project = await getProject(id);
      setProject(project);
    }
    fetchProject();
  }, []);

  if (error) return <h2 className="text-red-500 text-center">{error}</h2>;
  console.log(project);
  return (
    <div className="max-w-[900px] mx-auto mt-10 text-center px-4">
      {loading ? (
        <h2 className="text-center">Загрузка...</h2>
      ) : (
        project && (
          <>
            <img src={project.img} alt={project.title} />
            <h2 className="text-center my-4 text-5xl font-bold">
              {project.title}
            </h2>
            <Markdown>{project.description}</Markdown>
            <div className="mt-4">
              <h4 className="text-3xl font-bold text-primary">Технологии</h4>
              <ul className="flex flex-wrap items-center gap-4 justify-center opacity-60">
                {project.technologies.split(", ").map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            {project.github && (
              <a
                className="flex items-center gap-4 justify-center border max-w-max py-3 px-6 rounded-lg mt-10 mx-auto hover:bg-white hover:text-bg transition"
                href={project.github}
              >
                <Github />
                <span>Проект на Github</span>
              </a>
            )}
          </>
        )
      )}
    </div>
  );
};
