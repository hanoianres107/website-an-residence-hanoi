import { notFound } from "next/navigation";
import { dict } from "@/lib/dictionary";
import { BlogPostClient } from "./BlogPostClient";

const SLUGS: string[] = dict.vi.blog.posts.map((p) => p.slug);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <BlogPostClient slug={slug} />;
}
