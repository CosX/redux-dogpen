import { ADD_DOG_TO_PEN, REMOVE_DOG_FROM_PEN, RENAME_DOG } from "../actiontypes/actionTypes"

function dogPen(state = [], action) {
  switch (action.type) {
    case ADD_DOG_TO_PEN:
      return [
        ...state,
        {
          name: action.dog.name,
          breed: action.dog.breed,
          sex: action.dog.sex,
          age: action.dog.age
        }
      ];
    case REMOVE_DOG_FROM_PEN:
      state.splice(action.index.dogindex, 1);
      return state;
    case RENAME_DOG:
      return state.map((dog, index) => {
        if (index === action.dog.index) {
          return Object.assign({}, dog, {
            name: action.dog.name
          });
        }
        return dog;
      });
    default:
      return state;
  };
}

export default dogPen
