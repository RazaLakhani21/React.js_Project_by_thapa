import React from 'react'
import "./index.css"
import Images from './Images';

function Cards(props) {
  return (
    <>
    <div className="cards">

        <div className="card">

          <Images sendImg={props.imgsrc} />

          <div className="car__info">

            <span className="class__category">

              {props.title}

            </span>

            <h3 className="card__title"> {props.sname} </h3>

            <a href={props.links} target="_blank">

              <button> Watch Now </button>

            </a>

          </div>

        </div>

      </div>
      
      </>
  );
}

export default Cards;