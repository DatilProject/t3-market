import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faFacebookF,
	faInstagram,
	faYoutube,
	faApple,
	faWindows,
	faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import AmericanExpress from "../images/payment/american_express.webp";
import Maestro from "../images/payment/maestro.webp";
import NetBanking from "../images/payment/netbanking.webp";
import Paypal from "../images/payment/paypal.webp";
import Rupay from "../images/payment/rupay.webp";
import UPI from "../images/payment/upi.webp";
import Visa from "../images/payment/visa.webp";

const Footer = () => {
	return (
		<React.Fragment>
			<footer>
				{/*
				<div className="container-fluid bg-primary">
					
					<div className="row ">
					
						<div className="col-md-9 py-3 text-white">
							Get connected with us on social networks!
						</div>
						<div className="col-md-3 py-3 text-center text-white">
							<Link to="/" title="Apple">
								<FontAwesomeIcon icon={faApple} className="text-light mr-3" />
							</Link>
							<Link to="/" title="Windows">
								<FontAwesomeIcon icon={faWindows} className="text-light mr-3" />
							</Link>
							<Link to="/" title="Android">
								<FontAwesomeIcon icon={faAndroid} className="text-light mr-3" />
							</Link>
							|
							<Link to="/" title="Twitter">
								<FontAwesomeIcon
									icon={faTwitter}
									className="text-light ml-3 mr-3"
								/>
							</Link>
							<Link to="/" title="Facebook">
								<FontAwesomeIcon icon={faFacebookF} className="text-light mr-3" />
							</Link>
							<Link to="/" title="Instagram">
								<FontAwesomeIcon icon={faInstagram} className="text-light mr-3" />
							</Link>
							<Link to="/" title="Youtube">
								<FontAwesomeIcon icon={faYoutube} className="text-light mr-3" />
							</Link>
						</div>
					</div>
				</div>
				*/}
				<div className="container-fluid bg-dark text-white">
					<div className="text-center col-md-3 py-2">?? 2021 E-Commerce</div>

					{/*
					<div className="row ">
						<div className="col-md-3 py-3">
							<div className="h6">Company Name</div>
							<hr />
							<p>
							</p>
						</div>
						<div className="col-md-3 py-3">
							<div className="h6">Products</div>
							<hr />
							<ul className="list-group list-group-flush">
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Electronics
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Mobiles
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Car & bike
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Super Market
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Travel Cards
									</Link>
								</li>
							</ul>
						</div>
					   <div className="col-md-3 py-3">
							<div className="h6">Policy</div>
							<hr />
							<ul className="list-group list-group-flush">
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Return Policy
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Terms Of Use
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Security
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										Privacy
									</Link>
								</li>
								<li className="list-group-item bg-dark text-white border-light">
									<Link
										to="/"
										className="text-decoration-none text-white stretched-link"
									>
										EPR Compliance
									</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-3 py-3">
							<div className="h6">Address</div>
							<hr />
							<address>
								<strong>Twitter, Inc.</strong>
								<br />
								1355 Market St, Suite 900
								<br />
								San Francisco, CA 94103
								<br />
								<abbr title="Phone">P:</abbr> (123) 456-7890
							</address>
							<div className="h6">Customer Care</div>
							<hr />
							<IconTelephone /> +1800 100 1000
							<br />
							<IconEnvelope /> info@email.com
						</div>
					</div>*/}
				</div>
				{/*
				<div className="container-fluid bg-secondary text-white text-center">
					
					<div className="row">
						<div className="col-md-2 py-2">
							<Link to="/" className="text-white text-decoration-none">
								<IconBriefcase className="text-warning" /> Partner with us
							</Link>
						</div>
						<div className="col-md-2 py-2">
							<Link to="/" className="text-white text-decoration-none">
								<IconBadgeAd className="text-info" /> Advertise
							</Link>
						</div>
						<div className="col-md-2 py-2">
							<Link to="/" className="text-white text-decoration-none">
								<IconGift className="text-dark" /> Gift
							</Link>
						</div>
						<div className="col-md-3 py-2">
							?? 2009-{new Date().getFullYear()} React-E-Commerce.com
						</div>
						<div className="col-md-3 py-2 bg-white">
							<img
								src={AmericanExpress}
								width="32"
								alt="American Express"
								className="mr-2"
							/>
							<img src={Maestro} width="32" alt="Maestro" className="mr-2" />
							<img src={NetBanking} width="32" alt="Net Banking" className="mr-2" />
							<img src={Paypal} width="32" alt="Paypal" className="mr-2" />
							<img src={Rupay} width="32" alt="Rupay" className="mr-2" />
							<img src={UPI} width="32" alt="UPI" className="mr-2" />
							<img src={Visa} width="32" alt="Visa" className="mr-2" />
						</div>
					</div>
					
				</div>
				*/}
			</footer>
		</React.Fragment>
	);
};
export default Footer;
