
export const authReducer = (state, action) =>{
    switch (action.type) {
        case 'SUCCESS_TOAST':
            return (
                {...state, toastData: {...state.toastData, status: 'added', display: true, data: action.payload.toastMessage}, loggedIn: true, userName: action.payload.name, userId: action.payload.id }
                )
        case 'TEST_TOAST' :
            return {...state, toastData: {...state.toastData, status: 'added', display: true, data: action.payload.toastMessage}, testLogin: true, userName: action.payload.name, userId: action.payload.id}      
    
        default:
            break;
    }
}