import React from "react";
import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
const Support = (props) => {
	return (
		<div className={`row g-3 ${props.className}`}>
			<div className="col-md-4">
				<div className="card bg-primary">
					<div className="card-body text-white p-3">
						<span className="p-2 bg-light rounded-circle mr-3 text-dark">
							<IconCash className="display-6 mb-1" height="2rem" width="2rem" />
						</span>
						Reasonable prices
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="card bg-danger">
					<div className="card-body text-white p-3">
						<span className="p-2 bg-light rounded-circle mr-3 text-dark">
							<IconHeadset className="display-6 mb-1" height="2rem" width="2rem" />
						</span>
						Customer support 24/7
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="card bg-success">
					<div className="card-body text-white p-3">
						<span className="p-2 bg-light rounded-circle mr-3 text-dark">
							<IconTruck className="display-6 mb-1" height="2rem" width="2rem" />
						</span>
						Quick delivery
					</div>
				</div>
			</div>
		</div>
	);
};
export default Support;
