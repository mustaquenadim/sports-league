import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
import maleImg from '../../assets/male.png';
import femaleImg from '../../assets/female.png';
import twitterLogo from '../../assets/Twitter.png';
import facebookLogo from '../../assets/Facebook.png';
import youTubeLogo from '../../assets/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';

const LeagueDetails = () => {
    const {leagueID} = useParams();

    const [league, setLeague] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueID}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setLeague(data.leagues[0]));
    });

    const {
        strLogo,
        strLeague,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strDescriptionEN,
        strTwitter,
        strFacebook,
        strYoutube
    } = league;
    // style="max-width: 540px;"
    return (
        <div className='custom-bg'>
            <div className="custom-banner">
                <div className="text-center">
                    <img className="my-5 custom-logo" src={strLogo} alt="League Logo"/>
                </div>
            </div>
            <div className="container">
                <div className="card mb-3 bg-primary my-3">
                    <div className="row no-gutters p-1">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title text-white font-weight-bold">{strLeague}</h4>
                                <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={faMapMarkerAlt}/>  Founded: {intFormedYear}</p>
                                <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={faFlag}/>  Country: {strCountry}</p>
                                <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={faFutbol}/>  Sport Type: {strSport}</p>
                                <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={faVenusMars}/>  Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {
                                strGender === 'Male' ? (
                                    <img className="conditional-image" src={maleImg} alt='Male Image'/>
                                ) : (
                                    <img className="conditional-image" src={femaleImg} alt='Female Image'/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <p className="card-text text-white">{strDescriptionEN}</p>
                    <div className="text-center">
                        <Link to={strTwitter}><img className="custom-icon" src={twitterLogo} alt="Twitter"/></Link>
                        <Link to={strFacebook}><img className="custom-icon" src={facebookLogo} alt="Facebook"/></Link>
                        <Link to={strYoutube}><img className="custom-icon" src={youTubeLogo} alt="YouTube"/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;