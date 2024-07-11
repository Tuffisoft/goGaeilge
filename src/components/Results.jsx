// hooks/useRandomResultText.js

import { useState, useCallback } from "react";

const correctResponses = [
  "Iontach! 😁",
  "Go hiontach! 🎉",
  "Maith thú! 👏",
  "Ceart go leor! 🙌",
  "Tá an ceart agat! 😊",
];

const incorrectResponses = [
  "Níl sé sin ceart! 😞",
  "Bain triail eile as! 🤔",
  "Ní hea, ach lean ort! 💪",
  "Beagnach ceart! 😅",
  "Ná bí buartha, lean ort ag triail! 🌟",
];

const useResults = () => {
  const [currentCorrect, setCurrentCorrect] = useState("");
  const [currentIncorrect, setCurrentIncorrect] = useState("");

  const getRandomText = useCallback((array) => {
    return array[Math.floor(Math.random() * array.length)];
  }, []);

  const refreshTexts = useCallback(() => {
    setCurrentCorrect(getRandomText(correctResponses));
    setCurrentIncorrect(getRandomText(incorrectResponses));
  }, [getRandomText]);

  return {
    correctText: currentCorrect,
    incorrectText: currentIncorrect,
    refreshTexts,
  };
};

export default useResults;
