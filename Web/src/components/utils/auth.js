import Cookies from "universal-cookie";
const cookies = new Cookies();

export const isNotLogIn = () => {
	if (!cookies.get("token")) {
		window.location.href = "./";
	}
};

export const isLogIn = () => {
	return cookies.get("token");
};

export const getValueFromCookie = (key) => {
	const value = cookies.get(key);
	return value;
};

export const logOut = () => {
	cookies.remove("token", { path: "/" });
	cookies.remove("user", { path: "/" });
	window.location.href = "./";
};
