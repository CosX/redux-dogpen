import { ADD_DOG, REMOVE_DOG, RENAME_DOG } from "../actiontypes/actionTypes"

export function addDog(dog = {}) {
  return {
    type: ADD_DOG,
    dog
  };
};

export function removeDog(index) {
  return {
    type: REMOVE_DOG,
    index
  };
};

export function renameDog(dog = {}) {
  return {
    type: RENAME_DOG,
    dog
  };
};
