import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

interface Post {
    slug: string;
    title: string;
    description: string;
    publishDate: string;
    author: string;
    tags: string[];
    content: string;
}

async function getPost(slug: string): Promise<Post | null> {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        description: data.description,
        publishDate: data.publishDate,
        author: data.author,
        tags: data.tags,
        content,
    };
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-neutral flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-primary font-bold text-primary mb-4">Post no encontrado</h1>
                    <Link href="/blog" className="text-accent hover:underline">Volver al blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral text-gray-900">
            {/* Header */}
            <header className="bg-white shadow-md py-4">
                <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-primary font-bold text-primary">Johanna V. Arias</Link>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="text-gray-700 hover:text-primary">Inicio</Link></li>
                            <li><Link href="#sobre-mi" className="text-gray-700 hover:text-primary">Sobre Mí</Link></li>
                            <li><Link href="#servicios" className="text-gray-700 hover:text-primary">Servicios</Link></li>
                            <li><Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link></li>
                            <li><Link href="#contacto" className="text-gray-700 hover:text-primary">Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <Link href="/blog" className="text-accent hover:underline mb-8 inline-block">← Volver al blog</Link>
                <article className="bg-white p-8 rounded-lg shadow-md">
                    <header className="mb-8">
                        <h1 className="text-4xl font-primary font-bold text-primary mb-4">{post.title}</h1>
                        <p className="text-xl text-gray-600 mb-4">{post.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div>
                            {post.tags.map(tag => (
                                <span key={tag} className="inline-block bg-secondary text-white px-2 py-1 rounded mr-2 text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>
                    <div className="prose prose-lg max-w-none">
                        <MDXRemote source={post.content} />
                    </div>
                </article>
            </div>
        </div>
    );
}

// Generate static params for all posts
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames
        .filter(filename => filename.endsWith('.md'))
        .map(filename => ({
            slug: filename.replace('.md', ''),
        }));
}