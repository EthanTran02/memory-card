export default function ScoreBoard({ score, maxScore, loading }) {
  if (loading) return;
  return (
    <div id="score-board">
      <p>Score: <span className="score-value">{score}</span></p>
      <p>Max Score: <span className="score-value">{maxScore}</span></p>
    </div>
  );
}
