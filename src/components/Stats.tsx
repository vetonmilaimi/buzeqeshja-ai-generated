import { Users, Award, Stethoscope } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '2000+',
    label: 'Pacientë të Kënaqur',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Vite Përvojë',
  },
  {
    icon: Stethoscope,
    value: '10+',
    label: 'Specialistë',
  },
];

const Stats = () => {
  return (
    <section className="py-12 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
