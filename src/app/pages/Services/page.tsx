import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
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
  );
}
