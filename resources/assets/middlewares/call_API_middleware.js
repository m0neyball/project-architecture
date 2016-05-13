function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {}
    } = action;

    if (!types) {
      // 普通的 action：把它傳遞下去
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 || !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected fetch to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return false;
    }

    const [requestType, successType, failureType] = types;

    dispatch(Object.assign({}, payload, {
      type: requestType
    }));

    return callAPI().then(
      response => {
        if (response.ok) {
          response.json().then((data) => {
            dispatch(Object.assign({}, payload, {
              response: data,
              type: successType
            }));
          });
        } else {
          response.json().then((data) => {
            dispatch(Object.assign({}, payload, {
              response: data,
              type: failureType
            }));
          });
        }
      },
      error => {
        console.log('call API middleware: ', error);
      }
    );
  };
}

export default callAPIMiddleware;
