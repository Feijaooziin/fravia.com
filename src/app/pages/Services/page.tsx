import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-col gap-16">
      <section className="text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
          Pensando em cada detalhe
        </h2>
        <p className="text-lg sm:text-xl text-purple-100">
          Em cada aplicação é feito um &quot;mapping&quot;, ou seja, o volume
          escolhido é adaptado para cada olhar, que são os tamanhos e números do
          volume escolhido.
        </p>
        <Link
          href="/pages/Mapping"
          className="underline text-yellow-300 text-lg font-bold"
        >
          Confira os exemplos
        </Link>
      </section>

      <section className="flex flex-col gap-8">
        <h3 className="text-3xl sm:text-4xl font-black text-center text-yellow-400">
          Serviços
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-purple-900 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300 text-2xl font-black">
                Cílios Brasileiro
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <div className="flex gap-6 flex-col font-bold">
                <p className="text-white text-xl">
                  Nesta técnica, são 2 fios sintéticos em cada fio natural,
                  sendo o mais buscado, pois entrega um resultado mais natural.
                </p>
                <div>
                  <p className="text-white text-xl font-medium">
                    Duração: 1h30
                  </p>
                  <p className="text-white text-lg font-light">Preço: R$90</p>
                </div>
              </div>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300 text-2xl font-black">
                Cílios Egípcio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col font-bold">
                <p className="text-white text-xl">
                  Uma técnica com 3 fios sintéticos em cada fio natural, um
                  resultado levemente volumoso e natural.
                </p>
                <div>
                  <p className="text-white text-xl font-medium">
                    Duração: 1h45
                  </p>
                  <p className="text-white text-lg font-light">Preço: R$100</p>
                </div>
              </div>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300 text-2xl font-black">
                Cílios Luxo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col font-bold">
                <p className="text-white text-xl">
                  Com 4 fios sintéticos em cada fio natural.
                </p>
                <div>
                  <p className="text-white text-xl font-medium">
                    Duração: 1h45
                  </p>
                  <p className="text-white text-lg font-light">Preço: R$100</p>
                </div>
              </div>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300 text-2xl font-black">
                Cílios Glamour
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col font-bold">
                <p className="text-white text-xl">
                  Técnica com 5 fios sintéticos em cada fio natural.
                </p>
                <div>
                  <p className="text-white text-xl font-medium">Duração: 2h</p>
                  <p className="text-white text-lg font-light">Preço: R$110</p>
                </div>
              </div>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900 border-purple-700">
            <CardHeader>
              <CardTitle className="text-yellow-300 text-2xl font-black">
                Cílios Inglês
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 flex-col font-bold">
                <p className="text-white text-xl">
                  O mais procurado por quem quer volume que não seja
                  extremamente exagerado, pois possui 6 fios sintéticos em um
                  fio natural.
                </p>
                <div>
                  <p className="text-white text-xl font-medium">
                    Duração: 2h20
                  </p>
                  <p className="text-white text-lg font-light">Preço: R$110</p>
                </div>
              </div>
              <Button className="mt-4 w-full bg-yellow-500 text-purple-950 hover:bg-yellow-400">
                Agendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center flex flex-col items-center">
        <p>***</p>
        <p className="text-lg sm:text-xl text-purple-100">
          Lembrando que cada volume e tempo de aplicação varia de acordo com a
          quantidade de fios naturais que cada cliente possui. Se tiver poucos
          fios naturais, o resultado será mais natural.
        </p>
        <p>***</p>
      </section>
    </div>
  );
}
