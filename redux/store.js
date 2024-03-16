import { createStore } from 'redux';

const initialState = {
  target: '',
  propertyType: '',
  propertyDetails: [],
  propertyFeatures: [],
  propertyDescription: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_TARGET':
      return {
        ...state,
        target: action.payload
      };
      case 'SET_SELECTED_PROPERTY_TYPE':
        return {
          ...state,
          propertyType: action.payload
      };
      case 'SET_PROPERTY_DETAILS':
        return {
          ...state,
          propertyDetails: action.payload
        };
      case 'SET_PROPERTY_FEATURES':
        return {
          ...state,
          propertyFeatures: action.payload
        };
      case 'SET_PROPERTY_DESCRIPTION':
        return {
          ...state,
          propertyDescription: action.payload
        };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
