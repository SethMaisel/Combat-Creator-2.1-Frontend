import React from "react";

const Header = () => {
  return (
    <header className="header" >
      <h1 className="fight-page-heading">Combat Creator</h1>


      <audio

        className='audio'
        crossOrigin src='http://cs.slimi.lt/cstrike/sound/yellow/deploy1.wav'
        controls autoPlay
        style={{ display: "none" }}
      />
    </header>
  )
};

export default Header