import React from 'react';
import { useNavigate } from "react-router-dom";
import {faBed, faCalendar, faCar, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'

const Header = ({type}) => {

    const [destination, setDestination] = useState("");
    const [open, setOpen] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room: 1,
    })
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1: options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotels", {state: { destination, date, options}});

    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi rentals</span>
                    </div>
                </div>
                { type !== "list" &&
                <>
                <h1 className="hearderTitle">A lifetime of discounts, It's Genius..</h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unclock instant savings of 10% or 
                    more with a free DinoBooking account.
                </p>
                <button className="headerBtn">Sign in / register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input 
                            type="text" 
                            placeholder="Where are you going" 
                            className="headerInput" 
                            onChange = {(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                        <span onClick={() => setOpen(!open)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {open && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                        
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <=1} className="optionCounterButton" onClick={() =>handleOption("adult", "d")}>-</button>
                                    <button className="optionContainerNumber">{options.adult}</button>
                                    <button className="optionCounterButton" onClick={() =>handleOption("adult", "i")}>+</button>
                                </div>      
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <=0} className="optionCounterButton" onClick={() =>handleOption("children", "d")}>-</button>
                                    <button className="optionContainerNumber">{options.children}</button>
                                    <button className="optionCounterButton" onClick={() =>handleOption("children", "i")}>+</button>
                                </div>  
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <=1} className="optionCounterButton" onClick={() =>handleOption("room", "d")}>-</button>
                                    <button className="optionContainerNumber">{options.room}</button>
                                    <button className="optionCounterButton" onClick={() =>handleOption("room", "i")}>+</button>
                                </div>
                            </div>

                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <div className="headerBtn" onClick={handleSearch}>Search</div>
                    </div>
                </div></>}
            </div>
            
        </div>
    );
};

export default Header;