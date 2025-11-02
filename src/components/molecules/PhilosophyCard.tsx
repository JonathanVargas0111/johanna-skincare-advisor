interface PhilosophyCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
    icon,
    title,
    description
}) => {
    return (
        <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-pink-100 rounded-full">
                {icon}
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};