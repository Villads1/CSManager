import Sidebar from "./components/Sidebar.jsx";
import NextMatch from "./components/NextMatch.jsx";
import RosterOverview from "./components/RosterOverview.jsx";
import LeagueStandings from "./components/LeagueStandings.jsx";
import FinancialTicker from "./components/FinancialTicker.jsx";
import InboxFeed from "./components/InboxFeed.jsx";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-black text-slate-50">Dashboard</h1>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Live
            </span>
          </div>
          <p className="text-sm text-slate-500">
            Welcome back, Manager. Here's your team overview for today.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-5">
          {/* Next Match - Spans 5 columns */}
          <div className="col-span-5">
            <NextMatch />
          </div>

          {/* League Standings - Spans 4 columns */}
          <div className="col-span-4">
            <LeagueStandings />
          </div>

          {/* Financial Ticker - Spans 3 columns */}
          <div className="col-span-3">
            <FinancialTicker />
          </div>

          {/* Roster Overview - Spans 9 columns */}
          <div className="col-span-9">
            <RosterOverview />
          </div>

          {/* Inbox Feed - Spans 3 columns */}
          <div className="col-span-3">
            <InboxFeed />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800/50">
          <p className="text-xs text-slate-600 text-center">
            CS Manager © 2025 • Season 19 • Pro League Division
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
