import React, { useState } from 'react';

const MyComponent = () => {
  const [arrayOfObjects, setArrayOfObjects] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' },
  ]);

  const editName = () => {
    const updatedArray = [...arrayOfObjects];
    const objectToUpdate = updatedArray.find(obj => obj.id === 2);
    if (objectToUpdate) {
      objectToUpdate.name = 'Updated Name';
      setArrayOfObjects(updatedArray);
    }
  };

  return (
    <div>
      {arrayOfObjects.map(obj => (
        <p key={obj.id}>Name: {obj.name}</p>
      ))}
      <button onClick={editName}>Edit Name</button>
    </div>
  );
};

export default MyComponent;