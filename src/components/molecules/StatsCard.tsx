interface StatsCardProps {
    number: string;
    label: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ number, label }) => {
    return (
        <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-pink-600 md:text-5xl">{number}</div>
            <div className="font-medium text-gray-600">{label}</div>
        </div>
    );
};