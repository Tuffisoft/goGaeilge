//component
import PickTheWordGame from "../components/PickTheWordGame";

const numbersData = [
  {
    name: "hAon",
    image: "/images/uimhireacha/haon.svg",
    audio: "/audio/ainmhithe/madra.mp3",
  },
  {
    name: "Dó",
    image: "/images/uimhireacha/dó.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "Trí",
    image: "/images/uimhireacha/trí.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "Ceathar",
    image: "/images/uimhireacha/ceathar.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "Ciúg",
    image: "/images/uimhireacha/ciúg.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "Sé",
    image: "/images/uimhireacha/sé.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "Seacht",
    image: "/images/uimhireacha/seacht.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "Ocht",
    image: "/images/uimhireacha/ocht.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "Naoi",
    image: "/images/uimhireacha/naoi.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "Náid",
    image: "/images/uimhireacha/náid.svg",
    audio: "/audio/ainmhithe/séabra.mp3",
  },
];

const Uimhireacha = () => {
  return (
    <div className="">
      <PickTheWordGame
        data={numbersData}
        questionText="Céard é an focal ceart don uimhir seo?"
        resultTexts={{
          correct: "Sin é!",
          incorrect: "Déan iarracht eile!",
        }}
      />
    </div>
  );
};

export default Uimhireacha;
