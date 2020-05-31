import { LOGIN_FAILURE,LOGIN_SUCCESS } from '../../constants/constants';
import { userService } from '../services/user.service';

export const userActions = {
    login,
    logout
};

function login(username, password, grant_type) {
    return dispatch => {

        userService.login(username, password, grant_type)
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

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    history.push('/login');
    return { type: userConstants.LOGOUT };
}