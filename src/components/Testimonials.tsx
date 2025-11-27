import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arben Krasniqi',
    text: 'Shërbim i shkëlqyer! Stafi është shumë profesional dhe i kujdesshëm. Rezultatet e zbardhimit tejkaluan pritjet e mia.',
    rating: 5,
    role: 'Pacient',
  },
  {
    name: 'Teuta Morina',
    text: 'Klinika më e mirë në qytet. Ambienti është jashtëzakonisht i pastër dhe modern. Rekomandoj pa dyshim!',
    rating: 5,
    role: 'Pacient',
  },
  {
    name: 'Besnik Hoxha',
    text: 'Implantet që vendosa këtu janë perfekte. Procesi ishte pa dhimbje dhe rezultati duket shumë natyral.',
    rating: 5,
    role: 'Pacient',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Çfarë thonë pacientët tanë</h2>
          <p className="text-muted-foreground text-lg">
            Lexoni përvojat e pacientëve që kanë zgjedhur kujdesin tonë dental
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white relative">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
