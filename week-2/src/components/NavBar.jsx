import styles from 'styled-components'
import React from 'react'
import img from '../images/spectator-logo.png'

const NavBar = () => {
    return(
        <nav>
          <img src={img} class="spec-logo" alt="Spec Logo"/>
          <h1>Spec's Sources</h1>
        </nav>
    );
};

export default NavBar;