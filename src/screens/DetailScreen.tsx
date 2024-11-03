import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {usePeliculaDetalle} from '../hooks/useDetallesPelicula';
import {RootStackParams} from '../navigator/Navigation';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { PeliculaDetails } from '../components/PeliculaDetails';
const alturaPantalla = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const PantallaDetalle = ({route, navigation}: Props) => {
  const pelicula = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;

  const {isLoading, cast, movieFull} = usePeliculaDetalle(pelicula.id);

  console.log(isLoading);
  return (
    <ScrollView>
      <View style={estilos.contenedorImagen}>
        <View style={estilos.bordeImagen}>
          <Image source={{uri}} style={estilos.imagenCard} />
        </View>
      </View>
      <View style={estilos.contenedorMargen}>
        <Text style={estilos.subTitulo}>{pelicula.original_title}</Text>
        <Text style={estilos.titulo}>{pelicula.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} style={{marginTop: 20}} />
      ) : (
        <PeliculaDetails movieFull={movieFull!} cast={cast} />
      )}

      {/* botón para regresar */}
      <View style={estilos.botonRegresar}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  contenedorImagen: {
    //backgroundColor: 'red',
    //overflow: 'hidden',
    width: '100%',
    height: alturaPantalla * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  bordeImagen: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imagenCard: {
    flex: 1,
  },
  contenedorMargen: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitulo: {
    fontSize: 16,
    color: 'black',
    opacity: 0.8,
  },
  titulo: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  botonRegresar: {
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 999,
    elevation: 9,
  },
});
