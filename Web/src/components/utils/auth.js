import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setCokiesCommerce = (user) => {
	cookies.set("token", user.token, { path: "/" });
	cookies.set("user", user.user, { path: "/" });
};

export const isCommerceLogIn = () => {
	return cookies.get("token");
};

export const getValueFromCookieCommerce = (key) => {
	if (isCommerceLogIn()) {
		const value = cookies.get("user")[key];
		return value;
	}
};

export const logOutCommerce = () => {
	cookies.remove("token", { path: "/" });
	cookies.remove("user", { path: "/" });
	window.location.href = "./";
};
