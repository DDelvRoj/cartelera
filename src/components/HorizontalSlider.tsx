import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/PeliculaInterfaces';
import {PeliculaCard} from './PeliculaCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{
        height: (title) ? 260 : 220
    }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginRight: 10, color: 'black'}}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <PeliculaCard movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};