// Mock data for the CS Manager Dashboard

export const userTeam = {
    name: "Team Nexus",
    logo: "🎮",
    rank: 3,
    balance: 125750,
};

export const roster = [
    {
        id: 1,
        name: "s1mple",
        role: "AWP",
        avatar: "👤",
        energy: 92,
        form: "up",
        rating: 1.34,
    },
    {
        id: 2,
        name: "NiKo",
        role: "Rifler",
        avatar: "👤",
        energy: 78,
        form: "up",
        rating: 1.21,
    },
    {
        id: 3,
        name: "gla1ve",
        role: "IGL",
        avatar: "👤",
        energy: 65,
        form: "neutral",
        rating: 1.08,
    },
    {
        id: 4,
        name: "apEX",
        role: "Entry",
        avatar: "👤",
        energy: 45,
        form: "down",
        rating: 0.98,
    },
    {
        id: 5,
        name: "KSCERATO",
        role: "Support",
        avatar: "👤",
        energy: 88,
        form: "up",
        rating: 1.15,
    },
];

export const nextMatch = {
    opponent: {
        name: "NAVI",
        logo: "🟡",
    },
    tournament: "ESL Pro League S19",
    map: "TBD",
    matchTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 45 * 60 * 1000), // 2h 45m from now
};

export const standings = [
    { rank: 1, team: "FaZe Clan", logo: "🔴", wins: 12, losses: 2, diff: "+42" },
    { rank: 2, team: "G2 Esports", logo: "⚫", wins: 11, losses: 3, diff: "+38" },
    { rank: 3, team: "Team Nexus", logo: "🎮", wins: 10, losses: 4, diff: "+31", isUser: true },
    { rank: 4, team: "Vitality", logo: "🐝", wins: 9, losses: 5, diff: "+24" },
    { rank: 5, team: "Cloud9", logo: "☁️", wins: 8, losses: 6, diff: "+18" },
];

export const transactions = [
    { id: 1, description: "Prize Money - ESL Qualifier", amount: 15000, type: "income" },
    { id: 2, description: "Boot Camp Expenses", amount: -2500, type: "expense" },
    { id: 3, description: "Sponsor Payment - Monthly", amount: 8000, type: "income" },
];

export const inbox = [
    {
        id: 1,
        type: "warning",
        title: "Player Unhappy",
        message: "apEX is unhappy with recent performance",
        time: "2h ago",
    },
    {
        id: 2,
        type: "offer",
        title: "Trade Offer Received",
        message: "Cloud9 wants to buy NiKo for $45,000",
        time: "5h ago",
    },
    {
        id: 3,
        type: "news",
        title: "Tournament Qualification",
        message: "Your team qualified for IEM Katowice 2025",
        time: "1d ago",
    },
    {
        id: 4,
        type: "info",
        title: "New Sponsor Interest",
        message: "Logitech wants to discuss sponsorship",
        time: "2d ago",
    },
];

export const navItems = [
    { name: "Dashboard", icon: "LayoutDashboard", active: true },
    { name: "Roster", icon: "Users" },
    { name: "Tactics", icon: "Target" },
    { name: "Transfer Market", icon: "ShoppingBag" },
    { name: "Scrims", icon: "Swords" },
    { name: "Finances", icon: "DollarSign" },
];
