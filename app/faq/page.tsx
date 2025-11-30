import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions - US Tide Forecast",
  description:
    "Find answers to common questions about tide predictions, accuracy, weather effects, and how to use tide charts for fishing, boating, and beach activities.",
};

export default function FAQPage() {
  const breadcrumbItems = [{ label: "FAQ" }];

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
    {
      question: "What time zone are the tide times displayed in?",
      answer:
        "All tide times on US Tide Forecast are displayed in local time for each location. This ensures that the times shown correspond to the actual time you will experience at that specific coastal location. The timezone automatically adjusts based on daylight saving time when applicable.",
    },
    {
      question: "How far in advance are tide predictions available?",
      answer:
        "NOAA provides tide predictions up to 25 years in advance, though accuracy decreases for longer periods. Our service typically shows predictions for the current day, extended forecasts for the next 7 days, and weekly summaries. For the most accurate planning, we recommend checking predictions for dates within the next month.",
    },
    {
      question: "Why do some locations have only one high tide per day?",
      answer:
        "Some areas, particularly in the Gulf of Mexico and parts of the Pacific, experience mixed semi-diurnal tides or diurnal tides, resulting in irregular tidal patterns. In these locations, you may see only one high tide and one low tide per day, or varying heights between high tides. This is caused by local topography, bathymetry, and resonance effects.",
    },
    {
      question: "What does 'tidal range' mean?",
      answer:
        "Tidal range is the vertical difference between high tide and low tide at a specific location. Areas with large tidal ranges (like the Bay of Fundy, which can exceed 50 feet) are influenced by the shape of the coastline and ocean floor that amplifies the natural tidal forces. Small tidal ranges (under 3 feet) typically occur in enclosed bodies of water or areas with natural barriers.",
    },
    {
      question: "Are tide predictions affected by climate change?",
      answer:
        "Climate change and rising sea levels can affect local tide patterns over time, but these changes occur very slowly (typically inches per decade). Short-term predictions (days to months) remain accurate, but long-term planning should consider gradual sea level rise. Our predictions are based on current sea levels and astronomical factors.",
    },
    {
      question: "How often is the tide data updated?",
      answer:
        "Our tide predictions are updated every 30 minutes using the latest data from NOAA. The predictions themselves (astronomical tides) are calculated well in advance, but we refresh the data frequently to ensure you have access to the most current information and any real-time observations that might be available.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-primary/95 backdrop-blur-md text-primary-foreground">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <h1 className="text-2xl md:text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/80 mt-2">
            Find answers to common questions about tide predictions and coastal
            activities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border-2 border-primary/20 shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
