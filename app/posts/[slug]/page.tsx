import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MarkdownWithIds } from "@/components/blog/markdown-with-ids";
import { PostCTA } from "@/components/blog/post-cta";
import { RecentPosts } from "@/components/blog/recent-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Breadcrumb } from "@/components/breadcrumb";
import { TideHeader } from "@/components/tide-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import directus from "@/lib/directus";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      notFound();
    }

    const { title, content, description, published_at, imageurl } = post;

    const recentPosts = await directus.request(
      readItems("posts", {
        filter: {
          status: { _eq: "published" },
          slug: { _neq: slug },
        },
        fields: ["id", "title", "slug", "description", "published_at"],
        sort: ["-published_at"],
        limit: 6,
      }),
    );

    const breadcrumbItems = [
      { label: "Blog", href: "/posts" },
      { label: title },
    ];

    return (
      <div className="min-h-screen">
        <TideHeader />
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6 max-w-7xl">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb items={breadcrumbItems} className="mb-3 sm:mb-4" />
            {isEnabled && (
              <Card className="mb-4 sm:mb-6 border-primary/50 bg-primary/5">
                <CardContent className="py-2 sm:py-3">
                  <p className="text-xs sm:text-sm font-medium text-primary">
                    Draft mode enabled - You are previewing unpublished content
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            <article className="flex-1 min-w-0">
              <Card className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
                <CardHeader className="p-4 sm:p-6 md:p-8">
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-balance leading-tight">
                    {title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {new Date(published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {description && (
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-3 sm:mt-4">
                      {description}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="prose prose-sm sm:prose-base md:prose-lg max-w-none p-4 pt-0 sm:p-6 sm:pt-0 md:p-8 md:pt-0">
                  {imageurl && (
                    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-[400px] mb-6 sm:mb-8 overflow-hidden">
                      <Image
                        fill={true}
                        src={`https://symcloud.top/${imageurl}`}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <MarkdownWithIds content={content} />
                </CardContent>
              </Card>

              <div className="mt-6 sm:mt-8">
                <PostCTA />
              </div>

              <div className="mt-6 sm:mt-8">
                <RecentPosts posts={recentPosts} />
              </div>
            </article>

            <aside className="w-64 shrink-0 hidden lg:block">
              <div className="sticky top-6">
                <TableOfContents content={content} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("[v0] Error fetching post:", error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          status: {
            _eq: "published",
          },
        },
        limit: -1,
      }),
    );

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("[v0] Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      return {
        title: "Post not found",
      };
    }

    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}
