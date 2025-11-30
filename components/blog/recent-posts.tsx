"use client";

import { readItems } from "@directus/sdk";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";

interface RecentPostsProps {
  posts: Array<{
    id: string;
    title: string;
    slug: string;
    description?: string;
    published_at: string;
  }>;
}

export async function getRecentPosts(currentSlug: string) {
  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          status: { _eq: "published" },
          slug: { _neq: currentSlug },
        },
        fields: ["id", "title", "slug", "description", "published_at"],
        sort: ["-published_at"],
        limit: 6,
      }),
    );

    return posts;
  } catch (error) {
    console.error("[v0] Error fetching recent posts:", error);
    return [];
  }
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const router = useRouter();

  const handlePostClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string,
  ) => {
    e.preventDefault();
    router.push(`/posts/${slug}`);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border-2 border-primary/20 shadow-xl">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Recent Posts
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Check out our latest articles about tides and coastal activities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              onClick={(e) => handlePostClick(e, post.slug)}
              className="group"
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm text-muted-foreground">
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                {post.description && (
                  <CardContent>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
