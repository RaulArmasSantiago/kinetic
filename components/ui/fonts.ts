import { Inter, Manrope, JetBrains_Mono } from "next/font/google";


export const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600"],
});
