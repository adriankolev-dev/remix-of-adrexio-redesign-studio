import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Reveal from "@/components/editorial/Reveal";
import BlogCard from "@/components/blog/BlogCard";
import CTASection from "@/components/CTASection";
import NotFound from "@/pages/NotFound";
import {
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
} from "@/data/blog";
import { renderMarkdown } from "@/lib/blog/markdown";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const html = useMemo(
    () => (post ? renderMarkdown(post.content) : ""),
    [post]
  );

  if (!post) {
    return <NotFound />;
  }

  const baseUrl = "https://www.adrexio.com";
  const url = `${baseUrl}/blog/${post.slug}`;
  const coverAbsolute = `${baseUrl}${post.cover}`;
  const related = getRelatedPosts(post.slug);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": url,
      headline: post.title,
      description: post.excerpt,
      image: coverAbsolute,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "bg-BG",
      author: { "@type": "Organization", name: post.author, url: baseUrl },
      publisher: {
        "@type": "Organization",
        name: "Adrexio",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/favicon.svg`,
          width: 512,
          height: 512,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    getBreadcrumbSchema([
      { name: "Начало", url: `${baseUrl}/` },
      { name: "Блог", url: `${baseUrl}/blog` },
      { name: post.title, url },
    ]),
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | Adrexio`}
        description={post.excerpt}
        keywords={`${post.category}, ${post.title}, Adrexio, блог`}
        image={post.cover}
        type="article"
        structuredData={structuredData}
      />
      <Navbar />

      <article>
        {/* Header */}
        <header className="relative overflow-hidden bg-background pt-36 pb-10 md:pt-44 md:pb-12">
          <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-60" aria-hidden />
          <div className="container relative z-10 mx-auto px-6">
            <Reveal immediate>
              <Link
                to="/blog"
                className="font-mono-meta inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Обратно към блога
              </Link>
            </Reveal>

            <Reveal immediate delay={0.08}>
              <div className="font-mono-meta mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="text-primary">{post.category}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {formatBlogDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} мин четене
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={0.16}>
              <h1 className="font-display mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                {post.title}
              </h1>
            </Reveal>

            <Reveal immediate delay={0.24}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </Reveal>
          </div>
        </header>

        {/* Cover */}
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
              <img
                src={post.cover}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div
            className="prose prose-lg mx-auto max-w-3xl dark:prose-invert
              prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground
              prose-p:text-muted-foreground prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="container mx-auto px-6">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                  Още от блога
                </span>
                <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Свързани статии
                </h2>
              </div>
              <Button variant="line" asChild className="hidden sm:inline-flex">
                <Link to="/blog">
                  Всички статии
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel, index) => (
                <BlogCard key={rel.slug} post={rel} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
};

export default BlogPost;
