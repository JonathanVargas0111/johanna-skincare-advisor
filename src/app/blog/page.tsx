import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

interface Post {
    slug: string;
    title: string;
    description: string;
    publishDate: string;
    author: string;
    tags: string[];
}

async function getPosts(): Promise<Post[]> {
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
        .filter(filename => filename.endsWith('.md'))
        .map(filename => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug: filename.replace('.md', ''),
                title: data.title,
                description: data.description,
                publishDate: data.publishDate,
                author: data.author,
                tags: data.tags,
            };
        })
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

    return posts;
}

export default async function BlogPage() {
    const posts = await getPosts();

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
                <h1 className="text-4xl font-primary font-bold text-primary mb-8 text-center">Blog</h1>
                <div className="space-y-8">
                    {posts.map(post => (
                        <article key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-2">
                                <Link href={`/blog/${post.slug}`} className="text-primary hover:text-accent">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 mb-4">{post.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>{post.author}</span>
                                <span className="mx-2">•</span>
                                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="mt-4">
                                {post.tags.map(tag => (
                                    <span key={tag} className="inline-block bg-secondary text-white px-2 py-1 rounded mr-2 text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}