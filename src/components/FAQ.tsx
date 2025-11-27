import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'Sa shpesh duhet të vizitoj dentistin?',
    answer: 'Rekomandojmë një kontroll dental çdo 6 muaj për të mbajtur shëndetin oral në gjendje optimale dhe për të parandaluar problemet e mundshme.',
  },
  {
    question: 'A është i dhimbshëm trajtimi dental?',
    answer: 'Jo, përdorim teknologji moderne dhe anesteziologji lokale për të siguruar që të gjitha trajtimet të jenë pa dhimbje dhe sa më komode.',
  },
  {
    question: 'Sa kohë zgjat një implant dental?',
    answer: 'Implantet dentare mund të zgjatin një jetë të tërë me kujdes të duhur dhe higjienë orale të mirë. Ofrojmë garanci dhe kontroll të rregullt.',
  },
  {
    question: 'A pranoni sigurime shëndetësore?',
    answer: 'Po, pranojmë shumicën e sigurimeve shëndetësore. Kontaktoni recepc ionin tonë për detaje specifike në lidhje me sigurimet.',
  },
  {
    question: 'Si mund të rezervoj një termin?',
    answer: 'Mund të rezervoni një termin duke na kontaktuar në numrin tonë të telefonit, duke dërguar email, ose duke plotësuar formularin e kontaktit në faqen tonë.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Pyetje të Shpeshta</h2>
          <p className="text-muted-foreground text-lg">
            Gjeni përgjigje për pyetjet më të zakonshme
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
