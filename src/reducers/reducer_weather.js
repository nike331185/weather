import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action){
//Reducer 會先查看 action 的 type 是什麼並做出相對應的動作。
  switch(action.type){
  case FETCH_WEATHER:
    //state.push(action.payload.data);
    //return state.concat([action.payload.data]);
    return [action.payload.data,...state]; // 一樣地把物件內容抽取出來
}
  return state;
}
