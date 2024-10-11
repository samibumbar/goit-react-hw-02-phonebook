type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};
const Statistics: React.FC<StatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};
export default Statistics;
