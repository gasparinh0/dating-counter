import React, { useEffect, useState } from 'react';
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

const Contador = () => {
  const [tempo, setTempo] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
  });

  useEffect(() => {
    const dataInicial = new Date(2023, 8, 16); // 16 de setembro de 2023
    const atualizarContador = () => {
      const agora = new Date();
      const anos = differenceInYears(agora, dataInicial);
      const meses = differenceInMonths(agora, dataInicial) % 12;
      const dias = differenceInDays(agora, dataInicial) % 30;
      const horas = differenceInHours(agora, dataInicial) % 24;
      const minutos = differenceInMinutes(agora, dataInicial) % 60;

      setTempo({ anos, meses, dias, horas, minutos });
    };

    atualizarContador(); // Atualiza imediatamente
    const intervalo = setInterval(atualizarContador, 60000); // Atualiza a cada minuto

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="flex flex-row space-x-3 mt-5">
      <div className="flex flex-col items-center">
        <p>{tempo.anos}</p>
        <p>Ano{tempo.anos !== 1 ? 's' : ''}</p>
      </div>
      <div className="flex flex-col items-center">
        <p>{tempo.meses}</p>
        <p>Mes{tempo.meses !== 1 ? 'es' : ''}</p>
      </div>
      <div className="flex flex-col items-center">
        <p>{tempo.dias}</p>
        <p>Dia{tempo.dias !== 1 ? 's' : ''}</p>
      </div>
      <div className="flex flex-col items-center">
        <p>{tempo.horas}</p>
        <p>Hora{tempo.horas !== 1 ? 's' : ''}</p>
      </div>
      <div className="flex flex-col items-center">
        <p>{tempo.minutos}</p>
        <p>Minuto{tempo.minutos !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default Contador;
