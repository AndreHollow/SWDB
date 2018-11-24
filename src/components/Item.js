import React, { Component } from 'react';
import './Item.css';

function Item (props){
  return (
    <div id = 'modal-wrapper' className = 'modal-wrapper'>
      <div className="modal">
        <div className = 'modal-item-content'>
          <div
          className = "btn-close trigger" 
          onClick = {(e) => props.onClick(e)}></div>
          <ul className = 'info-list'>
          {
            props.chosenItem.map((i, index) => {
              if(i.includes('https://') || typeof i === 'object') return
              else if(props.itemProperties[index].includes('created')
                   || props.itemProperties[index] === 'edited') return
              else{
                return (
                  <li className = 'item-field'  key = {props.itemProperties[index] + i}>
                    {props.itemProperties[index] + ': '}<span className = 'item-data'>{i}</span>
                  </li>
                )
              }
            })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Item;