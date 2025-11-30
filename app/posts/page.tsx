import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { TideHeader } from "@/components/tide-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";

export const metadata: Metadata = {
  title: "Blog - US Tide Forecast",
  description:
    "Read our latest articles and updates about tide predictions, coastal activities, and ocean insights. Expert guidance on tides, fishing, surfing, and coastal adventures.",
  keywords: [
    "tide blog",
    "tide articles",
    "coastal activities",
    "tide fishing",
    "surfing tides",
    "ocean insights",
    "coastal adventures",
    "marine education",
    "tide safety",
    "beach activities",
  ],
  openGraph: {
    title: "Blog - US Tide Forecast",
    description:
      "Read our latest articles and updates about tide predictions, coastal activities, and ocean insights.",
    url: "/posts",
    siteName: "US Tide Forecast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "US Tide Forecast Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - US Tide Forecast",
    description:
      "Read our latest articles and updates about tide predictions, coastal activities, and ocean insights.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/posts",
  },
};

export const revalidate = 86400;

export default async function BlogPage() {
  try {
    console.log("[v0] Fetching posts from Directus...");
    console.log("[v0] Directus URL:", process.env.NEXT_PUBLIC_DIRECTUS_URL);

    const posts = await directus.request(
      readItems("posts", {
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "status",
          "imageurl",
        ],
        filter: {
          status: { _eq: "published" },
        },
        sort: ["-published_at"],
        limit: -1,
      }),
    );

    console.log("[v0] Successfully fetched", posts.length, "posts");

    const breadcrumbItems = [{ label: "Blog" }];

    return (
      <div className="min-h-screen">
        <TideHeader />
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6 max-w-7xl">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <Breadcrumb items={breadcrumbItems} className="mb-3 sm:mb-4" />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Blog
              </span>{" "}
              Posts
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Explore our latest articles and updates about tides and coastal
              activities
            </p>
          </div>

          {posts.length === 0 ? (
            <Card className="border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardContent className="py-8 sm:py-12 text-center">
                <p className="text-sm sm:text-base text-muted-foreground">
                  No posts published yet
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                // Use article's imageurl or fallback to default images
                const getImageUrl = (post: any) => {
                  // Check if imageurl exists and is not empty
                  if (
                    post.imageurl &&
                    typeof post.imageurl === "string" &&
                    post.imageurl.trim() !== ""
                  ) {
                    return `https://symcloud.top/${post.imageurl.trim()}`;
                  }
                  // Fallback to default images based on post ID
                  const defaultImages = [
                    "/images/hero-tide-scene.jpg",
                    "/images/peaceful-beach.jpg",
                    "/images/lighthouse-sunset.jpg",
                    "/images/ocean-aerial-view.jpg",
                    "/images/seagulls-sunrise.jpg",
                    "/images/tide-pools.jpg",
                  ];
                  return defaultImages[post.id % defaultImages.length];
                };

                return (
                  <Link
                    key={post.id}
                    href={`/posts/${post.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:shadow-xl hover:border-primary/30 border-2 border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
                      {/* Article Image */}
                      <div className="relative h-36 sm:h-40 md:h-48 w-full overflow-hidden">
                        <Image
                          src={getImageUrl(post)}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <CardHeader className="p-3 sm:p-4 md:p-6">
                        <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl group-hover:text-primary transition-colors text-balance leading-tight">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                          {new Date(post.published_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0 md:p-6 md:pt-0">
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {post.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("[v0] Error fetching posts:", error);
    console.error("[v0] Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      cause: error instanceof Error ? error.cause : undefined,
      stack: error instanceof Error ? error.stack : undefined,
      directusUrl: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    });

    return (
      <div className="min-h-screen">
        <TideHeader />
        <div className="container mx-auto px-3 sm:px-4 py-4 md:py-6 max-w-7xl">
          <Card className="border-2 border-red-500/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="py-12 text-center space-y-4">
              <p className="text-red-600 dark:text-red-500 font-semibold">
                Error loading posts
              </p>
              <p className="text-sm text-muted-foreground">
                {error instanceof Error ? error.message : "Unknown error"}
              </p>
              {!process.env.NEXT_PUBLIC_DIRECTUS_URL && (
                <p className="text-sm text-muted-foreground">
                  Please check if NEXT_PUBLIC_DIRECTUS_URL environment variable
                  is set
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
