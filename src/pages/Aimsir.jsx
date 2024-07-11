//component
import PickTheWordGame from "../components/PickTheWordGame";

const Data = [
  {
    name: "brádán báistí",
    image: "/images/aimsir/brádán báistí.svg",
    audio: "/audio/ainmhithe/madra.mp3",
  },
  {
    name: "clocha sneachta",
    image: "/images/aimsir/clocha sneachta.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "goath",
    image: "/images/aimsir/goath.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "grian",
    image: "/images/aimsir/grian.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "scammallach",
    image: "/images/aimsir/scammallach.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "sneachta",
    image: "/images/aimsir/sneachta.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "stealladh báistí",
    image: "/images/aimsir/stealladh báistí.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "tintreach",
    image: "/images/aimsir/tintreach.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "tuar ceatha",
    image: "/images/aimsir/tuar ceatha.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
];

const Aimsir = () => {
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

export default Aimsir;
