import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import './FlightInputBox2.css';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiChevronDown } from 'react-icons/bi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import date from 'date-and-time';

import Modal from 'react-modal';


const coworks = [
	"cowork1",
	"cowork2",
	"cowork3",
	"cowork4",
	"cowork5",
	"cowork6",
	"cowork7",
	"cowork8",
	"cowork9",
	"cowork10",
	"cowork1",
	"cowork2",
	"cowork3",
	"cowork4",
	"cowork5",
	"cowork6",
	"cowork7",
	"cowork8",
	"cowork9",
	"cowork10",

]

const FlightInputBox2 = ({ flights, setFilteredFlight }) => {

	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectedCowork, setSelectedCowork] = useState(coworks[0] ? coworks[0] : '');

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}


	const [type, setType] = useState('single');
	const [fareType, setFareType] = useState('regular-fare');
	const cities = [
		"Delhi",
		"Mumbai",
		"Bangalore",
		"Bangalore",
		"Chennai",
		"Kolkata",

	]


	const [citiesVisible, setCityVisble] = useState(false);
	const initialSate = {
		from: 'Delhi',
		to: 'Mumbai',
		departure: '2023-02-14',
		return: '2023-02-15',
	};
	const [state, setState] = useState(initialSate);

	const changeHandler = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});


	};

	const citychangeHandler = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});

		setCityVisble(false)
		setIsOpen(true)
	};

	const reverseInput = () => {
		const tempState = { ...state };
		setState({
			...state,
			from: tempState.to,
			to: tempState.from,
		});
	};

	const searchHandler = () => {

		setFilteredFlight(
			flights.filter(
				flight =>
					flight.from === state.from &&
					flight.to === state.to &&
					flight.departure.departureDate === state.departure
			)
		);
	};

	return (
		<section className="input-box-wrapper-flights">
			<div className="input-box2">
				<Navigation />
				{/* modal */}
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
					className="modal"

				>


					<div className='cowork_header'>Select Coworks</div>
					<div className='cowork_container'>
						{
							coworks.map((cowork, index) => {
								return (
									<div className='cowork' key={index}
										style={{
											backgroundColor: cowork === selectedCowork ? '#45b2ff' : '#fff',
										}}
										onClick={() => {
											setSelectedCowork(cowork)
											closeModal()

										}}>
										{cowork}
									</div>
								)
							})
						}
					</div>



					<button onClick={closeModal} className='close_button'>close</button>
				</Modal>
				<div className="input-wrapper">
					<div className="input">
						<div className="top-sec">
							<div className={type === 'single' ? 'checked' : ''}>
								<input
									type="radio"
									name="type"
									id="single"
									checked={type === 'single'}
									onChange={e => {
										setType('single');
									}}
								/>{' '}
								<label htmlFor="single">Single</label>
							</div>
							<div
								className={
									type === 'multiple' ? 'checked' : ''
								}>
								<input
									type="radio"
									name="type"
									id="multiple"
									checked={type === 'multiple'}
									onChange={e => {
										setType('multiple');
									}}
								/>
								<label htmlFor="multiple">Multiple</label>
							</div>

						</div>



						<div className="bottom-sec">
							<div className="from">
								<label htmlFor="from">From</label>

								<input type="text" name="" id="" className='search_city' value={state.from} onClick={() => {
									setCityVisble(!citiesVisible)
								}} />
								{/* <input type="text"  className='search_city' /> */}
								{
									citiesVisible && (
										<select className='city_dropDown'
											name="from"
											value={state.from}
											onChange={citychangeHandler}

										>
											{cities.map((city, index) => (
												<option key={index} value={city}>
													{city}
												</option>
											))}
										</select>
									)
								}
								<span>{state.from} Airport, India</span>
							</div>
							<TbArrowsExchange
								className="arrows"
								onClick={reverseInput}
							/>
							<div className="to">
								<label htmlFor="to">To</label>
								<input
									type="text"
									id="to"
									placeholder="To"
									autoComplete="off"
									name="to"
									value={selectedCowork}
									onChange={changeHandler}
									onClick={openModal}
								/>
								<span>{selectedCowork} Airport, India</span>
							</div>
							<div>
								<label htmlFor="departure">
									<span>Departure</span>{' '}
									<BiChevronDown className="icon" />{' '}
								</label>
								<div className="date">
									<div>
										<span>
											{date.format(
												new Date(state.departure),
												`D `
											)}
										</span>
										<p>
											{date.format(
												new Date(state.departure),
												`MMM'YY`
											)}
										</p>
									</div>
									<div>
										{date.format(
											new Date(state.departure),
											`dddd`
										)}
									</div>
								</div>
								<input
									className={'date-input'}
									type="date"
									id="departure"
									autoComplete="off"
									name="departure"
									value={state.departure}
									onChange={changeHandler}
								/>
							</div>
							<div>
								<label htmlFor="return">
									<span>Return</span>{' '}
									<BiChevronDown className="icon" />
								</label>
								{type !== 'single' ? (
									<div className="date">
										<div>
											<span>
												{date.format(
													new Date(state.return),
													`D `
												)}
											</span>
											<p>
												{date.format(
													new Date(state.return),
													`MMM'YY`
												)}
											</p>
										</div>
										<div>
											{date.format(
												new Date(state.return),
												`dddd`
											)}
										</div>
									</div>
								) : (
									<div
										onClick={() => setType('multiple')}
										className="disabled-text">
										Tap to add a return date for bigger
										discounts
									</div>
								)}
								<input
									className="date-input"
									type="date"
									id="return"
									autoComplete="off"
									name="return"
									value={state.return}
									onChange={changeHandler}
									disabled={type === 'single'}
								/>
							</div>

							<div>
								<label htmlFor="travellers">
									<span>Travellers</span>{' '}
									<BiChevronDown className="icon" />
								</label>
								<input
									type="number"
									id="travellers"
									placeholder="Travellers"
									autoComplete="off"
									name="travellers"
									value={state.travellers}
									onChange={changeHandler}
								/>

								<span>1 Adult, 0 Child, 0 Infant</span>

							</div>
						</div>
						<div className="btm">
							<div className="sec">
								<span className="text-fare-type">
									Select A Fare Type:
								</span>
								<div
									className={
										fareType === 'regular-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="regular-fare"
										checked={fareType === 'regular-fare'}
										onChange={e => {
											setFareType('regular-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="regular-fare">
										Regular Fares
									</label>
								</div>
								<div
									className={
										fareType === 'armed-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="armed-fare"
										checked={fareType === 'armed-fare'}
										onChange={e => {
											setFareType('armed-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="armed-fare">
										Armed Forces Fares
									</label>
								</div>
								<div
									className={
										fareType === 'student-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="student-fare"
										checked={fareType === 'student-fare'}
										onChange={e => {
											setFareType('student-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="student-fare">
										Student Fares
									</label>
								</div>
								<div
									className={
										fareType === 'senior-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="senior-fare"
										checked={fareType === 'senior-fare'}
										onChange={e => {
											setFareType('senior-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="senior-fare">
										Senior Citizen Fares
									</label>
								</div>
								<div
									className={
										fareType === 'doctor-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="doctor-fare"
										checked={fareType === 'doctor-fare'}
										onChange={e => {
											setFareType('doctor-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="doctor-fare">
										Doctors & Nurses Fares
									</label>
								</div>
								<div
									className={
										fareType === 'double-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="double-fare"
										checked={fareType === 'double-fare'}
										onChange={e => {
											setFareType('double-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="double-fare">
										Double Seat Fares
									</label>
								</div>
							</div>
							<div className="tranding">
								<span>Trending Searches:</span>
								<div>
									<span>Banglore</span>{' '}
									<HiArrowNarrowRight className="icon" />
									<span>Patna</span>
								</div>
								<div>
									<span>Mumbai</span>
									<HiArrowNarrowRight className="icon" />
									<span>Delhi</span>
								</div>
							</div>
						</div>
					</div>
					<button onClick={openModal} className="submit-btn">
						Search
					</button>

				</div>
			</div>
		</section>
	);
};

export default FlightInputBox2;
