import React, {useState} from 'react';
import Colors from '../../constants/Colors';
import {styles} from './styles';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addPlace} from '../../store/actions/places.actions';
import ImageSelector from '../../components/ImageSelector/ImageSelector';

const NewPlaceScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addPlace(title, image));
    navigation.navigate('Direcciones');
  };

  const handleOnImage = uri => {
    setImage(uri);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nueva Direccion</Text>
        <TextInput style={styles.input} onChangeText={text => setTitle(text)} />
        <ImageSelector onImage={handleOnImage} />
        <Button
          title="Grabar direccion"
          color={Colors.MAROON}
          onPress={() => handleSubmit()}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;
