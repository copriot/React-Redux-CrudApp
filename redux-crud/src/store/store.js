/**
 * !>store olusturma
 * 1. redux kütüphanesinden createStore methodu import et
 * 2.store icerisinde tutulacak olan her bir veri icin reducerlar oluştur
 * 3.oluşturulan reducerlar "combineReducers" ile birlestir
 * 4.store'a olusan birlestirilen tanıtılır.
 */

import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';


//birden fazla reducer varsa birlestir

const rootReducer = combineReducers({
    todoReducer, userReducer
})



//store u olustur
const store = createStore(rootReducer);


export default store;