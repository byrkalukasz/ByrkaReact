import React from 'react';
import './ThirdBox.css';

function ThirdBox(){
    return (
        <li className="com-3-flex-item">
            <div className='com-3-parentDiv'>
            <span class="com-3-icon1">
            <i class="fa fa-money fa-2x com-3-iclass" aria-hidden="true"></i>
            </span>
            <span class="com-3-icon2">
            </span>
            </div>
            <div>
                <h5>Sprzedaż Prognozowana</h5>
                <h4>4,679PLN</h4>
                <span className='com-3-span'><i class="fa fa-arrow-up" aria-hidden="true"></i> +25,83%</span>
            </div>
        </li>  
       )
}

export default ThirdBox;