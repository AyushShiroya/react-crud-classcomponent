

const instate = {
    data: [],
    editData: {}
}

const theuserDetails = (state = instate, Action) => {
   console.log('action.payload', Action.payload)
    switch (Action.type) {
        case "USER_DETAILS": 
            return { ...state, data: [...Action.payload] };
        case "USER_DELETE":
            return { ...state, data: state.data.filter((item, index) => index !== Action.payload) }
        case "USER_EDIT":
            const findData = state.data.find((ele, i) => i === Action.payload);
            console.log("finddata<<<<<<<<<<<<<<<<<<<<<<", findData);
            return { ...state, editData: findData !== undefined ? findData : {} };
        default:
            return state
    }
};

export default theuserDetails