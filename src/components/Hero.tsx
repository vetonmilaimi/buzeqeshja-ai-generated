import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground leading-tight">
                Një përvojë e{' '}
                <span className="text-primary">shkëlqyer</span>
                <br />
                dentare
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                Kujdes profesional për buzëqeshjen tuaj. Teknologji moderne dhe staf i specializuar për trajtimin më të mirë dental.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="px-8 py-6 text-base" asChild>
                <a href="/termin">Rezervo Konsultë</a>
              </Button>
            </div>
          </div>

          {/* Right: Circular Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Blue gradient circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-accent/30 blur-3xl"></div>
              {/* Image container */}
              <div className="relative rounded-full overflow-hidden shadow-2xl aspect-square border-8 border-white">
                <img
                  src="/images/hero-circular.png"
                  alt="Dentist profesional"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
