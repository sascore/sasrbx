import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { articles } from "@/data/articles";

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Article not found</h1>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to articles
            </Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <article className="flex-1">
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto px-8 py-10 space-y-6">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to articles
          </Link>
          <h1 className="text-3xl font-black text-foreground">{article.title}</h1>
          <p className="text-muted-foreground leading-relaxed">{article.content}</p>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
};

export default ArticleDetailPage;
