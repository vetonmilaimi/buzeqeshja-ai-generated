const images = [
  {
    src: '/images/clinic-1.png',
    alt: 'Dhoma e trajtimit',
  },
  {
    src: '/images/clinic-2.png',
    alt: 'Salla e pritjes',
  },
  {
    src: '/images/clinic-3.png',
    alt: 'Recepcioni',
  },
];

const ClinicGallery = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Klinika Jonë</h2>
          <p className="text-muted-foreground text-lg">
            Ambiente moderne dhe të pajisura me teknologjinë më të fundit
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
