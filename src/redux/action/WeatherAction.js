import {
    WEATHER_SUCCESS,
    WEATHER_FAILURE
} from '../../utilities/Constants';
import axios from 'axios';
import { WEATHER_URL } from '../../utilities/Endpoints';

export const WeatherAPI = () =>
    async dispatch => {
        try {
            var endPoint = WEATHER_URL;

            const bResponse = await axios.get(endPoint);

            if (bResponse.status == 200) {
                dispatch(ApiSuccess(bResponse.data));
                return true;
            }
            else if (bResponse.status == 400) {
                dispatch(ApiFailure('Bad Request'));
                return false;
            }

            else if (bResponse.status == 404) {
                dispatch(ApiFailure('Not Found'));
                return false;
            }

            else if (bResponse.status == 500) {
                dispatch(ApiFailure('Server Error'));
                return false;
            }
            else
                dispatch(ApiFailure(bResponse.error));
        } catch (error) {

            dispatch(ApiFailure(error.message));
        }
        return false;
    };


const ApiSuccess = data => ({
    type: WEATHER_SUCCESS,
    data: data,
});

const ApiFailure = error => ({
    type: WEATHER_FAILURE,
    error: error,
});
