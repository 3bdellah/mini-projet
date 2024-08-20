import React from 'react';
import { useContext } from 'react';
import { inputContext } from './context/formInputContext';

function MyComponent({value, inputTitle, handelChange}) {

  const MyContext = useContext(inputContext)

  return (
    <>
    <label>{MyContext.Label} </label>
          <input
            type="text"
            value={MyContext.Value}
            onChange={(event) => {
              MyContext.handelChange(event.target.value);

            }}
          />
    </>
  )
}

export default MyComponent