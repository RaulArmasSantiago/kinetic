import type { Metadata } from "next";
import { jetbrainsMono, inter, manrope } from '@/components/ui/fonts'
import "./globals.css"
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Kinetic - Panel de entrenador",
  description: "Gestion de clientes, rutinas y pagos desde un solo lugar."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-surface text-ink">
        {children}
      </body>
    </html>
  );

}