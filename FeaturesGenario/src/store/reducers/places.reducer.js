import {ADD_PLACE} from '../actions/places.actions';

import Place from '../../models/PlaceModels';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const place = new Place(
        Date.now(),
        action.payload.title,
        action.payload.image,
      );
      return {
        ...state,
        places: state.places.concat(place),
      };
    default:
      return state;
  }
};
