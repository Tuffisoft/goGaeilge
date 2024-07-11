//component
import PickTheWordGame from "../components/PickTheWordGame";

const Data = [
  {
    name: "biatas",
    image: "/images/glasraí/biatas.svg",
    audio: "/audio/ainmhithe/madra.mp3",
  },
  {
    name: "brocailí",
    image: "/images/glasraí/brocailí.svg",
    audio: "/audio/ainmhithe/cat.mp3",
  },
  {
    name: "cairéad",
    image: "/images/glasraí/cairéad.svg",
    audio: "/audio/ainmhithe/béar.mp3",
  },
  {
    name: "cóilís",
    image: "/images/glasraí/cóilís.svg",
    audio: "/audio/ainmhithe/leon.mp3",
  },
  {
    name: "min bhuí",
    image: "/images/glasraí/corn.svg",
    audio: "/audio/ainmhithe/cóála.mp3",
  },
  {
    name: "cúcamar",
    image: "/images/glasraí/cúcamar.svg",
    audio: "/audio/ainmhithe/coinín.mp3",
  },
  {
    name: "gairleog",
    image: "/images/glasraí/gairleog.svg",
    audio: "/audio/ainmhithe/panda.mp3",
  },
  {
    name: "leitís",
    image: "/images/glasraí/leitís.svg",
    audio: "/audio/ainmhithe/eilifint.mp3",
  },
  {
    name: "muisiriún",
    image: "/images/glasraí/muisiriún.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "oinniún",
    image: "/images/glasraí/oinniún.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "piobar",
    image: "/images/glasraí/piobar.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "piseanna",
    image: "/images/glasraí/piseanna.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "práta milis",
    image: "/images/glasraí/práta milis.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "práta",
    image: "/images/glasraí/práta.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
  {
    name: "ubhthoradh",
    image: "/images/glasraí/ubhthoradh.svg",
    audio: "/audio/ainmhithe/piongain.mp3",
  },
];

const Glasrai = () => {
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

export default Glasrai;
