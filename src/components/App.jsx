import List from "./List";
import { useState } from "react";
import ScoreBoard from "./ScoreBoard";

export default function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <h1>Memory Card Game</h1>
      <p className="game-instructions">Get points by clicking on an image but don't click on any more than once!</p>
      <main>
        <ScoreBoard score={score} maxScore={maxScore} loading={loading} />
        <List
          score={score}
          setScore={setScore}
          maxScore={maxScore}
          setMaxScore={setMaxScore}
          loading={loading}
          setLoading={setLoading}
        />
      </main>
    </>
  );
}
