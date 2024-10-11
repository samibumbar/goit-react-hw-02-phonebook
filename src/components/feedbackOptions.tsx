type FeedbackOptionProps = {
  options: string[];
  onLeaveFeedback: (type: string) => void;
};

const FeedbackOptions: React.FC<FeedbackOptionProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
