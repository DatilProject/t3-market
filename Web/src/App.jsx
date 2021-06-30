import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";
import Routes from "./components/Routes";

function App() {
	const store = generateStore();

	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
