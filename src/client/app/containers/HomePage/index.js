
import React, { memo, useState } from 'react';
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
import Img from '../../components/Img';
import logo from 'images/logo_iitj.jpg';

const HomeWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
    position: fixed;
    top: 32%;
    left: 50%;
    margin-top: -50px;
    margin-left: -150px;
`;

const LogoImg = styled(Img)`
  position: fixed;
  top: -55px;
  left: 0%;
  height: 200px;
  width: 250px;
`;


function buttonClickHandler(event, history, clintId, password) {
    event.preventDefault();
    if (Number(clintId) < 1 || Number(clintId) > 50) {
        alert("Invalid client id");
        return;
    }
    if (password == '123456') {
        history.push("/client?client-id=" + clintId);
    }
    else {
        alert("Wrong password");
    }

}

function HomePage(props) {
    const [clintId, setClientId] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <LogoImg src={logo} alt="Logo" />
            <HomeWrapper>
                <LoginWrapper>
                    <TextInput label="Client ID" onChange={(e) => setClientId(e.target.value)} />
                    <TextInput label="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={() => buttonClickHandler(event, props.history, clintId, password)}>Login</Button>
                </LoginWrapper>
            </HomeWrapper>
        </div>
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