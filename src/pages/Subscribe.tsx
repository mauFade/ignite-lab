import { useState, FormEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import { Logo } from "../components/Logo";

import backgroud from "../assets/Group7735.png";
import { useNavigate } from "react-router-dom";
import { useCreateSubcriberMutation } from "../graphql/generated";

const Subscribe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubcriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blueIsh-500">aplicação completa</strong>, do zero, com{" "}
            <strong className="text-blueIsh-500">React</strong>
          </h1>
          <p className="mt-4 text-gray1-300 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para
            acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray1-700 border border-gray1-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col w-full gap-2">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray1-800 rounded px-5 h-14 focus:outline-none"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu email"
              className="bg-gray1-800 rounded px-5 h-14 focus:outline-none"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green1-600 mt-4 py-4 uppercase rounded font-bold text-sm hover:bg-green1-700 transition:colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={backgroud} alt="background" className="mt-10" />
    </div>
  );
};

export default Subscribe;
