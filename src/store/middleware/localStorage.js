const localStorage = (store) => (next) => (action) => {
    const response = next(action);
    // console.log(action);
    return response;
};

export default localStorage;