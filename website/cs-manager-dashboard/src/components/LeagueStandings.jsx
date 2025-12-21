import { standings } from "../data/mockData.js";
import { Trophy, ChevronRight } from "lucide-react";

export default function LeagueStandings() {
    return (
        <div className="card h-full">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                        <h2 className="section-header mb-0">League Standings</h2>
                        <p className="text-xs text-slate-500">Pro League S19</p>
                    </div>
                </div>
                <button className="text-xs text-slate-400 hover:text-orange-400 font-medium flex items-center gap-1 transition-colors">
                    View All
                    <ChevronRight className="w-3.5 h-3.5" />
                </button>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-800/50">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-slate-800/30">
                            <th className="text-[10px] text-slate-500 uppercase tracking-wider font-bold text-left py-2.5 pl-4">#</th>
                            <th className="text-[10px] text-slate-500 uppercase tracking-wider font-bold text-left py-2.5">Team</th>
                            <th className="text-[10px] text-slate-500 uppercase tracking-wider font-bold text-center py-2.5">W</th>
                            <th className="text-[10px] text-slate-500 uppercase tracking-wider font-bold text-center py-2.5">L</th>
                            <th className="text-[10px] text-slate-500 uppercase tracking-wider font-bold text-right py-2.5 pr-4">Diff</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((team, index) => (
                            <tr
                                key={team.rank}
                                className={`border-t border-slate-800/50 transition-colors duration-200 ${team.isUser
                                        ? "bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent"
                                        : "hover:bg-slate-800/30"
                                    }`}
                            >
                                <td className="py-3 pl-4">
                                    <span className={`text-xs font-bold tabular-nums ${team.rank === 1 ? 'text-yellow-500' : team.rank === 2 ? 'text-slate-400' : team.rank === 3 ? 'text-orange-600' : 'text-slate-500'}`}>
                                        {team.rank}
                                    </span>
                                </td>
                                <td className="py-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-lg">{team.logo}</span>
                                        <span className={`font-semibold ${team.isUser ? "text-orange-400" : "text-slate-50"}`}>
                                            {team.team}
                                        </span>
                                        {team.isUser && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 bg-orange-500/20 px-1.5 py-0.5 rounded">
                                                YOU
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-3 text-center">
                                    <span className="text-sm font-bold text-emerald-400 tabular-nums">{team.wins}</span>
                                </td>
                                <td className="py-3 text-center">
                                    <span className="text-sm font-bold text-red-400 tabular-nums">{team.losses}</span>
                                </td>
                                <td className="py-3 pr-4 text-right">
                                    <span className={`text-sm font-bold tabular-nums ${team.diff.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                                        {team.diff}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
