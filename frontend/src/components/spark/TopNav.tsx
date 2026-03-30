type NavItem = {
  label: "Feed" | "Profile";
  href: string;
};

const navItems: NavItem[] = [
  { label: "Feed", href: "/" },
  { label: "Profile", href: "#" },
];

type TopNavProps = {
  activeTab?: NavItem["label"];
};

export default function TopNav({ activeTab }: TopNavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm shadow-indigo-900/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <span className="headline-font text-2xl font-bold tracking-tight text-indigo-600">
            Spark
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`headline-font tracking-tight transition-colors duration-200 active:scale-95 ${item.label === activeTab
                    ? "font-semibold text-indigo-700"
                    : "text-slate-500 hover:text-indigo-500"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full bg-surface-container-low px-4 py-2 sm:flex">
            <span className="material-symbols-outlined text-xl text-on-surface-variant">search</span>
            <input type="text" placeholder="Search experiences..." className="w-48 border-none bg-transparent text-sm font-body focus:ring-0" />
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-on-surface-variant transition-colors duration-200 hover:text-primary active:scale-95">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
