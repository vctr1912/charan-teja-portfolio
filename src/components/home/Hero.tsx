import { GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";

export default function Hero() {
const socials = [
  {
    name: "Gmail",
    link: "mailto:vctr1912@gmail.com",
    text: "vctr1912@gmail.com",
    icon: <EnvelopeSimpleIcon size={24} color="#57504a" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/vctr1912",
    text: "https://github.com/vctr1912",
    icon: <GithubLogoIcon size={24} color="#57504a" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/charan-teja-reddy-vennapusa",
    text: "https://www.linkedin.com/in/charan-teja-reddy-vennapusa",
    icon: <LinkedinLogoIcon size={24} color="#57504a" />,
  },
];
  return (
    <section id="intro" className="min-h-screen flex items-center bg-prime overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20 items-center">

          <div className="sm:border-l-2 border-tmedium sm:pl-8 xl:pl-12 flex flex-col">
            <div className="text-xl xl:text-2xl text-tmedium mb-4 sm:mb-6 tracking-wide">
              Hello! I'm
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl leading-tight mb-4 text-tdark tracking-wide uppercase">
              Charan Teja
            </h1>

            <div className="text-3xl xl:text-4xl text-tmedium mb-8">
              Full Stack & Mobile Developer
            </div>

            <p className="text-lg text-tmedium max-w-lg leading-relaxed tracking-wide mb-12 pr-4">
              Crafting fast, scalable, and immersive digital experiences that blend creativity with engineering precision.
            </p>

            <div className="flex gap-8 items-center">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-black hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full aspect-3/4 relative overflow-hidden rounded-xs">
              <img
                src="/assets/headshot.webp"
                alt="Charan Teja"
                className="w-full h-full object-cover grayscale opacity-95"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
