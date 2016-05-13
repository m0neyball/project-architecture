import keyMirrorNested from 'key-mirror-nested';

let constants = {
  TODO_LIST: {
    LOAD_TODOS_REQUEST: null,
    LOAD_TODOS_SUCCESS: null,
    LOAD_TODOS_FAILURE: null,
    ADD_TODO: null
  }
};

constants = keyMirrorNested(constants);

export const TODO_LIST = constants.TODO_LIST;

export default constants;
