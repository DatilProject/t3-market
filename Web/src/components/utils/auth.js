import Cookies from "universal-cookie";
const cookies = new Cookies();

// COMMERCE
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

// CLIENT
export const setCokiesClient = (client) => {
	cookies.set("tokenClient", client.token, { path: "/" });
	cookies.set("client", client.user, { path: "/" });
};

export const isClientLogIn = () => {
	return cookies.get("tokenClient");
};

export const getValueFromCookieClient = (key) => {
	if (isClientLogIn()) {
		const value = cookies.get("client")[key];
		return value;
	}
};

export const logOutClient = () => {
	cookies.remove("tokenClient", { path: "/" });
	cookies.remove("client", { path: "/" });
	window.location.href = "./";
};
