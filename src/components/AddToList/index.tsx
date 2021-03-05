/// <references path="../../interfaces.d.ts" />

import React, { useState } from 'react';

interface Props {
  onSave: (todo: ITodo) => void,
};

const AddToList : React.FC<Props> = function({ onSave }) {
  const [ message, setMessage ] = useState<string>("");

  const saveTodo = () => {
    onSave({
      message, completed: false
    });
  };

  return (
    <>
      <input type="text" size={30} placeholder="Type here" onChange={(evt) => setMessage(evt.target.value)}/>
      <button onClick={saveTodo}>Add to list</button>
    </>
  );
};

export default AddToList;
