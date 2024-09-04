import store from "./redux/store.js";
//
//  Підписуємось до оновлень
const unsubscribe = store.subscribe(() => console.log(`Redux store just changed! ${store.getState()}`)); 
//
store.dispatch({
type: 'ADD_CURRENT_TIME',
    payload: '11.30.00'
})

// 
store.dispatch({
type: 'ADD_CURRENT_TIME',
    payload: '11.32.00'
})
//  Відписуємось від оновлень
unsubscribe();

//
store.dispatch({
type: 'CLEAR_ALL_TIMES',
})

document.querySelector('#btn').addEventListener('click', () => {
    store.dispatch({
type: 'ADD_CURRENT_TIME',
payload: `${Date()}`,
})
})