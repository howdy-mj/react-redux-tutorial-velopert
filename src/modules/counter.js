import { createAction, handleActions } from 'redux-actions';

// action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action creator function
// export const increase = ({ type: INCREASE })
// export const decrease = ({ type: DECREASE })

// 액션 객체를 넣을 필요 없이 선언 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initialState
const initialState = {
  number: 0,
};

// reducer
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
