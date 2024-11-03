import React, { createContext, useState } from 'react';

interface ColoresImagen {
  primario: string;
  secundario: string;
}

interface PropsContexto {
  colores: ColoresImagen;
  coloresPrevios: ColoresImagen;
  establecerColoresPrincipales: (colores: ColoresImagen) => void;
  establecerColoresPreviosPrincipales: (colores: ColoresImagen) => void;
}

export const ContextoDeGradiente = createContext({} as PropsContexto); // TODO: definir tipo

export const ProveedorDeGradiente = ({ children }: any) => {
  const [colores, establecerColores] = useState<ColoresImagen>({
    primario: 'rojo',
    secundario: 'azul',
  });

  const [coloresPrevios, establecerColoresPrevios] = useState<ColoresImagen>({
    primario: 'transparente',
    secundario: 'transparente',
  });

  const establecerColoresPrincipales = (colores: ColoresImagen) => {
    establecerColores(colores);
  };

  const establecerColoresPreviosPrincipales = (colores: ColoresImagen) => {
    establecerColoresPrevios(colores);
  };

  return (
    <ContextoDeGradiente.Provider
      value={{
        colores,
        coloresPrevios,
        establecerColoresPrincipales,
        establecerColoresPreviosPrincipales,
      }}
    >
      {children}
    </ContextoDeGradiente.Provider>
  );
};
