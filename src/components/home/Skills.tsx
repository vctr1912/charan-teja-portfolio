import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-prime relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-30">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-0">

          <div className="order-2 lg:order-1 sm:border-l-2 border-tmedium sm:pl-8 xl:pl-12 flex flex-col gap-8 lg:gap-12">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="text-2xl lg:text-3xl mb-2 lg:mb-4 text-tmedium">
                  {skill.title}
                </div>

                <div className="flex flex-wrap sm:text-lg gap-3 sm:gap-5 xl:gap-6 text-tdark">
                  {skill.items.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 flex items-center pr-4 sm:pr-8">
            <div className="w-full text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight flex flex-col text-tdark text-right uppercase">
              <span>The stack</span>
              <span>behind</span>
              <span>my creations</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
