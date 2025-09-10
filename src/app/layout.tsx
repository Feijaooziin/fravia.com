import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "Flávia Ribeiro",
  description: "Flávia Ribeiro Lash Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col bg-purple-950 text-white">
        {/* Header */}
        <header className="w-full shadow-md bg-purple-900 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            {/* Logo */}
            <Link href="/">
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">
                Flávia Ribeiro
              </h1>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="hover:text-yellow-400 text-xl font-semibold uppercase"
              >
                Início
              </Link>
              <Link
                href="/pages/Services"
                className="hover:text-yellow-400 text-xl font-semibold uppercase"
              >
                Serviços
              </Link>
            </nav>

            {/* Mobile menu hamburguer */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-purple-600 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-yellow-400 text-xl font-semibold uppercase underline">
                      Menu
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col h-full px-3 gap-6">
                    <Link href="/" className="text-2xl font-semibold uppercase">
                      Início
                    </Link>
                    <Link
                      href="/pages/Services"
                      className="text-2xl font-semibold uppercase"
                    >
                      Serviços
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-purple-900 text-center py-6 text-sm text-yellow-300 px-4 sm:px-6 lg:px-10">
          © {new Date().getFullYear()} Flávia Ribeiro - Todos os direitos
          reservados
        </footer>
      </body>
    </html>
  );
}
