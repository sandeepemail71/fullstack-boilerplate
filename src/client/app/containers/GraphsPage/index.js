
import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GraphsContainer from '../GraphsContainer';


// import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import reducer from './reducer';
// import saga from './saga';


const GraphWrapper = styled.div`
    flex-direction: 'row';
`;


function GraphsPage(props) {
    console.log(props.location,"============location in Graph Page");
    return (
        <GraphWrapper>
            <GraphsContainer location={props.location} />
        </GraphWrapper>
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
)(GraphsPage);

