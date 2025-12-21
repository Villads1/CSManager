import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const roleClasses = {
    AWP: "badge-awp",
    IGL: "badge-igl",
    Entry: "badge-entry",
    Support: "badge-support",
    Rifler: "badge-rifler",
};

const getEnergyColor = (energy) => {
    if (energy >= 70) return "from-emerald-500 to-emerald-400";
    if (energy >= 40) return "from-yellow-500 to-amber-400";
    return "from-red-500 to-rose-400";
};

const getEnergyBg = (energy) => {
    if (energy >= 70) return "bg-emerald-500/20";
    if (energy >= 40) return "bg-yellow-500/20";
    return "bg-red-500/20";
};

const FormIcon = ({ form }) => {
    if (form === "up") return <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />;
    if (form === "down") return <TrendingDown className="w-3.5 h-3.5 text-red-400" />;
    return <Minus className="w-3.5 h-3.5 text-slate-500" />;
};

export default function PlayerCard({ player }) {
    return (
        <div className="group relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300 cursor-pointer">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

            {/* Header: Avatar and Name */}
            <div className="flex items-center gap-3 mb-4 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-xl border border-slate-600/50 shadow-lg">
                    {player.avatar}
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-50 truncate group-hover:text-orange-400 transition-colors">
                        {player.name}
                    </h4>
                    <span className={`badge ${roleClasses[player.role]} mt-1 inline-block`}>
                        {player.role}
                    </span>
                </div>
            </div>

            {/* Energy Bar */}
            <div className="mb-4 relative">
                <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-500 font-medium uppercase tracking-wider">Energy</span>
                    <span className={`font-bold tabular-nums ${getEnergyBg(player.energy)} px-2 py-0.5 rounded-md ${player.energy >= 70 ? 'text-emerald-400' : player.energy >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {player.energy}%
                    </span>
                </div>
                <div className="energy-bar">
                    <div
                        className={`energy-bar-fill bg-gradient-to-r ${getEnergyColor(player.energy)}`}
                        style={{ width: `${player.energy}%` }}
                    />
                </div>
            </div>

            {/* Form and Rating */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-700/50 relative">
                <div className="flex items-center gap-2">
                    <FormIcon form={player.form} />
                    <span className="text-xs text-slate-500 font-medium">Form</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-500 font-medium">Rating</span>
                    <span className={`text-lg font-black tabular-nums ${player.rating >= 1.1 ? 'text-emerald-400' : player.rating >= 1.0 ? 'text-slate-50' : 'text-red-400'}`}>
                        {player.rating.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
