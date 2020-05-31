
import { COUNTER_DICREMENT, COUNTER_INCREMENT, RESET_COUNTER } from '../../constants/constants';

const initialState = {
    count: 0
}

export default (state = initialState, { type }) => {
    console.log(type);
    switch (type) {

        case COUNTER_INCREMENT:
            return { count: state.count + 1 }

        case COUNTER_DICREMENT:
            return { count: state.count - 1 }
        case RESET_COUNTER:
            return initialState
        default:
            return state
    }
}

