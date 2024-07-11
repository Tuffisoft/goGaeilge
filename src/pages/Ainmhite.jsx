//component
import PickTheWordGame from "../components/PickTheWordGame";

const animalsData = [
  {
    name: "madra",
    image: "/images/ainmhite/madra.svg",
    audio: "https://jumpshare.com/s/fdbXdowithFZRlwAprtI",
  },
  {
    name: "cat",
    image: "/images/ainmhite/cat.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "béar",
    image: "/images/ainmhite/béar.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "leon",
    image: "/images/ainmhite/leon.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "cóála",
    image: "/images/ainmhite/cóála.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "coinín",
    image: "/images/ainmhite/coinín.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "panda",
    image: "/images/ainmhite/panda.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "eilifint",
    image: "/images/ainmhite/eilifint.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "piongain",
    image: "/images/ainmhite/piongain.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "séabra",
    image: "/images/ainmhite/séabra.svg",
    audio: "/audio/ainmhithe/séabra.mp3",
  },
  {
    name: "tíogar",
    image: "/images/ainmhite/tíogar.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "sioráf",
    image: "/images/ainmhite/sioráf.svg",
    audio: "/audio/ainmhithe/sioráf.mp3",
  },
  {
    name: "sionnach",
    image: "/images/ainmhite/sionnach.svg",
    audio: "/audio/ainmhithe/sionnach.mp3",
  },
  {
    name: "dobhareach",
    image: "/images/ainmhite/dobhareach.svg",
    audio: "/audio/ainmhithe/dobhareach.mp3",
  },
  {
    name: "bó",
    image: "/images/ainmhite/bó.svg",
    audio: "/audio/ainmhithe/bó.mp3",
  },
  {
    name: "racún",
    image: "/images/ainmhite/racún.svg",
    audio: "/audio/ainmhithe/racún.mp3",
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
