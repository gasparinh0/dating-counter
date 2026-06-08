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
    const dataInicial = new Date("2023-09-16T00:00:00");

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

    atualizarContador();
    const intervalo = setInterval(atualizarContador, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex flex-row space-x-2 sm:space-x-4 mt-6 font-bold w-full justify-center">
      <div className="flex flex-col items-center bg-rose-950/40 p-2 sm:p-3 rounded-2xl border border-rose-300/20 shadow-inner min-w-[60px] sm:min-w-[70px]">
        <p className="text-2xl sm:text-3xl text-rose-200">{tempo.anos}</p>
        <p className="text-xs sm:text-sm font-medium text-rose-100/80">Ano{tempo.anos !== 1 ? 's' : ''}</p>
      </div>
      <div className="flex flex-col items-center bg-rose-950/40 p-2 sm:p-3 rounded-2xl border border-rose-300/20 shadow-inner min-w-[60px] sm:min-w-[70px]">
        <p className="text-2xl sm:text-3xl text-rose-200">{tempo.meses}</p>
        <p className="text-xs sm:text-sm font-medium text-rose-100/80">Mês{tempo.meses !== 1 ? 'es' : ''}</p>
      </div>
      <div className="flex flex-col items-center bg-rose-950/40 p-2 sm:p-3 rounded-2xl border border-rose-300/20 shadow-inner min-w-[60px] sm:min-w-[70px]">
        <p className="text-2xl sm:text-3xl text-rose-200">{tempo.dias}</p>
        <p className="text-xs sm:text-sm font-medium text-rose-100/80">Dia{tempo.dias !== 1 ? 's' : ''}</p>
      </div>
      <div className="flex flex-col items-center bg-rose-950/40 p-2 sm:p-3 rounded-2xl border border-rose-300/20 shadow-inner min-w-[60px] sm:min-w-[70px]">
        <p className="text-2xl sm:text-3xl text-rose-200">{tempo.horas}</p>
        <p className="text-xs sm:text-sm font-medium text-rose-100/80">Hora{tempo.horas !== 1 ? 's' : ''}</p>
      </div>
      <div className="flex flex-col items-center bg-rose-950/40 p-2 sm:p-3 rounded-2xl border border-rose-300/20 shadow-inner min-w-[60px] sm:min-w-[70px]">
        <p className="text-2xl sm:text-3xl text-rose-200">{tempo.minutos}</p>
        <p className="text-xs sm:text-sm font-medium text-rose-100/80">Min{tempo.minutos !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default Contador;
