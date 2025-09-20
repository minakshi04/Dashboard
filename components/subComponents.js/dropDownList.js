import React, { useState } from 'react';

function DropdownList() {
  const [selectedValue, setSelectedValue] = useState('6');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
   <div>
          <select id="dropbtn" className ="dropbtn" value={selectedValue} onChange={handleChange}>
              <option value="1">1 month</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
          </select>
          {/* <p>Selected: {selectedValue}</p> */}
      </div>
  );
}

export default DropdownList;