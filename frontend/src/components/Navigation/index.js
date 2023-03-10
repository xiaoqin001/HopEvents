import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import TypeNavigation from "../TypeNavigation";
import EventsList from "../EventsList";
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state=>state.session.user);
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <>

                    <NavLink exact to='/cart'>My Events</NavLink>
                    <NavLink exact to='/addevent'>Add Event</NavLink>
                    <ProfileButton user={sessionUser} />

            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
            </>
        );
    }
    return (

        <ul class='Navigation'>
            <li className="logo"><NavLink exact to='/home'>HopEvents</NavLink></li>
            <li className='nav'>
                <NavLink exact to='/home'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    )
}



export default Navigation;
