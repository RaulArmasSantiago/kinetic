import { PasswordField } from "@/components/ui/PasswordField";
import { login } from "./actions";


export default async function LoginPage({
  searchParams,
} : {
  searchParams: Promise<{error?:string}>
}) {
  const { error } = await searchParams;
  return (
    <main className="min-h-screen flex">
      <div
        className="hidden lg:flex lg:w-[46%] flex-col justify-center p-12 text-white"
        style={{
          background:
            "linear-gradient(135deg, #10B981 0%, #0EA5E9 55%, #2563EB 100%)",
        }}
      >
        <h1 className="font-display font-extrabold text-4xl leading-tight mb-4">
          Entrena con datos.
          <br />
          Resultados que se notan.
        </h1>
        <p className="text-white/80 leading-relaxed max-w-md">
          Gestiona clientes, rutinas y pagos desde un solo panel.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="font-display font-bold text-2xl mb-2">
            Bienvenido de nuevo
          </h2>
          <p className="text-muted mb-8 text-sm">
            Ingresa tus datos para acceder a tu panel de entrenador.
          </p>

          {error && (
            <p className="bg-accent-light text-accent text-sm px-3.5 py-2.5 rounded-xl mb-5">
              {error}
            </p>
          )}

          <form action={login} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@ejemplo.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-line text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Contraseña
              </label>
              <PasswordField />
            </div>

            <button className="w-full bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm py-3 rounded-xl transition">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}