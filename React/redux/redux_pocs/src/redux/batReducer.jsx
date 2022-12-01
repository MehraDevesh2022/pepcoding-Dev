let inititalState ={
    bat : 10,
    value : ""
}
function batReducer(  state  = inititalState , action) {
  switch(action.type){
    case "buy_bat" :
        return{
            bat : state.bat + Number(state.value),
            value : ""
        }
       
        case  "sell_bat" :
            if(state.bat -Number(state.value)<0){
                return{
                   ...state,
                    value : ""
                }
            }else{
                return{
                    bat : state.bat - Number(state.value),
                    value :""
                }
            }
         case "set_value":{
            return{
                  bat : state.bat,
                value : action.payload
            }
         }
         default :
            return state // when initial value render to the app. at the very start
                
        
}
}

export default batReducer // access to the rootReducer then store