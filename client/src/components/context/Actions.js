export const LoginStart=(userCredentials)=>({
    type:"LOGIN_START",
})

export const LoginSucess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
})

export const LoginFailure=()=>({
    type:"LOGIN_FAILURE"
})


export const Logout=()=>({
    type:"LOGOUT",
})

/******************************** */


export const UpdateStart=(userCredentials)=>({
    type:"UPDATE_START",
})

export const UpdateSucess=(user)=>({
    type:"UPDATE_SUCCESS",
    payload:user,
})

export const UpdateFailure=()=>({
    type:"UPDATE_FAILURE"
})
