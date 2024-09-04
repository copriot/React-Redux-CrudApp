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
    isDone: false,
    y: "",
}


const todoReducer = (state = initialState, action) => {
    //aksiyyonun tipine göre gerekli  güncellemeyi yap
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: state.todos.concat(action.payload),
            };
        case 'DELETE':
            const filtered = state.todos.filter((i) => i.id != action.payload)
            return {
                ...state, todos: filtered
            };


        case 'UPDATE':
            const updateArray = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
            return {
                ...state, todos: updateArray
            };

        case 'TOGGLE_THEME':
            return {
                ...state, isDarkMode: !state.isDarkMode
            }


        //gelen aksiyon caselerden biri degil ise var olan state i koru
        default:
            return state;
    }
}
export default todoReducer;