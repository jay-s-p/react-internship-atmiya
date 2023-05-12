import React, { useState } from 'react';

function Temp() {
  const [map, setMap] = useState(new Map());

  function addValue(key, value) {
    const newMap = new Map(map);
    newMap.set(key, value);
    setMap(newMap);
  }

  function deleteValue(key) {
    const newMap = new Map(map);
    newMap.delete(key);
    setMap(newMap);
  }

  function updateValue(key, value) {
    const newMap = new Map(map);
    newMap.set(key, value);
    setMap(newMap);
  }

  return (
    <div>
      <button onClick={() => addValue('key1', 'value1')}>Add value 1</button>
      <button onClick={() => addValue('key2', 'value2')}>Add value 2</button>
      <button onClick={() => deleteValue('key1')}>Delete value 1</button>
      <button onClick={() => updateValue('key2', 'new value')}>Update value 2</button>
      <ul>
        {[...map.keys()].map((key) => (
          <li key={key}>
            {key}: {map.get(key)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Temp