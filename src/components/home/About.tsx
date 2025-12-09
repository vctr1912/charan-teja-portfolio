export default function About() {
  return (
    <section id="about" className="bg-sec relative">
      <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-30">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-0">
          <div className="flex items-center pr-4 sm:pr-8">
            <div className="w-full text-tmedium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight flex flex-col uppercase">
              <span>About</span>
              <span>Me</span>
            </div>
          </div>

          <div className="col-span-2 pr-2 sm:pr-8 md:pr-18 text-tlight">
            <p className="text-xl md:text-2xl mb-4">
              I'm a passionate computer science student with a love for creating innovative web & mobile applications.
              Currently pursuing my degree while building real-world projects that solve meaningful problems.
            </p>

            <p className="text-xl md:text-2xl">
              My journey in tech started with curiosity and has grown into a commitment to continuous learning and excellence in software development.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
