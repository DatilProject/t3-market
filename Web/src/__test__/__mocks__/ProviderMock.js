import React from "react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import generateStore from "../../redux/store";

const store = generateStore();
const history = createBrowserHistory();

const ProviderMock = (props) => {
	return (
		<Provider store={store}>
			<Router history={history}>{props.children}</Router>
		</Provider>
	);
};

export default ProviderMock;
