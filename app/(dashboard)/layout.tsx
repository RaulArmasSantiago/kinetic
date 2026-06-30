import { Sidebar  } from "@/components/ui/Sidebar";

const dashboardLinks = [
  {
    label: "Resumen",
    href: "/resumen",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l9-9 9 9" /><path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    label: "Alumnos",
    href: "/alumnos",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" /><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" />
      </svg>
    ),
  },
  {
    label: "Rutinas",
    href: "/rutinas",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    label: "Cobros",
    href: "/cobros",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
      </svg>
    ),
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar brand="Kinetic" links={dashboardLinks} />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between gap-4 px-8 py-5 border-b border-line bg-white">
          <div>
            <h1 className="font-display font-bold text-lg">Hola, Raúl</h1>
            <p className="text-muted text-sm">Lunes, 22 de junio</p>
          </div>
          <input
            placeholder="Buscar clientes, rutinas..."
            className="px-4 py-2 rounded-xl border border-line text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}