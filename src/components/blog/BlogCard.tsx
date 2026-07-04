import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import { formatBlogDate, type BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <Reveal delay={(index % 3) * 0.06}>
      <Link to={`/blog/${post.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl border border-border bg-secondary">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <span className="font-mono-meta absolute left-3 top-3 inline-flex items-center rounded-full border border-border bg-background/80 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
            {post.category}
          </span>
        </div>

        <div className="mt-4">
          <div className="font-mono-meta flex items-center gap-4 text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {formatBlogDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readingTime} мин
            </span>
          </div>

          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <span className="font-mono-meta mt-3 inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.12em] text-primary">
            Прочети статията
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
};

export default BlogCard;
