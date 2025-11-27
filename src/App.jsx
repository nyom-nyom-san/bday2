import { useState } from "react";
import C1 from "./Cards/C1";
import C2 from "./Cards/C2";
import C3 from "./Cards/C3";
import "./App.css";

const cards = [C1, C2, C3];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [flip, setFlip] = useState(false);

  const handleNext = () => {
    const newIndex = (current + 1) % cards.length;
    setNextIndex(newIndex);
    setFlip(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setFlip(false);
    }, 800);
  };

  const handleBefore = () => {
    const newIndex = (current - 1 + cards.length) % cards.length;
    setNextIndex(newIndex);
    setFlip(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setFlip(false);
    }, 800);
  };

  const CurrentCard = cards[current];
  const NextCard = cards[nextIndex];

  return (
    <div className="a-container">
      <div className="c-wrapper">
        <div className={`card ${current === 0 ? "card-small" : "card-large"}`}>

          {/* inner flip container */}
          <div className={`inner ${flip ? "flip" : ""}`}>

            {/* FRONT FACE */}
            <div className="front">
              <CurrentCard handleNext={handleNext} handleBefore={handleBefore} />
            </div>

            {/* BACK FACE */}
            <div className="back">
              <NextCard handleNext={handleNext} handleBefore={handleBefore} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
