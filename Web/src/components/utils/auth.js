import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setCokies = (user) => {
	cookies.set("token", user.token, { path: "/" });
	cookies.set("user", user.user, { path: "/" });
};

export const isLogIn = () => {
	return cookies.get("token");
};

export const getValueFromCookie = (key) => {
	const value = cookies.get("user")[key];
	return value;
};

export const logOut = () => {
	cookies.remove("token", { path: "/" });
	cookies.remove("user", { path: "/" });
	window.location.href = "./";
};
