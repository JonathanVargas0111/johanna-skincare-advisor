interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    subtitle?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
    icon,
    title,
    content,
    subtitle
}) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{content}</p>
                {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            </div>
        </div>
    );
};