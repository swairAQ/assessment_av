import {
    WEATHER_SUCCESS,
    WEATHER_FAILURE
} from '../../utilities/Constants';

const initialState = {
    error: null,
    data: [],
};

export default function WeatherReducer(state = initialState, action) {
    switch (action.type) {
        case WEATHER_SUCCESS:
            return {
                ...state,
                updated: true,
                error: null,
                data: action.data,
            };
        case WEATHER_FAILURE:
            return {
                ...state,
                updated: true,
                error: action.error,
                data: [],
            };

        default:
            return state;
    }
}
