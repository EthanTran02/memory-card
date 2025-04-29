export default function ScoreBoard({ score, maxScore, loading }) {
  if (loading) return;
  return (
    <div id="score-board">
      <p id="score">Score:{score}</p>
      <p id="max-score">Max score: {maxScore}</p>
    </div>
  );
}
