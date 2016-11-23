import { REMOVE_PERSON, REMOVE_DOG_FROM_PEN, ADD_PERSON } from "../actiontypes/actionTypes"

function dogPen(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          name: action.person.name,
          sex: action.person.sex,
          dogs: action.person.dogs
        }
      ];
    case REMOVE_PERSON:
      state.splice(action.index, 1);
      return state;
    case REMOVE_DOG_FROM_PEN:
      console.log(state);
      return state;
    default:
      return state;
  };
}

export default dogPen
