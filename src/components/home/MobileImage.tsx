export default function MobileImage() {
  return (
    <section className="lg:hidden relative bg-prime">
      <div className="absolute inset-0 top-1/2 bottom-0 bg-sec"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-12 sm:py-16 flex justify-center">
        <div className="w-[280px] sm:w-[380px] md:w-[420px] aspect-3/4 relative overflow-hidden rounded-xs">
          <img
            src="/assets/headshot.webp"
            alt="Charan Teja"
            className="w-full h-full object-cover grayscale opacity-95"
          />
        </div>
      </div>
    </section>
  );
}
