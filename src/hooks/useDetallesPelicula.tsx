import {useEffect, useState} from 'react';
import peliculaDB from '../api/peliculaDB';
import {Elenco} from '../interfaces/peliculaInterfaces';
import {MovieFull} from '../interfaces/peliculaInterfaces';
import {CreditResponse} from '../interfaces/creditsInterfaces'

interface PeliculaDetalle {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Elenco[];
}

export const usePeliculaDetalle = (peliculaId: number) => {
  const [state, setState] = useState<PeliculaDetalle>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getPeliculaDetalle = async () => {
    const PeliculaDetallePromise = await peliculaDB.get<MovieFull>(`/${peliculaId}`);
    const movieCreditPromise = await peliculaDB.get<CreditResponse>(
      `/${peliculaId}/credits`,
    );
    const [PeliculaDetalleResp, castPromiseResp] = await Promise.all([
      PeliculaDetallePromise,
      movieCreditPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: PeliculaDetalleResp.data,
      cast: castPromiseResp.data.cast,
    });
  };
  useEffect(() => {
    getPeliculaDetalle();
  }, []);

  return {
    ...state,
  };
};