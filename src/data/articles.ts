import articleHiring from "@/assets/article-hiring.png";
import article80Years from "@/assets/article-80years.png";
import articleCph from "@/assets/article-cph.png";

export interface Article {
  slug: string;
  image: string;
  title: string;
  description: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "we-are-hiring",
    image: articleHiring,
    title: "WE ARE HIRING",
    description: "Click on this article, to read more about careers at SAS.",
    content:
      "We are actively looking for passionate individuals to join our virtual airline crew! Whether you're interested in flying, ground operations, or community management — there's a place for you at SAS. Visit our Discord server or Roblox group to learn more about open positions and how to apply.",
  },
  {
    slug: "celebrating-80-years",
    image: article80Years,
    title: "CELEBRATING 80 YEARS",
    description:
      "We at SAS Scandinavian Airlines are proud to celebrate 80 years. Click on this article, to read more about our celebration.",
    content:
      "SAS Scandinavian Airlines has reached an incredible milestone — 80 years of connecting Scandinavia with the world. From our humble beginnings to becoming one of the most recognised airline brands in Europe, we celebrate this anniversary with gratitude to everyone who has been part of our journey. Join us as we look back at eight decades of innovation, service, and Scandinavian design.",
  },
  {
    slug: "copenhagen-development",
    image: articleCph,
    title: "COPENHAGEN DEVELOPMENT",
    description:
      "We are at the moment developing on CPH Copenhagen Airport. Click on this article, to read more about the development on CPH Copenhagen Airport.",
    content:
      "Our development team is hard at work bringing Copenhagen Airport (CPH) to life in Roblox. This major update will feature realistic terminals, gates, and runway layouts closely modelled after the real CPH. Stay tuned for sneak peeks and release dates as we continue to build the most authentic Scandinavian aviation experience on Roblox.",
  },
];
