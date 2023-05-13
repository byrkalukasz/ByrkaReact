import React from 'react';
import './ForthBox.css';

function ForthBox(){
    return (
        <li className="com-5-flex-item">
            <div className='com-5-parentDiv'>
            <span class="com-5-icon1">
            <i class="fa fa-paypal fa-2x com-5-iclass" aria-hidden="true"></i>
            </span>
            <span class="com-5-icon2">
            </span>
            </div>
            <div>
                <h5>Podsumowanie</h5>
                <h4>2,41PLN</h4>
                <span className='com-5-span'><i class="fa fa-arrow-down" aria-hidden="true"></i> -21,37%</span>
            </div>
        </li>  
       )
}

export default ForthBox;