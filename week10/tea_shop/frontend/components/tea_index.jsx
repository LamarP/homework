import React from 'react';
import TeaForm from './tea_form';
const TeaIndex = (props) => {
  return (
    <div>
      <h1>All Teas</h1>
      <ul>
        {
          props.teas.map(tea => <li key ={tea.id}>Flavor: {tea.flavor}</li>)
        }
      </ul>
        <TeaForm receiveTea={props.receiveTea}/>
    </div>
  )
}

export default TeaIndex;