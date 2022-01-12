import React from 'react';
import style from './Card.module.css'
import Grid from '@material-ui/core/Grid';

function Card({ src, title, description, price,bgcolor }) {
    return (
        <div className={style.card} style={{backgroundColor:`${bgcolor}`}}>
            <img src={src} alt="" />
            <div className={style.card__info}>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card