import { AlertTriangle, DollarSign, Trophy, Info, Bell, ChevronRight } from "lucide-react";
import { inbox } from "../data/mockData.js";

const iconMap = {
    warning: AlertTriangle,
    offer: DollarSign,
    news: Trophy,
    info: Info,
};

const colorMap = {
    warning: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20",
    },
    offer: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
    },
    news: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
    },
    info: {
        bg: "bg-slate-500/10",
        text: "text-slate-400",
        border: "border-slate-500/20",
    },
};

export default function InboxFeed() {
    const unreadCount = inbox.length;

    return (
        <div className="card h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Bell className="w-5 h-5 text-slate-400" />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                    <div>
                        <h2 className="section-header mb-0">Inbox</h2>
                    </div>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-orange-400 transition-colors">
                    Mark All Read
                </button>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto pr-1 max-h-[300px]">
                {inbox.map((item) => {
                    const Icon = iconMap[item.type];
                    const colors = colorMap[item.type];
                    return (
                        <div
                            key={item.id}
                            className={`group flex items-start gap-3 p-3 rounded-xl ${colors.bg} border ${colors.border} hover:border-slate-600 transition-all duration-200 cursor-pointer`}
                        >
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                                <Icon className={`w-4 h-4 ${colors.text}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <h4 className="text-sm font-semibold text-slate-50 truncate group-hover:text-orange-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <span className="text-[10px] text-slate-500 flex-shrink-0 font-medium">
                                        {item.time}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                    {item.message}
                                </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 flex-shrink-0 mt-1 transition-colors" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
