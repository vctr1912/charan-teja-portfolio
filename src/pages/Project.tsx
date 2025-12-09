import { GithubLogoIcon, LinkIcon, ArrowLeftIcon, CaretRightIcon, CaretLeftIcon } from '@phosphor-icons/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { projects, type Project } from '../data/projects';

export default function ProjectPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projects.find(
    (p) => p.id === Number(id)
  );

  // Handle screen resize
  useState(() => {
    const handleResize = () => {
      const wasLargeScreen = isLargeScreen;
      const nowLargeScreen = window.innerWidth >= 768;
      
      if (wasLargeScreen !== nowLargeScreen) {
        setIsLargeScreen(nowLargeScreen);
        setCurrentSlide(0); // Reset to first slide on screen size change
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  if (!project) {
    return <div className='text-xl'>Project not found</div>;
  }

  const imagesPerSlide = isLargeScreen ? 2 : 1;
  const totalSlides = Math.ceil(project.images.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen font-cabinet bg-sec text-tmedium">

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-prime overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-30 w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 group font-medium absolute top-0 py-6 cursor-pointer">
            <ArrowLeftIcon size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-4 mb-6 text-sm font-medium">
            <div>{project.year}</div>
            <div>{project.type}</div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-tdark">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-4xl sm:leading-relaxed tracking-wide">
            {project.description}
          </p>

          <div className="flex flex-wrap mb-8 gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-[#D9D0C8] text-tdark text-sm md:text-base font-medium rounded-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-8">
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105 active:scale-95"
            >
              <GithubLogoIcon size={24} />
            </a>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105 active:scale-95"
            >
              <LinkIcon size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Images Carousel */}
      <section className="flex items-center bg-sec overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-30 w-full relative z-10">
          <h2 className="text-tmedium text-3xl lg:text-4xl font-medium leading-snug mb-12">Visual Walkthrough</h2>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
                      {project.images.slice(slideIndex * imagesPerSlide, slideIndex * imagesPerSlide + imagesPerSlide).map((image, index) => (
                        <div
                          key={index}
                          className="block overflow-hidden aspect-4/3 rounded-xs"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - ${slideIndex * imagesPerSlide + index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-prime/50 text-tmedium p-2 rounded-sm hover:bg-[#D9D0C8] transition-all hover:scale-110 active:scale-95"
                  aria-label="Previous slide"
                >
                  <CaretLeftIcon size={24} weight="bold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-prime/50 text-tmedium p-2 rounded-sm hover:bg-[#D9D0C8] transition-all hover:scale-110 active:scale-95"
                  aria-label="Next slide"
                >
                  <CaretRightIcon size={24} weight="bold" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {totalSlides > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-[1px] transition-all ${
                      index === currentSlide 
                        ? 'bg-tlight' 
                        : 'bg-prime hover:bg-tlight'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="flex items-center bg-prime overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-30 w-full relative z-10">

          {/* Abstract */}
          {project.abstract && (
            <div className="mb-16">
              <h2 className="text-tmedium text-3xl lg:text-4xl font-medium leading-snug mb-4">
                Abstract
              </h2>
              <p className="text-lg text-tmedium max-w-4xl leading-relaxed tracking-[0.3px]">
                {project.abstract}
              </p>
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div className="mb-16">
              <h2 className="text-tmedium text-3xl lg:text-4xl font-medium leading-snug mb-4">
                Features
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-tmedium text-lg max-w-4xl tracking-[0.3px]">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Contributions */}
          {project.contributions && (
            <div>
              <h2 className="text-tmedium text-3xl lg:text-4xl font-medium leading-snug mb-4">
                Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-tmedium text-lg max-w-4xl tracking-[0.3px]">
                {project.contributions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </section>

      {/* Explore Other Projects */}
      <section className="flex items-center bg-sec overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-30 w-full relative z-10">
          <h2 className="text-tmedium text-3xl lg:text-4xl font-medium leading-snug mb-12">Explore Other Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/projects/${otherProject.id}`}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-4/3 rounded-xs mb-4">
                    <img
                      src={otherProject.thumbnail}
                      alt={otherProject.title}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl text-tlight font-medium mb-2 group-hover:text-tdark transition-colors">
                    {otherProject.title}
                  </h3>
                  <p className="text-tlight line-clamp-2">
                    {otherProject.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}