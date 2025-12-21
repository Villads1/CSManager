import {
    LayoutDashboard,
    Users,
    Target,
    ShoppingBag,
    Swords,
    DollarSign,
    Settings,
    LogOut,
} from "lucide-react";
import { userTeam } from "../data/mockData.js";

const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Roster", icon: Users },
    { name: "Tactics", icon: Target },
    { name: "Transfer Market", icon: ShoppingBag },
    { name: "Scrims", icon: Swords },
    { name: "Finances", icon: DollarSign },
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-slate-800/50 flex flex-col h-screen sticky top-0">
            {/* Logo Area */}
            <div className="p-6 border-b border-slate-800/50">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <span className="text-xl font-black text-white tracking-tighter">CS</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-slate-50">CS Manager</h1>
                        <p className="text-xs text-slate-500 font-medium">Season 2025</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                <p className="section-header px-4 mb-3">Main Menu</p>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.name}
                            href="#"
                            className={`nav-link ${item.active ? "active" : ""}`}
                        >
                            <Icon className="w-5 h-5" strokeWidth={item.active ? 2.5 : 2} />
                            <span>{item.name}</span>
                            {item.active && (
                                <span className="ml-auto w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                            )}
                        </a>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 space-y-4">
                {/* Quick Actions */}
                <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-slate-50 hover:bg-slate-800 transition-all text-sm">
                        <Settings className="w-4 h-4" />
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm">
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>

                {/* Team Card */}
                <div className="card !p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-2xl border border-slate-600/50 shadow-inner">
                            {userTeam.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-slate-50 truncate">
                                {userTeam.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-medium text-slate-500">Rank</span>
                                <span className="text-xs font-bold text-orange-400">#{userTeam.rank}</span>
                                <span className="text-slate-700">•</span>
                                <span className="text-xs font-medium text-slate-500">Pro League</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/50">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Balance</span>
                            <span className="text-lg font-bold text-emerald-400 tabular-nums">
                                ${userTeam.balance.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
