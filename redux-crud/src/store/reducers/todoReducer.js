/*
! reducer
*state'in nasil degisecegine karar verir
*reducer normal bir fonksiyondur
*ve bu fonksiyon 2 parametre alir
* > state: reducerda tutulan verilerin son durumu
* > action : verilerin nasil degisecegini ifade eden nesne.
*/



//başlangıçtatki state
const initialState = {
    todos: [],
    isDarkMode: true,
    x: "",
    y: "",
}


const todoReducer = (state = initialState, action) => {
    //aksiyyonun tipine göre gerekli  güncellemeyi yap
    switch (action.type) {
        case 'Ekle':
            return state;
        case 'CIKAR':
            return state;



        //gelen aksiyon caselerden biri degil ise var olan state i koru
        default:
            return state;
    }
}
export default todoReducer;