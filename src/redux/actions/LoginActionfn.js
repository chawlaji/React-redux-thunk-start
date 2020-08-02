import { LOGIN_FAILURE,LOGIN_SUCCESS } from '../../constants/constants';
import { authenticateServicel } from '../../Services/authenticateService';

export const userActions = {
    login,
    logout
};

login = (username, password) => {
    return dispatch => {
        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    
                    if(error.toString().includes('Network Error')) {
                        alert(error.toString())
                    } else {
                        alert('Please enter correct credentials');
                    }
                    
                    dispatch(alertActions.error('Please enter correct credentials'));
                }
            );
    };

     success =(user) => { return { type: userConstants.LOGIN_SUCCESS, user } }
     failure =(error) => { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/login');
    return { type: userConstants.LOGOUT };
}