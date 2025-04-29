import List from "./List";
import { useState } from "react";
import ScoreBoard from "./ScoreBoard";

export default function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [loading, setLoading] = useState("true");

  return (
    <>
      <ScoreBoard score={score} maxScore={maxScore} loading={loading} />
      <List
        score={score}
        setScore={setScore}
        maxScore={maxScore}
        setMaxScore={setMaxScore}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}
