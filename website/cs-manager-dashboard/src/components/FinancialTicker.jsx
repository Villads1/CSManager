import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { userTeam, transactions } from "../data/mockData.js";

export default function FinancialTicker() {
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return (
        <div className="card h-full">
            <h2 className="section-header">Finances</h2>

            {/* Balance Display */}
            <div className="relative p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 mb-5">
                <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-emerald-400" />
                    </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/80 mb-1">Current Balance</p>
                <p className="text-3xl font-black text-emerald-400 tabular-nums">
                    ${userTeam.balance.toLocaleString()}
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-emerald-500/20">
                    <div className="flex items-center gap-1.5">
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400 tabular-nums">+${totalIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ArrowDownRight className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-xs font-medium text-red-400 tabular-nums">-${totalExpense.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">Recent Activity</p>
                <div className="space-y-2">
                    {transactions.map((tx) => (
                        <div
                            key={tx.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-800/50 hover:border-slate-700/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.type === 'income' ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
                                    {tx.type === "income" ? (
                                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <TrendingDown className="w-4 h-4 text-red-400" />
                                    )}
                                </div>
                                <span className="text-xs font-medium text-slate-300 max-w-[120px] truncate">
                                    {tx.description}
                                </span>
                            </div>
                            <span
                                className={`text-sm font-bold tabular-nums ${tx.type === "income" ? "text-emerald-400" : "text-red-400"
                                    }`}
                            >
                                {tx.type === "income" ? "+" : "-"}${Math.abs(tx.amount).toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
