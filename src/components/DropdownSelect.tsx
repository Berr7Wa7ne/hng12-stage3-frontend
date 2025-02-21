interface OptionType {
    value: string;
    label: string;
  }
  
  interface DropdownSelectProps {
    options: OptionType[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options, onChange }) => {
    return (
      <select className="p-2 border rounded-lg" onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default DropdownSelect;
  