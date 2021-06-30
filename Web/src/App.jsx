import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";
import Body from "./components/Body";

function App() {
	const store = generateStore();

	return (
		<Provider store={store}>
			<Body />
		</Provider>
	);
}

export default App;
