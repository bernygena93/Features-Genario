import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import PlaceItem from '../../components/PlaceItem/PlaceItem';

const PlaceListScreen = ({navigation}) => {
  const places = useSelector(state => state.places.places);
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={data => (
        <PlaceItem
          title={data.item.title}
          image={data.item.image}
          address="Avenida Siempre Viva 123"
          onSelect={() => navigation.navigate('Detalle')}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaceListScreen;
