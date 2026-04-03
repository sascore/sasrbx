import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SAS on Roblox?",
    answer:
      "SAS on Roblox is a virtual airline experience that recreates Scandinavian Airlines operations within the Roblox platform. We offer realistic flight simulations, airport environments, and a community of aviation enthusiasts.",
  },
  {
    question: "How do I join SAS?",
    answer:
      "You can join by visiting our Roblox Group and our Discord server. From there you can apply for available positions and start your journey with us.",
  },
  {
    question: "Is this affiliated with the real SAS?",
    answer:
      "No. We are not affiliated with the real SAS Scandinavian Airlines System. We are a virtual airline operating exclusively on the Roblox platform.",
  },
  {
    question: "How do I become a pilot?",
    answer:
      "To become a pilot, join our Discord server and look for open pilot applications. You will need to complete our training programme before you can fly scheduled routes.",
  },
  {
    question: "What routes do you operate?",
    answer:
      "We operate a growing network of routes connecting major Scandinavian airports. Check our Departures page for the latest flight schedule.",
  },
  {
    question: "How can I contact support?",
    answer:
      "The best way to reach us is through our Discord server where our staff team can assist you with any questions or issues.",
  },
];

const FAQPage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <section className="flex-1">
      <div className="max-w-3xl mx-auto px-8 py-14">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
    <SiteFooter />
  </div>
);

export default FAQPage;
