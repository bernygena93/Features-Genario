import RNFS from 'react-native-fs';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image, location) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyDuWEO5ZTit0Zo498096LBA3Sy41FZkuDI`,
      );
      const resData = await response.json();
      const address = resData.results[0].formatted_address;

      const fileName = image.split('/').pop();
      const Path = `file:///${RNFS.DocumentDirectoryPath}/${fileName}`;

      const result = await RNFS.copyFile(image, Path);

      dispatch({
        type: ADD_PLACE,
        payload: {
          id: Math.random() * 1000,
          image: Path,
          address,
          lat: location.lat,
          lng: location.lng,
        },
      });
      console.log(payload);
    } catch (e) {
      console.log(e);
    }
  };
};
