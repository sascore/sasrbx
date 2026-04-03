import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { articles } from "@/data/articles";

const ArticlesPage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <section className="flex-1">
      <div className="max-w-6xl mx-auto px-8 py-14">
        <h1 className="text-3xl font-bold text-foreground mb-8">All Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="rounded-xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground tracking-wide mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <SiteFooter />
  </div>
);

export default ArticlesPage;
