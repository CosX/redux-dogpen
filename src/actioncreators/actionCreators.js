import {
  ADD_DOG_TO_PEN,
  REMOVE_DOG_FROM_PEN,
  RENAME_DOG,
  ADD_PERSON,
  REMOVE_PERSON
} from "../actiontypes/actionTypes"

export function addDog(dog = {}) {
  return {
    type: ADD_DOG_TO_PEN,
    dog
  };
};

export function adoptDog(index = {}) {
  return (dispatch, getState) => {
    const adopteddog = getState().dogpen[index.dogindex];

    dispatch({
      type: REMOVE_DOG_FROM_PEN,
      index,
      adopteddog
    });
  };
};

export function renameDog(dog = {}) {
  return {
    type: RENAME_DOG,
    dog
  };
};

export function addPerson(person = {}) {
  return {
    type: ADD_PERSON,
    person
  };
};

export function removePerson(index) {
  return {
    type: REMOVE_PERSON,
    index
  };
};
