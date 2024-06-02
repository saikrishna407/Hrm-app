const initialState={
    authToken:null
}
export default(state =initialState,action )=>{
    switch(action.type){
        case 'Login':
            return[
                ...state,
                // authToken:action.payload,
            ]
            default :
            return state ;

    }
}