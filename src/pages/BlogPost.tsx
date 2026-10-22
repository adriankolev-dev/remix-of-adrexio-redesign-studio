import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Reveal from "@/components/editorial/Reveal";
import BlogCard from "@/components/blog/BlogCard";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/editorial/SectionHeader";
import NotFound from "@/pages/NotFound";
import {
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
} from "@/data/blog";
import { renderMarkdown } from "@/lib/blog/markdown";
import { getBreadcrumbSchema, getPublisherSchema } from "@/lib/structuredData";
import { scrollToTop } from "@/lib/lenis";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  useEffect(() => {
    scrollToTop(true);
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
      publisher: getPublisherSchema(),
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
        <header className="bg-background pb-10 pt-32 md:pb-12 md:pt-40">
          <div className="container mx-auto px-6">
            <Reveal immediate>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Обратно към блога
              </Link>
            </Reveal>

            <Reveal immediate delay={0.08}>
              <div className="eyebrow mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="text-foreground">{post.category}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {formatBlogDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} мин.
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={0.16}>
              <h1 className="mt-5 max-w-5xl text-balance text-[2.2rem] font-bold leading-[1.02] tracking-[-0.045em] text-foreground md:text-[4rem]">
                {post.title}
              </h1>
            </Reveal>

            <Reveal immediate delay={0.24}>
              <p className="mt-8 max-w-2xl border-t border-border pt-8 text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </Reveal>
          </div>
        </header>

        {/* Cover */}
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="rounded-md bg-secondary p-3 md:p-4">
              <img
                src={post.cover}
                alt={post.title}
                className="aspect-[16/9] w-full rounded-[0.25rem] object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Body */}
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div
            className="prose prose-lg mx-auto max-w-3xl dark:prose-invert
              prose-headings:font-semibold prose-headings:tracking-[-0.03em] prose-headings:text-foreground
              prose-p:text-muted-foreground prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-foreground prose-a:no-underline hover:prose-a:underline
              prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <SectionHeader
              title="Още от блога."
              action={
                <Button variant="line" size="default" asChild>
                  <Link to="/blog">
                    Всички статии
                    <ArrowUpRight />
                  </Link>
                </Button>
              }
            />

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
