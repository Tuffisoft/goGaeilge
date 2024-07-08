//component
import PickTheWordGame from "../components/PickTheWordGame";

const colorsData = [
  {
    name: "Bán",
    image: "/images/dathanna/bán.svg",
    audio: "/audio/ainmhithe/madra.mp3",
  },
  {
    name: "Buí",
    image: "/images/dathanna/buí.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "Corcra",
    image: "/images/dathanna/corcra.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "Dearg",
    image: "/images/dathanna/dearg.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "Donn",
    image: "/images/dathanna/donn.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "Glas",
    image: "/images/dathanna/glas.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "Gorm",
    image: "/images/dathanna/gorm.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "Liath",
    image: "/images/dathanna/liath.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "Oráiste",
    image: "/images/dathanna/oráiste.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "Pink",
    image: "/images/dathanna/pink.svg",
    audio: "/audio/ainmhithe/séabra.mp3",
  },
];

const Dathanna = () => {
  return (
    <div className="">
      <PickTheWordGame
        data={colorsData}
        questionText="Céard é an focal ceart don dath seo?"
        resultTexts={{
          correct: "Iontach! 😁",
          incorrect: "Níl sé sin ceart! 😞",
        }}
      />
    </div>
  );
};

export default Dathanna;
