interface ActionButtonProps {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, disabled }) => {
    return (
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };
  
  export default ActionButton;
  