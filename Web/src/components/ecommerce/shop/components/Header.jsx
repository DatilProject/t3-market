import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconDoorOpeneddFill } from "bootstrap-icons/icons/door-open-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.webp";
import { getProductsCartAction } from "../../../../redux/ducks/cartDuck";
import { logOutClient, isClientLogIn } from "../../../utils/auth";

const Header = () => {
	const dispatch = useDispatch();
	const isLogin = isClientLogIn();

	useEffect(() => {
		dispatch(getProductsCartAction());
	}, [dispatch, isLogin]);

	const listProductsCart = useSelector((store) => store.cart.array);

	const handleLogOut = () => {
		logOutClient();
	};

	return (
		<React.Fragment>
			<header className="p-3 border-bottom bg-light">
				<div className="container-fluid">
					<div className="row g-3">
						<div className="col-md-3 text-center">
							<Link to="/">
								<img
									alt="logo"
									src="https://massets.appsflyer.com/wp-content/uploads/sites/7/2019/08/01114152/logos_shopping_shoee.png"
									width="60em"
								/>
							</Link>
						</div>

						<div className="col-md-5">
							{/*
					
							<Search />
						*/}
						</div>
						<div className="col-md-4">
							<div className="position-relative d-inline mr-3">
								<Link to="/cart" className="btn btn-primary" id="cart-btn">
									<IconCart3 className="i-va" />
									<div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle cart-btn">
										{listProductsCart[0] ? listProductsCart[0].items.length : 0}
									</div>
								</Link>
							</div>
							<div className="btn-group">
								<button
									type="button"
									className="btn btn-secondary rounded-circle border mr-3 dropdown-toggle1"
									data-toggle="dropdown"
									aria-expanded="false"
									aria-label="Profile"
								>
									<FontAwesomeIcon icon={faUser} className="text-light" />
								</button>
								<ul className="dropdown-menu">
									{/* <li>
										<Link className="dropdown-item" to="/account/profile">
											<IconPersonBadgeFill /> My Profile
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/star/zone">
											<IconStarFill className="text-warning" /> Star Zone
										</Link>
									</li> 
									<li>
										<Link className="dropdown-item" to="/account/orders">
											<IconListCheck className="text-primary" /> Orders
										</Link>
									</li>
									 <li>
										<Link className="dropdown-item" to="/account/wishlist">
											<IconHeartFill className="text-danger" /> Wishlist
										</Link>
									</li> 
									<li>
										<hr className="dropdown-divider" />
									</li>
									 <li>
										<Link className="dropdown-item" to="/account/notification">
											<IconBellFill className="text-primary" /> Notification
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/support">
											<IconInfoCircleFill className="text-success" /> Support
										</Link>
									</li> 
									<li>
										<hr className="dropdown-divider" />
									</li>*/}

									<li>
										{isLogin ? (
											<Link
												className="dropdown-item"
												onClick={handleLogOut}
												to="/"
											>
												<IconDoorClosedFill className="text-danger" />
												Logout
											</Link>
										) : (
											<Link className="dropdown-item" to="/account/signin">
												<IconDoorOpeneddFill className="text-success" />
												LogIn
											</Link>
										)}
									</li>
								</ul>
							</div>
							{/* <a
								href="https://www.buymeacoffee.com/bhaumik"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
									alt="BuyMeACoffee"
									width="120"
								/>
							</a> */}
							{/* <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link> */}
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};
export default Header;
