import { CheckCircle, GraduationCap, Award } from 'lucide-react';

const DoctorProfile = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <img
                src="/images/doctor.png"
                alt="Dr. Elira Krasniqi"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: Bio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">Dr. Elira Krasniqi</h2>
              <p className="text-xl text-primary font-medium">Dentiste e Specializuar</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Me më shumë se 15 vite përvojë në fushën e stomatologjisë, Dr. Elira Krasniqi është një nga dentistët më të respektuar në rajon. Ajo është e specializuar në implantologji dhe estetikë dentare.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Edukimi</p>
                  <p className="text-muted-foreground">Universiteti i Prishtinës, Fakulteti i Mjekësisë Dentare</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Specializimi</p>
                  <p className="text-muted-foreground">Implantologji & Estetikë Dentare</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Certifikime</p>
                  <p className="text-muted-foreground">Anëtare e Shoqatës Evropiane të Implantologjisë</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
