
export const authReducer = (state, action) => {
	switch (action.type) {
		case 'SUCCESS_TOAST':
			return (
				{ ...state, toastData: { ...state.toastData, status: 'added', display: true, data: action.payload.toastMessage }, loggedIn: true, userName: action.payload.name, userId: action.payload.id }
			)
		case 'TEST_TOAST':
			return { ...state, toastData: { ...state.toastData, status: 'added', display: true, data: action.payload.toastMessage }, loggedIn: true, testLogin: true, userName: action.payload.name, userId: action.payload.id }


		case 'LOGOUT':
			return { ...state, toastData: { ...state.toastData, status: 'removed', display: true, data: action.payload.toastMessage }, loggedIn: false, userName: 'Profile', userId: action.payload.id }
		
        case 'ADD_TO_CART':
            console.log(action.payload.data)
            return {...state, toastData: {...state.toastData, status: 'added', display: true, data: action.payload.toastMessage}, cart: action.payload.data}
        
	    case "REMOVE_FROM_CART":
			console.log(action.payload.data)
			return {...state, toastData: {...state.toastData, status: 'removed', display: true, data: action.payload.toastMessage}, cart: action.payload.data}	
            default:
			return state;
	}
}