import React from "react";
import generateStore from "./redux/store";
import { Provider } from "react-redux";
import Routes from "./components/Routes";

function App() {
	const store = generateStore();

	return (
		<Provider store={store}>
			<Routes />
			{/* <h1>Inicia sesión en Dátil</h1> */}
		</Provider>
	);
}

export default App;
