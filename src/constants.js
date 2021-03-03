export const URL = process.env.API_URL;

/**
 * Defines the url for the API.
 *
 * @constant
 */

const API_ROOT_URL =
	'http://159.65.201.173/api';
const AUTH_URL = `${API_ROOT_URL}/auth/`;
const LOGIN_URL = `${API_ROOT_URL}/login/`;

const GET_NAME_URL = `${API_ROOT_URL}/guide/`;
/*
    Admin routes
*/
const LGA_URL = `${API_ROOT_URL}/lgas/`;
const ADMIN_URL = `${API_ROOT_URL}/admin/`;
const WARD_URL = `${API_ROOT_URL}/ward/`;
const POLLING_UNIT_URL = `${API_ROOT_URL}/pollingunits/`;

/*
    User routes
*/
const USER_URL = `${API_ROOT_URL}/user/`;

const GUIDE_URL = `${API_ROOT_URL}/guide/`;
const NEW_GUIDE_URL = `${API_ROOT_URL}/new_guide/`;
const EDIT_GUIDE_URL = `${API_ROOT_URL}/edit_guide/`;
const DELETE_GUIDE_URL = `${API_ROOT_URL}/delete_guide/`;

/*
    Location routes
*/
const LOCATION_URL = `${API_ROOT_URL}/location/`;
const NEW_LOCATION_URL = `${API_ROOT_URL}/location/`;
const EDIT_LOCATION_URL = `${API_ROOT_URL}/edit_location/`;
const DELETE_LOCATION_URL = `${API_ROOT_URL}/delete_location/`;
const TO_URL = `${API_ROOT_URL}/lgas/`;
const VEHICLE_URL = `${API_ROOT_URL}/lgas/`;

/*
   Image routes
*/
const IMAGE_URL = `${API_ROOT_URL}/image/`;
const DELETE_IMAGE_URL = `${API_ROOT_URL}/delete_image/`;

/*
   Miss routes
*/
const MISS_URL = `${API_ROOT_URL}/record_miss/`;
const DELETE_MISS_URL = `${API_ROOT_URL}/delete_miss/`;

const IMG_PATH_URL = 'http://159.65.201.173';
const ROOT_PATH_URL = 'http://obuntu.community';

/*
    Other routes
*/

export {
    AUTH_URL,
    LOGIN_URL,
    LOCATION_URL,
    USER_URL,
    WARD_URL,
    POLLING_UNIT_URL,
    GET_NAME_URL,
    GUIDE_URL,
    ADMIN_URL,
    LGA_URL,
    TO_URL,
    NEW_GUIDE_URL,
    EDIT_GUIDE_URL,
    DELETE_GUIDE_URL,
    NEW_LOCATION_URL,
    EDIT_LOCATION_URL,
    DELETE_LOCATION_URL,
    IMAGE_URL,
    DELETE_IMAGE_URL,
    VEHICLE_URL,
    IMG_PATH_URL,
    ROOT_PATH_URL,
    MISS_URL,
    DELETE_MISS_URL,
    
};
