import { useState, useEffect } from "react";
import { Clock, Crosshair, Zap } from "lucide-react";
import { nextMatch, userTeam } from "../data/mockData.js";

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

export default function NextMatch() {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = nextMatch.matchTime - new Date();
            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="card relative overflow-hidden">
            {/* Accent glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative">
                <div>
                    <h2 className="section-header mb-1">Next Match</h2>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            LIVE SOON
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium">{nextMatch.tournament}</span>
                </div>
            </div>

            {/* Teams VS Display */}
            <div className="flex items-center justify-center gap-8 py-8 relative">
                {/* User Team */}
                <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center text-4xl mb-3 border border-slate-600/50 shadow-xl group-hover:border-orange-500/50 transition-colors">
                        {userTeam.logo}
                    </div>
                    <p className="text-sm font-bold text-slate-50">{userTeam.name}</p>
                    <p className="text-[10px] font-medium text-orange-400 uppercase tracking-wider mt-1">Your Team</p>
                </div>

                {/* VS Badge */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-slate-700">
                        <Zap className="w-6 h-6 text-orange-500" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">VS</span>
                </div>

                {/* Opponent */}
                <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center text-4xl mb-3 border border-slate-600/50 shadow-xl group-hover:border-yellow-500/50 transition-colors">
                        {nextMatch.opponent.logo}
                    </div>
                    <p className="text-sm font-bold text-slate-50">
                        {nextMatch.opponent.name}
                    </p>
                    <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mt-1">Opponent</p>
                </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-4 mb-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="text-center">
                    <div className="text-3xl font-black text-orange-500 tabular-nums text-glow">
                        {formatTime(timeLeft.hours)}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mt-1">Hours</div>
                </div>
                <span className="text-2xl text-slate-600 font-light">:</span>
                <div className="text-center">
                    <div className="text-3xl font-black text-orange-500 tabular-nums text-glow">
                        {formatTime(timeLeft.minutes)}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mt-1">Min</div>
                </div>
                <span className="text-2xl text-slate-600 font-light">:</span>
                <div className="text-center">
                    <div className="text-3xl font-black text-orange-500 tabular-nums text-glow">
                        {formatTime(timeLeft.seconds)}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mt-1">Sec</div>
                </div>
            </div>

            {/* CTA Button */}
            <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Crosshair className="w-5 h-5" />
                <span>Set Tactics</span>
            </button>
        </div>
    );
}
