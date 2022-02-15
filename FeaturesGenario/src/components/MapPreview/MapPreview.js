import {View, Image} from 'react-native';
import Config from 'react-native-config';
import React from 'react';
import {styles} from './styles';

const MapPreview = props => {
  const mapPreviewUrl =
    props.location &&
    `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longtude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284=&key=${Config.API_KEY}`;

  return (
    <View style={{...styles.mapPreview, ...props.style}}>
      {props.location ? (
        <Image style={styles.mapImage} source={{uri: mapPreviewUrl}} />
      ) : (
        props.children
      )}
    </View>
  );
};

export default MapPreview;
