import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types"

export const registerUser = formData => async dispatch =>{
    try {
        const res = await axios.post('http://localhost:9005/api/auth/signup', newUser)
        // .then(res => console.log(JSON.stringify(res)))
        // .catch(err =>console.log(JSON.stringify(err)))
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data 
        })

    }catch(err){
        dispatch({
            type:REGISTER_FAIL
        })
    }
}