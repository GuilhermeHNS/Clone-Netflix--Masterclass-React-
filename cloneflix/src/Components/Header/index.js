import React from 'react';
import './Header.css'
export default ({black})=>{
    return(
        <header className={black? 'black':''}>
            <div className="header--logo">
                <a href="/">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-1567-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcjFERaLvxu5bZL6StXIrj6Y7TIibsGM0OemXtNPKjvgsgUoMLdcz31tNUpvBtqob7O9AaD4pbBUFj9el6qGfMph7g.png?r=9e5" alt="Usuário"></img>
                </a>
            </div>
        </header>
    );
}