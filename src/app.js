import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dogpen from './reducers/dogpen';
import person from './reducers/person';
import { addDog, adoptDog, renameDog, addPerson } from './actioncreators/actionCreators';

let dogpenApp = combineReducers({
  dogpen,
  person
});

let store = createStore(
  dogpenApp,
  applyMiddleware(thunk)
);

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

console.log("--- ALL DOGS IN THE PEN ---");
console.log(store.getState());

store.dispatch(renameDog({
  name: "candy",
  index: 1
}));

console.log("--- STEVE GETS RENAMED TO CANDY ---");
console.log(store.getState());

store.dispatch(addPerson({
  name: "Joe",
  sex: "male",
  dogs: []
}));

console.log("--- JOE WALKS IN THE PEN, HE HAS NO DOGS. POOR FELLOW. ---");
console.log(store.getState());

store.dispatch(adoptDog({dogindex: 2, personindex: 0}));

console.log("--- GEORGE GETS ADOPTED FROM THE PEN BY JOE ---");
console.log(store.getState());
