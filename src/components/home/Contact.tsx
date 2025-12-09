export default function Contact() {
    const socials = [
    {
        name: "Gmail",
        link: "mailto:vctr1912@gmail.com",
        text: "vctr1912@gmail.com",
    },
    {
        name: "GitHub",
        link: "https://github.com/vctr1912",
        text: "https://github.com/vctr1912",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/charan-teja-reddy-vennapusa",
        text: "https://www.linkedin.com/in/charan-teja-reddy-vennapusa",
    },
    ];

  return (
    <section id="contact" className="bg-coal text-prime">
      <div className="max-w-[1400px] mx-auto px-6 py-15 sm:px-12 sm:py-30">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex items-center xl:pr-12">
            <p className="text-2xl lg:text-3xl text-prime leading-relaxed">
              Open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {socials.map((social, index) => (
              <div key={index}>
                <div className="text-sm tracking-[2px] uppercase text-tlight mb-3 font-medium">
                  {social.name}
                </div>

                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-prime no-underline font-light transition-colors hover:text-white"
                >
                  {social.text}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
