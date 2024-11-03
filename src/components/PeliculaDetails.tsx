import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Elenco} from '../interfaces/peliculaInterfaces';
import {MovieFull} from '../interfaces/peliculaInterfaces';
import currencyFormatter from 'currency-formatter';
import {FlatList} from 'react-native-gesture-handler';
import {ElencoItem} from './ElencoItem';
interface Props {
  movieFull: MovieFull;
  cast: Elenco[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{color: 'black'}}>{movieFull.vote_average}</Text>
          <Text style={{color: 'black', marginLeft: 5}}>
            -{movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia de la pelicula */}
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>

        {/* casting de la pelicula */}
        <Text style={{color: 'black', fontSize: 20}}>{movieFull.overview}</Text>
        {/* presupuesto de la pelicula */}
        <Text style={{color: 'black', fontSize: 23, marginTop: 10}}>
          Presupuesto
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ElencoItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
        {/** */}
      </View>
    </>
  );
};