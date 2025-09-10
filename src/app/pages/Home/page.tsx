"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero / Banner */}
      <section className="text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
          Flávia Ribeiro
        </h2>
        <p className="text-lg sm:text-xl text-purple-100 max-w-xl">
          Lash Designer especializada em realçar sua beleza com técnicas
          modernas. Agende seu horário online de forma rápida e prática.
        </p>
        <Link href="/pages/Services">
          <Button className="text-xl p-5 bg-yellow-500 text-purple-950 hover:bg-yellow-400 w-full transition sm:w-auto cursor-pointer">
            Agendar agora
          </Button>
        </Link>
      </section>

      {/* Chamada final */}
      <section className="text-center flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Pronta para agendar?
        </h3>
        <p className="text-purple-100 max-w-lg">
          Garanta já o seu horário e conquiste o olhar dos sonhos. Entre em
          contato pelo WhatsApp para mais informações.
        </p>
        <Button
          className="text-xl p-5 bg-green-500 hover:bg-green-400 text-white w-full sm:w-auto cursor-pointer"
          onClick={() => {
            alert("Redirecionar para o WhatsApp... (implementação futura)");
          }}
        >
          Falar no WhatsApp
        </Button>
      </section>
    </div>
  );
}
