import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, maxPossiblePoints, index, points, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={answer ? index + 1 : index} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
export default Progress;
