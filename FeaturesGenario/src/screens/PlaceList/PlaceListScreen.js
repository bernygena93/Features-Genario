import React from 'react';
import {FlatList} from 'react-native';
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
          address={data.item.address}
          onSelect={() =>
            navigation.navigate('Detalle', {placeID: data.item.id})
          }
        />
      )}
    />
  );
};

export default PlaceListScreen;
