const initialState = 0;
export const rootReducer = (state: number = initialState, action: {type: string, payload: number}) => {
	if(action.type) {
		return action.payload;
	}
	return state;
};
