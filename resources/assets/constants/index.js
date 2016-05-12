import keyMirrorNested from 'key-mirror-nested';

let constants = {
  TODO_LIST: {
    ADD_TODO: null
  }
};

constants = keyMirrorNested(constants);

export const TODO_LIST = constants.TODO_LIST;

export default constants;
