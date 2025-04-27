import React from 'react';

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
  "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Other"
];

interface StateDropdownProps {
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StateDropdown: React.FC<StateDropdownProps> = ({ name, value, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-amber-700 p-2 rounded text-amber-200 bg-stone-700"
    >
      <option value="" className="text-amber-500">
        Select your state
      </option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
