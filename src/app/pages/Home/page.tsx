import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Button className="bg-yellow-500 text-purple-950 hover:bg-yellow-400 transition w-full sm:w-auto">
          Agendar agora
        </Button>
      </section>

      {/* Serviços */}
      <section className="flex flex-col gap-8">
        <h3 className="text-2xl font-semibold text-center text-yellow-400">
          Serviços
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-purple-900/60 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300">Cílios Clássico</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Duração: 1h30</p>
              <p>Preço: R$120</p>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/60 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300">Volume Russo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Duração: 2h</p>
              <p>Preço: R$160</p>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/60 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300">Manutenção</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Duração: 1h</p>
              <p>Preço: R$80</p>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>
        </div>
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
        <Button className="bg-green-500 hover:bg-green-400 text-white w-full sm:w-auto">
          Falar no WhatsApp
        </Button>
      </section>
    </div>
  );
}
