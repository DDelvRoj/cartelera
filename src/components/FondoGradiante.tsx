import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ContextoDeGradiente } from '../context/GradianteContext';
import { UsarDesvanecimiento } from '../hooks/useDegradado';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const FondoDeGradiente = ({ children }: Props) => {
  const { colores, coloresPrevios, establecerColoresPreviosPrincipales } = useContext(ContextoDeGradiente);
  
  const { opacidad, desvanecerEntrada, desvanecerSalida } = UsarDesvanecimiento();

  useEffect(() => {
    desvanecerEntrada(() => {
      establecerColoresPreviosPrincipales(colores);
      desvanecerSalida(0);
    });
  }, [colores]);
  
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[coloresPrevios.primario, coloresPrevios.secundario, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity: opacidad
        }}>
        <LinearGradient
          colors={[colores.primario, colores.secundario, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.5 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};
