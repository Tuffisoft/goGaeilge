import { useState, useEffect } from "react";

const PickTheWordGame = ({ data, questionText, resultTexts }) => {
  const [gameItems, setGameItems] = useState([]);
  const [correctItem, setCorrectItem] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const selectedItems = shuffled.slice(0, 4);
    setGameItems(selectedItems);
    setCorrectItem(selectedItems[Math.floor(Math.random() * 4)]);
    setResult(null);
  };

  const handleItemClick = (name) => {
    if (name === correctItem.name) {
      setResult(resultTexts.correct);
      setTimeout(startNewGame, 1000);
    } else {
      setResult(resultTexts.incorrect);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-96">
      <h1 className="text-center font-bold text-ggPurple ">{questionText}</h1>
      {correctItem && (
        <>
          <img
            src={correctItem.image}
            alt={correctItem.name}
            className="w-64 h-64"
          />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {gameItems.map((item) => (
              <button
                key={item.name}
                className="border-2 border-ggPurple text-ggPurple hover:text-ggBlue hover:border-ggBlue font-bold py-2 px-4 rounded-lg m-2"
                onClick={() => handleItemClick(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="result-container min-h-12">
            {result && <div className="text-ggPurple font-bold">{result}</div>}
          </div>
        </>
      )}
    </div>
  );
};

export default PickTheWordGame;
