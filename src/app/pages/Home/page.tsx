"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button
        onClick={() => {
          alert("Clicou no botão!");
        }}
      >
        Ir para Clientes
      </Button>
    </div>
  );
}
