const app ={
    ROUTE_SET: 'ROUTE_SET',
    ROUTE_CLEAR: 'ROUTE_CLEAR',
    ROUTE_REGUEST: 'ROUTE_REQUEST',
    ROUTE_FAILURE: 'ROUTE_FAILURE',
    SESSION_REQUEST: 'SESSION_REQUEST',
    SESSION_FAILURE: 'SESSION_FAILURE',
    SESSION_START: 'SESSION_LOGGED',
    SESSION_END: 'SESSION_LOGOUT'
}
const menu={
    INDEX_REQUEST: 'INDEX_REQUEST',
    INDEX_SUCCESS: 'INDEX_SUCCESS',
    INDEX_FAILURE: 'INDEX_FAILURE',
 
    CREATE_REQUEST: 'ITEM_CREATE_REQUEST',
    CREATE_SUCCESS: 'ITEM_CREATE_SUCCESS',
    CREATE_FAILURE: 'ITEM_CREATE_FAILURE',
 
    UPDATE_REQUEST: 'ITEM_UPDATE_REQUEST',
    UPDATE_SUCCESS: 'ITEM_UPDATE_SUCCESS',
    UPDATE_FAILURE: 'ITEM_UPDATE_FAILURE',
 
    DELETE_REQUEST: 'ITEM_DELETE_REQUEST',
    DELTE_SUCCESS: 'ITEM_DELETE_SUCCESS',
    DELETE_FAILURE: 'ITEM_DELETE_FAILURE'
} 
const user = {
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILURE: 'REGISTER_FAILURE'
}

export const actionCreator = {
       app,
       menu,
       user
}