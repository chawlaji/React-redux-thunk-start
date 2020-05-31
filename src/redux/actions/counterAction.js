import { COUNTER_DICREMENT, COUNTER_INCREMENT,RESET_COUNTER } from '../../constants/constants';

export default (payload) => {
   return dispatch => {
        if (payload === 1) {
            dispatch(increment());
        } else if (payload === 2){
            dispatch(dicrement());
        }else {
            dispatch(reset());
        }
    }
};

export const increment = () => ({
    type: COUNTER_INCREMENT,
})

export const dicrement = () => ({
    type: COUNTER_DICREMENT
})

export const reset = () => ({
    type: RESET_COUNTER
})
//export const signupAction = (payload) => {
//return dispatch => {
    // apicall(payload)
    // .then(data => {
    //   dispatch(sigupSuccess(data));
    // })
    // .catch(err => {
    //   dispatch(sigupFail(err));
    // });
   // dispatch(sigupSuccess(payload));
//}
//}

// export const sigupSuccess = (payload) => {
//     return {type: SIGNUP_STATUS_SUCCESS,
//         payload: payload}
// }
