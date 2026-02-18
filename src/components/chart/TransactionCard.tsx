import { Clock } from "lucide-react";

// Kita sesuaikan props-nya agar mirip dengan data yang kamu punya
interface TransactionCardProps {
    type: string;
    description: string;
    time: string;
    price: string;
    icon: React.ReactNode;
    variant: 'blue' | 'yellow'; // Untuk selang-seling warna
}

const TransactionCard = ({ type, description, time, price, icon, variant }: TransactionCardProps) => {
    // Logika warna background berdasarkan variant
    const containerClass = variant === 'blue' 
        ? 'bg-[#9EF7FF] border' 
        : 'bg-[#FFFFAF] border';
        
    const iconBgClass = variant === 'blue'
        ? 'bg-red-200 border' // Sesuaikan warna background icon di desain biru
        : 'bg-red-200 border'; // Sesuaikan warna background icon di desain kuning

    return (
        <div className={`border rounded-2xl p-4 ${containerClass} flex flex-col justify-between gap-y-4`}>
            {/* Bagian Atas: Icon */}
            <div className={`${iconBgClass} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                {icon}
            </div>
            
            {/* Bagian Bawah: Info */}
            <div>
                <h3 className="font-bold text-gray-900 text-sm capitalize">{type}</h3>
                <p className="text-xs text-gray-500">{description}</p>
                    <div className="flex items-center text-xs text-gray-700 gap-1">
                        <Clock size={14} />
                        <span>{time}</span>
                    </div>
                
                <div className="flex justify-between items-end mt-3">
                    <div>
                    </div>
                    <span className="font-bold text-sm ">{price}</span>
                </div>
            </div>
        </div>
    );
};

export default TransactionCard;