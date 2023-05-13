import React from 'react';
import './SchemaBox.css';

function SchemaBox(){
    return (

        <li className="com-4-flex-item">
          <p className='com-4-firstField'>Wykres</p>
          <div className='com-4-divForText'>
          <img class="com-4-picClass2" src="wykres.png"></img>
          <select class="dropmenu" name="language" id="language">
  <option value="2021">2021</option>
  <option value="2020">2020</option>
  <option value="2022" disabled>2022</option>
</select>
          </div>
        </li>

       )
}

export default SchemaBox;