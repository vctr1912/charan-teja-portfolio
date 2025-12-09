type Props = {
  sections: string[];
  activeSection: string;
  scrollToSection: (id: string) => void;
};

export default function SideNav({ sections, activeSection, scrollToSection }: Props) {
  return (
    <nav className="fixed right-2 sm:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-6">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center cursor-pointer"
            aria-label={`Navigate to ${id}`}
          >
            <div
              className={`w-2 h-2 bg-tlight transition-all duration-300 rounded-[1px] ${
                activeSection === id ? "scale-150" : "hover:scale-125"
              }`}
            />
            <span className="absolute right-6 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-wider text-tlight whitespace-nowrap">
              {id}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
