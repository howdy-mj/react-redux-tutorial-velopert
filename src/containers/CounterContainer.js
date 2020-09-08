import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 리덕스 스토어 안의 state를 컴포넌트의 props로 넘겨줌
const mapStateToProps = (state) => ({
  // counter.js안에 있는 number
  number: state.counter.number,
});

// 리덕스 스토어 안의 액션 생성 함수를 컴포넌트의 props로 넘겨줌
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

export default connect(mapStateToProps, { increase, decrease })(
  CounterContainer,
);
