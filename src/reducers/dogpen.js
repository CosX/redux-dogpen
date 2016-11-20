import { combineReducers } from "redux";
import { ADD_DOG, REMOVE_DOG, RENAME_DOG } from "../actiontypes/actionTypes"

function dogPen(state = [], action) {
  switch (action.type) {
    case ADD_DOG:
      return [
        ...state,
        {
          name: action.dog.name,
          breed: action.dog.breed,
          sex: action.dog.sex,
          age: action.dog.age
        }
      ];
    case REMOVE_DOG:
      state.splice(action.index, 1);
      return state;
    case RENAME_DOG:
      return state.map((dog, index) => {
        if (index === action.dog.index) {
          return Object.assign({}, dog, {
            name: action.dog.name
          });
        }
      });
    default:
      return state;
  };
}

const dogpenApp = combineReducers({
  dogPen
});

export default dogpenApp
