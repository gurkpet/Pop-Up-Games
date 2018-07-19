import React from 'react';
import FieldListEntry from './FieldListEntry.jsx';

var FieldList = (props) => (
    <div>
      <ul>
      {
        props.fields.map((field, index) => {
         return ( <FieldListEntry /> )
        })
      }
      </ul>
    </div>
  )


export default FieldList;