//component
import PickTheWordGame from "../components/PickTheWordGame";

const numbersData = [
  {
    name: "a haon",
    image: "/images/uimhreacha/aon.svg",
    audio: "/audio/ainmhithe/madra.mp3",
  },
  {
    name: "a dó",
    image: "/images/uimhreacha/dó.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "a trí",
    image: "/images/uimhreacha/trí.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "a ceathair",
    image: "/images/uimhreacha/ceathair.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "a ciúg",
    image: "/images/uimhreacha/ciúg.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "a sé",
    image: "/images/uimhreacha/sé.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "a seacht",
    image: "/images/uimhreacha/seacht.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "a hocht",
    image: "/images/uimhreacha/ocht.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "a naoi",
    image: "/images/uimhreacha/naoi.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "náid",
    image: "/images/uimhreacha/náid.svg",
    audio: "/audio/ainmhithe/séabra.mp3",
  },
  {
    name: "a deich",
    image: "/images/uimhreacha/deich.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "a haon déag",
    image: "/images/uimhreacha/aon-déag.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "fiche",
    image: "/images/uimhreacha/fiche.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "caoga",
    image: "/images/uimhreacha/caoga.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "nócha",
    image: "/images/uimhreacha/nócha.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
  {
    name: "céad",
    image: "/images/uimhreacha/céad.svg",
    audio: "/audio/ainmhithe/tíogar.mp3",
  },
];

const Uimhireacha = () => {
  return (
    <div className="">
      <PickTheWordGame
        data={numbersData}
        questionText="Céard é an focal ceart don uimhir seo?"
        resultTexts={{
          correct: "An-mhaith! 🎉",
          incorrect: "Mí-cheart! 😢",
        }}
      />
    </div>
  );
};

export default Uimhireacha;
