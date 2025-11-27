import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Sparkles, Smile, Activity, Shield, Clock, Heart } from 'lucide-react';

const services = [
  {
    title: 'Zbardhimi Profesional',
    description: 'Zbardhim i dhëmbëve me teknologji të avancuar për rezultate të shkëlqyera.',
    icon: Sparkles,
    color: 'bg-blue-50',
  },
  {
    title: 'Implantologjia',
    description: 'Implantet dentare më cilësore për zëvendësimin e dhëmbëve të humbur.',
    icon: Activity,
    color: 'bg-cyan-50',
  },
  {
    title: 'Ortodoncia',
    description: 'Drejtimi i dhëmbëve me aparate moderne dhe të padukshme.',
    icon: Smile,
    color: 'bg-blue-50',
  },
  {
    title: 'Kirurgjia Orale',
    description: 'Ndërhyrje kirurgjikale pa dhimbje nga specialistë të kualifikuar.',
    icon: Shield,
    color: 'bg-cyan-50',
  },
  {
    title: 'Higjienë Dentare',
    description: 'Pastrimi profesional dhe parandalimi i sëmundjeve të mishrave.',
    icon: Heart,
    color: 'bg-blue-50',
  },
  {
    title: 'Urgjenca Dentare',
    description: 'Shërbim 24/7 për rastet urgjente dentare.',
    icon: Clock,
    color: 'bg-cyan-50',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Shërbimet Tona</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrojmë një gamë të plotë shërbimesh dentare për të gjithë familjen
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
