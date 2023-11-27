import { NavLink } from 'react-router-dom';
import './Navigation.css';

import {
	// FaAngleDown,
	// FaAngleRight,
	FaTrain,
	// FaBars,
	// FaTimes,
} from 'react-icons/fa';
import {
	MdOutlineFlight,
	MdOutlineMapsHomeWork,
	MdDirectionsBus,
	MdHiking,
} from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { AiOutlineCar } from 'react-icons/ai';
import { VscGraphLine } from 'react-icons/vsc';

const Navigation = () => {
	return (
		<section className="navigation-wrapper">
			<div className="navigation">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={''}>
					<MdOutlineFlight className="icon" />
					<span>Flights</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<RiHotelLine className="icon" />
					<span>Hotels</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<MdOutlineMapsHomeWork className="icon" />
					<span>Homestays</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<RiHotelLine className="icon" />
					<span>Holiday Packages</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<FaTrain className="icon" />
					<span>Trains</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<MdDirectionsBus className="icon" />
					<span>Buses</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/home'}>
					<AiOutlineCar className="icon" />
					<span>Cabs</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<VscGraphLine className="icon" />
					<span>Forex</span>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-link active' : 'nav-link'
					}
					to={'/'}>
					<MdHiking className="icon" />
					<span>Activities</span>
				</NavLink>
			</div>
		</section >
	);
};

export default Navigation;
