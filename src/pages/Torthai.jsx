//react
import { useEffect } from "react";

//component
import PickTheWordGame from "../components/PickTheWordGame";
import useResults from "../components/Results";

const Data = [
  {
    name: "abhacád",
    image: "/images/torthaí/abhacád.svg",
    audio: "/audio/ainmhithe/madra.mp3",
  },
  {
    name: "aibreog",
    image: "/images/torthaí/aibreog.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "anann",
    image: "/images/torthaí/anann.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "banana",
    image: "/images/torthaí/banana.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "cíobhaí",
    image: "/images/torthaí/cíobhaí.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "fraochán",
    image: "/images/torthaí/fraochán.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "cnó cócó",
    image: "/images/torthaí/cnó cócó.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "líomóid",
    image: "/images/torthaí/líomóid.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "íonchaor",
    image: "/images/torthaí/íonchaor.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "mangó",
    image: "/images/torthaí/mangó.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "mealbhacán",
    image: "/images/torthaí/mealbhacán.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "péitseog",
    image: "/images/torthaí/péitseog.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "piorra",
    image: "/images/torthaí/piorra.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "silíní",
    image: "/images/torthaí/silíní.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "sú talún",
    image: "/images/torthaí/sú talún.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "úll",
    image: "/images/torthaí/úll.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
];

const Torthai = () => {
  const { correctText, incorrectText, refreshTexts } = useResults();
  useEffect(() => {
    refreshTexts();
  }, []);

  return (
    <div className="">
      <PickTheWordGame
        data={Data}
        questionText="Céard é an focal ceart don tortha seo?"
        resultTexts={{
          correct: correctText,
          incorrect: incorrectText,
        }}
      />
    </div>
  );
};

export default Torthai;
