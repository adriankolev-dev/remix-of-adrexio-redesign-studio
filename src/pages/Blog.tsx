import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageIntro from "@/components/editorial/PageIntro";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";
import CTASection from "@/components/CTASection";
import { blogPosts, getPostsByCategory } from "@/data/blog";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Всички");
  const filteredPosts = getPostsByCategory(activeCategory);
  const isFiltering = activeCategory !== "Всички";

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Блог — Adrexio",
      description:
        "Статии за изкуствен интелект, автоматизация, уеб разработка и дигитални стратегии от екипа на Adrexio.",
      url: "https://www.adrexio.com/blog",
      inLanguage: "bg-BG",
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        url: `https://www.adrexio.com/blog/${post.slug}`,
        image: `https://www.adrexio.com${post.cover}`,
        author: { "@type": "Organization", name: post.author },
      })),
    },
    getBreadcrumbSchema([
      { name: "Начало", url: "https://www.adrexio.com/" },
      { name: "Блог", url: "https://www.adrexio.com/blog" },
    ]),
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Блог — статии за AI, автоматизация и дигитални решения | Adrexio"
        description="Практични статии за изкуствен интелект, автоматизация, уеб разработка и дигитални стратегии — от екипа на Adrexio."
        keywords="блог, изкуствен интелект, AI, автоматизация, чатботове, уеб разработка, дигитален маркетинг, Adrexio"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Блог"
        title={
          <>
            Идеи за <span className="accent-mark">дигиталния</span> бизнес.
          </>
        }
        description="Практични статии за изкуствен интелект, автоматизация и технологии, които помагат на бизнеса да расте — без излишен жаргон."
      />

      <section className="relative bg-background pb-12">
        <div className="container mx-auto px-6">
          <BlogFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 border-t border-border pt-8">
            <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
              {isFiltering ? activeCategory : "Всички статии"}
            </span>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "статия" : "статии"}
            </h2>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center border-t border-border py-16 text-center"
            >
              <p className="mb-4 text-lg text-muted-foreground">
                Няма статии в тази категория
              </p>
              <Button variant="line" onClick={() => setActiveCategory("Всички")}>
                Виж всички статии
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Blog;
