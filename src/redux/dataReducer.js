import { SAVE_CREDENTIALS } from './constant';
const initialState = {
data: 0
};
const dataReducer = (state = initialState, action) => {
switch(action.type) {
case SAVE_CREDENTIALS:
return {
...state,
data:action.payload
};
default:
return state;
}
}
export default dataReducer;
