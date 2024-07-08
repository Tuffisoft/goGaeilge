//component
import PickTheWordGame from "../components/PickTheWordGame";

const animalsData = [
  {
    name: "Madra",
    image: "/images/ainmhite/madra.svg",
    audio: "https://jumpshare.com/s/fdbXdowithFZRlwAprtI",
  },
  {
    name: "Cat",
    image: "/images/ainmhite/cat.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "Béar",
    image: "/images/ainmhite/béar.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "Leon",
    image: "/images/ainmhite/leon.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "Cóála",
    image: "/images/ainmhite/cóála.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "Coinín",
    image: "/images/ainmhite/coinín.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "Panda",
    image: "/images/ainmhite/panda.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "Eilifint",
    image: "/images/ainmhite/eilifint.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "Piongain",
    image: "/images/ainmhite/piongain.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "Séabra",
    image: "/images/ainmhite/séabra.svg",
    audio: "/audio/ainmhithe/séabra.mp3",
  },
  {
    name: "Tíogar",
    image: "/images/ainmhite/tíogar.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "Sioráf",
    image: "/images/ainmhite/sioráf.svg",
    audio: "/audio/ainmhithe/sioráf.mp3",
  },
  {
    name: "Sionnach",
    image: "/images/ainmhite/sionnach.svg",
    audio: "/audio/ainmhithe/sionnach.mp3",
  },
];

const Ainmhite = () => {
  return (
    <div className="">
      <PickTheWordGame
        data={animalsData}
        questionText="Céard é an focal ceart don ainmhí seo?"
        resultTexts={{
          correct: "Ceart agat! 😎",
          incorrect: "Déan iarracht eile! 😠",
        }}
      />
    </div>
  );
};

export default Ainmhite;
