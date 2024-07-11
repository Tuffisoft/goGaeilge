//component
import PickTheWordGame from "../components/PickTheWordGame";

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
    name: "mealbhachán",
    image: "/images/torthaí/mealbhachán.svg",
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
    name: "silínní",
    image: "/images/torthaí/silínní.svg",
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
  return (
    <div className="">
      <PickTheWordGame
        data={Data}
        questionText="Céard é an focal ceart don cineál aimsir seo?"
        resultTexts={{
          correct: "Iontach! 😁",
          incorrect: "Níl sé sin ceart! 😞",
        }}
      />
    </div>
  );
};

export default Torthai;
