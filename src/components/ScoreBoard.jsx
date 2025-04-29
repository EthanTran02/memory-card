export default function ScoreBoard({ score, maxScore }) {
  return (
    <div id="score-board">
      <p id="score">Score:{score}</p>
      <p id="max-score">Max score: {maxScore}</p>
    </div>
  );
}
