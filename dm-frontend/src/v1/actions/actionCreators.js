export const app ={
    LOGIN_REQUEST: 'REQUESTING_LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESSFUL',
    LOGIN_FAILED: 'LOGIN_FAILURE',

    LOGOUT_REQUEST: 'REQUESTING_LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESSFULL',
    LOGOUT_FAILED: 'LOGOUT_FAILURE',

    SESSION_FOUND: 'RECONNECTING_AUTH',
    SESSION_LOGGEDIN: 'SESSION_AUTHORIZED',
    SESSION_FAILED: 'AUTH_FAILED'
}

export const user = {
    SIGNUP_REQUEST: 'REQUESTING_REGISTRATION',
    SIGNUP_SUCCESS: 'REGISTERED',
    SIGNUP_FAILED: 'REGISTING_FAILURE',

    UPDATE_REQUEST: 'REQUESTING_UPDATE',
    UPDATE_SUCCESS: 'UPDATE_SUCCESSFUL',
    UPDATE_FAILED: 'UPDATE_FAILURE',

    DELETE_REQUEST: 'REQUESTING_ACCOUNT_DELETE',
    DELTE_SUCCESS: 'ACCOUNT_DELETE_SUCCESSFULL',
    DELETE_FAILED: 'ACCOUNT_DELETE_FAILURE'
}

export const alert= {
    GOOD: 'ALERT_NOTIFICATION',
    BAD: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
}

export const menuItem={
    INDEX_REQUEST: 'REQUESTING_ALL_ITEMS',
    INDEX_SUCCESS: 'ITEMS_INDEX_SUCCESSFUL',
    INDEX_FAILED: 'ITEMS_INDEX_FAILURE',
    
 
    CREATE_REQUEST: 'CREATE_ITEM_REQUESTED',
    CREATE_SUCCESS: 'ITEM_CREATED',
    CREATE_FAILED: 'ITEM_CREATION_FAILURE',
 
    UPDATE_REQUEST: 'REQUESTING_ITEM_UPDATE',
    UPDATE_SUCCESS: 'ITEM_UPDATED',
    UPDATE_FAILED: 'ITEM_UPDATE_FAILURE',
 
    DELETE_REQUEST: 'ITEM_DELETE_REQUEST',
    DELTE_SUCCESS: 'ITEM_DELETE_SUCCESSFUL',
    DELETE_FAILED: 'ITEM_DELETE_FAILURE'
} 

export const actionCreator = {
       app,
       alert,
       menuItem,
       user
}