import { useRef } from "react";
import { Animated } from "react-native";

export const UsarDesvanecimiento = () => {

    const opacidad = useRef(new Animated.Value(0)).current;

    const desvanecerEntrada = (callback?: Function) => {
      Animated.timing(opacidad, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => callback ? callback() : null);
    };

    const desvanecerSalida = (duracion: number = 3000) => {
      Animated.timing(opacidad, {
        toValue: 0,
        duration: duracion,
        useNativeDriver: true,
      }).start();
    };

    return {
        opacidad,
        desvanecerEntrada,
        desvanecerSalida
    };
}
