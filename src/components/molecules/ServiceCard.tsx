interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    price: string;
    priceLabel: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    price,
    priceLabel
}) => {
    return (
        <div className="p-8 transition-shadow bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
            <div className="flex items-center justify-center w-12 h-12 mb-6 bg-pink-100 rounded-lg">
                {icon}
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mb-6 text-gray-600">{description}</p>
            <div className="text-center">
                <span className="text-2xl font-bold text-pink-600">{price}</span>
                <span className="text-gray-500"> {priceLabel}</span>
            </div>
        </div>
    );
};