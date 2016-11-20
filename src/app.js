import { createStore } from 'redux';
import dogpenApp from './reducers/dogpen';
import { addDog, removeDog, renameDog } from './actioncreators/actionCreators';
let store = createStore(dogpenApp);

store.dispatch(addDog({
  name: "pixie",
  breed: "boxer",
  sex: "female",
  age: 2
}));

store.dispatch(addDog({
  name: "steve",
  breed: "mountain dog",
  sex: "male",
  age: 5
}));

store.dispatch(addDog({
  name: "george",
  breed: "finnish lapphund",
  sex: "male",
  age: 1
}));

console.log("--- ALL DOGS BEFORE CHANGE ---");
console.log(store.getState());

store.dispatch(renameDog({
  name: "candy",
  index: 1
}));

console.log("--- STEVE GETS RENAMED ---");
console.log(store.getState());

store.dispatch(removeDog(2));

console.log("--- GEORGE GETS REMOVED FROM THE PEN ---");
console.log(store.getState());
