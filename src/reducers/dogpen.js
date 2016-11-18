import { combineReducers } from "redux";
import { ADD_DOG, REMOVE_DOG, RENAME_DOG } from "../actionTypes"

function dogPen(state = [], action) {
  switch (action.type) {
    case ADD_DOG:
      return [
        ...state,
        {
          name: action.name,
          breed: action.breed,
          sex: action.sex,
          age: action.age
        }
      ];
    case REMOVE_DOG:
      state.splice(action.index, 1);
      return state;
    case RENAME_DOG:
      return state.map((dog, index) => {
        if (index === action.index) {
          return Object.assign({}, dog, {
            name: action.name
          });
        }
      });
    case default:
      return state;
  };
}

const dogpenApp = combineReducers({
  dogPen
});

export default dogpenApp
