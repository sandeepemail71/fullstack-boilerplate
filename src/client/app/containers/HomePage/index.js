
import React, { memo } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import reducer from './reducer';
// import saga from './saga';

import Button from '../../components/Button/index';
import TextInput from '../../components/Input/index';
import H1 from '../../components/H6';

const HomeWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
    margin: 4em 0;
`;

function buttonClickHandler(event, history) {
    event.preventDefault();
    history.push("/client?client-id=1");

}

function HomePage(props) {
    return (
        <HomeWrapper>
            <LoginWrapper>
                <TextInput label="Client ID" onChange={() => console.log("test")} />
                <TextInput label="Password" onChange={() => console.log("test")} />
                <Button onClick={() => buttonClickHandler(event, props.history)}>Login</Button>
            </LoginWrapper>
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