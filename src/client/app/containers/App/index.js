/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import HomePage from '../HomePage';
import GraphsPage from '../GraphsPage'


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
//   padding: 0 16px;
  flex-direction: column;
`;

function App({ triggerDispatch }) {
	// triggerDispatch();
	return (
		<AppWrapper>
			<Router>
				<Switch>
					<Route exact path="/"
						component={HomePage} />
					<Route
						path={"/client"}
                        component={GraphsPage}
                        location={location}
					/>
				</Switch>
			</Router>
		</AppWrapper>
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

const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga }); // `mode` is an optional argument, default value is `RESTART_ON_REMOUNT`

export default compose(
	withReducer,
	withSaga,
	withConnect,
	memo
)(App);