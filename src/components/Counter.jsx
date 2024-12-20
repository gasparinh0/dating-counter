import React, { useEffect, useState } from 'react';
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  addYears,
  addMonths,
  addDays,
  addHours
} from 'date-fns';

const Contador = () => {
  const [tempo, setTempo] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
  });

  useEffect(() => {
    const dataInicial = new Date("2023-09-16T00:00:00"); // Data inicial mais legível

    const atualizarContador = () => {
      const agora = new Date();

      const anos = differenceInYears(agora, dataInicial);
      const dataAposAnos = addYears(dataInicial, anos);

      const meses = differenceInMonths(agora, dataAposAnos);
      const dataAposMeses = addMonths(dataAposAnos, meses);

      const dias = differenceInDays(agora, dataAposMeses);
      const dataAposDias = addDays(dataAposMeses, dias);

      const horas = differenceInHours(agora, dataAposDias);
      const dataAposHoras = addHours(dataAposDias, horas);

      const minutos = differenceInMinutes(agora, dataAposHoras);

      setTempo({ anos, meses, dias, horas, minutos });
    };

    atualizarContador(); // Atualiza imediatamente
    const intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="flex flex-row space-x-3 mt-5 font-bold">
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
