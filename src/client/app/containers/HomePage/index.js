
import React, { memo } from 'react';
import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import reducer from './reducer';
// import saga from './saga';

import Button from '../../components/Button/index';
import StyledInput from '../../components/Input/index';

const HomeWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function HomePage() {
  return (
    <HomeWrapper>
        <StyledInput onChange = {() => console.log("test")} />
        <Button>Login</Button>
    </HomeWrapper>
  );
}

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

function mapDispatchToProps(dispatch) {
  return {
    triggerDispatch: () => dispatch({ type: 'FETCH_STATIONS' }),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'test', reducer });
// const withSaga = injectSaga({ key: 'test', saga }); // `mode` is an optional argument, default value is `RESTART_ON_REMOUNT`

export default compose(
//   withReducer,
//   withSaga,
  withConnect,
  memo
)(HomePage);