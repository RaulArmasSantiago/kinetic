import {createClient} from '@/lib/supabase/server'

function StatCard({
  label, value, note, color, percentage,
}: { label: string; value: string; note: string; color: string; percentage: number }) {
  const circumference = 2 * Math.PI * 42;
  const dash = (circumference * percentage) / 100;

  return (
    <div className="bg-white border border-line rounded-2xl p-5 flex items-center gap-4">
      <svg width="56" height="56" viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E8F0" strokeWidth="10" />
        <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="10"
          strokeLinecap="round" strokeDasharray={`${dash} ${circumference}`} />
      </svg>
      <div>
        <p className="text-xs text-muted mb-1">{label}</p>
        <p className="font-mono font-semibold text-2xl">{value}</p>
        <p className="text-xs font-medium mt-0.5" style={{ color }}>{note}</p>
      </div>
    </div>
  );
}

export default async function ResumenPage() {

    const supabase = await createClient();
    const {data, error} = await supabase.auth.getClaims();
    console.log("supabase => ", {claims:data?.claims ?? null, error: error?.message});

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard label="Clientes activos" value="32" note="+4 este mes" color="#10B981" percentage={80} />
      <StatCard label="Sesiones hoy" value="6" note="2 sin confirmar" color="#2563EB" percentage={60} />
      <StatCard label="Ingresos del mes" value="$48.2k" note="70% de la meta" color="#F97316" percentage={70} />
      <StatCard label="Retención" value="92%" note="+3 pts vs mes pasado" color="#10B981" percentage={92} />
    </div>
  );
}