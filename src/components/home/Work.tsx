import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function Work() {
  return (
    <section id="work" className="flex items-center bg-sec overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-24 w-full relative z-10">

        <div className="mb-12">
          <h2 className="w-full text-tmedium text-3xl lg:text-4xl font-medium max-w-2xl leading-snug">
            Discover my latest work and creative solutions that bring ideas to life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {projects.map((project) => (
            <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group cursor-pointer"
            >
                <div className="relative overflow-hidden aspect-4/3 rounded-xs mb-4">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                />
                </div>
                <h3 className="text-xl text-tlight font-medium mb-2 group-hover:text-tdark transition-colors">
                {project.title}
                </h3>
                <p className="text-tlight line-clamp-2">
                {project.description}
                </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
