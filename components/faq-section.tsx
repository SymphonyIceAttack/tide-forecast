"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What are tides and why do they occur?",
      answer:
        "Tides are the rise and fall of sea levels caused by gravitational forces exerted by the Moon and Sun, combined with Earth's rotation. The Moon's gravity pulls water toward it, creating a bulge on the side of Earth facing the Moon. A similar bulge occurs on the opposite side due to inertial forces. These bulges cause high tides, while areas between them experience low tides.",
    },
    {
      question: "How accurate are the tide predictions?",
      answer:
        "Our tide predictions are sourced from NOAA (National Oceanic and Atmospheric Administration) and are highly accurate for astronomical tides. However, actual water levels can be affected by weather conditions like wind, atmospheric pressure, and storms. We update our data every 30 minutes to ensure you have the most current information available.",
    },
    {
      question: "What is the difference between high tide and low tide?",
      answer:
        "High tide occurs when the water reaches its highest level along the shore, typically happening twice daily about 12 hours and 25 minutes apart. Low tide is when the water recedes to its lowest level. The difference in height between high and low tides is called the tidal range, which varies by location and can range from a few inches to over 50 feet in extreme locations.",
    },
    {
      question:
        "Why are there usually two high tides and two low tides each day?",
      answer:
        "Most coastal areas experience two high tides and two low tides each day (semi-diurnal tides) because Earth rotates through two tidal bulges created by the Moon's gravitational pull. As Earth completes one rotation (24 hours), each location passes through both bulges, experiencing two high tides and two low tides approximately 12 hours apart.",
    },
    {
      question: "How do I use this tide chart for fishing or boating?",
      answer:
        "For fishing, many anglers find the best activity occurs during tidal changes, especially the hour before and after high or low tide. For boating, check the tide times to ensure adequate water depth for navigation and safe harbor entry. Always combine tide information with local knowledge, weather forecasts, and navigation charts for the safest experience on the water.",
    },
    {
      question: "Can weather affect tide predictions?",
      answer:
        "Yes, weather can significantly impact actual water levels. Strong onshore winds can push water toward the coast, raising levels above predicted tides (wind setup). Low atmospheric pressure during storms can also cause higher water levels (storm surge). Conversely, offshore winds and high pressure can lower water levels. Always check weather forecasts alongside tide predictions.",
    },
  ];

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border-2 border-primary/20 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
