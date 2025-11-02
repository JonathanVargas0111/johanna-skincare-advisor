import { Header } from '../../components/organisms/Header';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>{children}</main>
        </div>
    );
}