import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content
    date: string;
    tags: string[];
}

// Get all posts from content/blog directory
export function getAllPosts(): BlogPost[] {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            // Convert markdown to HTML
            const processedContent = remark()
                .use(remarkHtml)
                .processSync(matterResult.content);
            const contentHtml = processedContent.toString();

            return {
                slug,
                title: matterResult.data.title || 'Sin título',
                excerpt: matterResult.data.excerpt || matterResult.data.description || '',
                content: contentHtml,
                date: matterResult.data.date || new Date().toISOString().split('T')[0],
                tags: matterResult.data.tags || [],
            };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort by date descending

    return allPostsData;
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
}

// Get related posts by matching tags
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
    const posts = getAllPosts();
    const current = posts.find((p) => p.slug === currentSlug);
    if (!current) return [];

    const scored = posts
        .filter((p) => p.slug !== currentSlug)
        .map((p) => {
            const shared = p.tags.filter((t) => current.tags.includes(t)).length;
            return { post: p, score: shared };
        })
        .filter((s) => s.score > 0)
        .sort((a, b) => b.score - a.score);

    return scored.slice(0, limit).map((s) => s.post);
}
