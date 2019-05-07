const initState = {
    authERROR: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN_ERROR":
            console.log("Login Error");
            return{
                ...state,
                authError: "Login Failed"
            };
        case "LOGIN_SUCCESS":
            console.log("Login Success");
            return{
                ...state,
                authError: null
            };
        case "LOGOUT_SUCCESS":
            console.log("Logout Success");
            return state;
        case "SIGNUP_ERROR":
            console.log("Signup Failed");
            return{
                ...state,
                authError: action.err.message
            };
        case "SIGNUP_SUCCESS":
            console.log("Signup Success");
            return state;return{
                ...state,
                authError: null
            };
        default:
            return state;
    }
};

export default authReducer;