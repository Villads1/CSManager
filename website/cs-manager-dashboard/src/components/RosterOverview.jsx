import PlayerCard from "./PlayerCard.jsx";
import { roster } from "../data/mockData.js";
import { Users } from "lucide-react";

export default function RosterOverview() {
    return (
        <div className="card">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="section-header mb-1">Active Roster</h2>
                    <p className="text-xs text-slate-500">5 players • Ready for match</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-400 bg-slate-800/50 hover:bg-slate-800 hover:text-slate-50 rounded-lg transition-all">
                    <Users className="w-4 h-4" />
                    Manage
                </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
                {roster.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
}
