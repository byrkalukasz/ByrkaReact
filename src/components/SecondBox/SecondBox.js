import React from 'react';
import './SecondBox.css';

function SecondBox(){
    return (
        <li className="com-2-flex-item">
            <div className='parentDiv'>
            <span class="icon1">
            <i class="fa fa-clock-o fa-2x com-2-iclass" aria-hidden="true"></i>
            </span>
            <span class="icon2">
            </span>
            </div>
            <div>
                <h5>Zysk Planowany</h5>
                <h4>12,628PLN</h4>
                <span className='com-2-span'><i class="fa fa-arrow-up" aria-hidden="true"></i> +72,31%</span>
            </div>
        </li>  
       )
}

export default SecondBox;