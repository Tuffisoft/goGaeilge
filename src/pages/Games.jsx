//components
import LinkBox from "../components/LinkBox";

//images
import dathanna from "/images/linkbox/dathanna.svg";
import uimhreacha from "/images/linkbox/uimhreacha.svg";
import ainmhite from "/images/linkbox/ainmhite.svg";
import torthai from "/images/linkbox/torthaí.svg";
import glasrai from "/images/linkbox/glasraí.svg";
import aimsir from "/images/linkbox/aimsir.svg";

export default function Games() {
  return (
    <>
      {/* Container for page */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-ggPurple font-bold text-center">
          Cluichí
        </h1>
        <p className="text-lg text-center mt-4 px-24">
          Seo cúpla cluiche simplí le cabhrú leat do chuid Gaeilge a fheabhsú.
        </p>

        {/* Container word games */}
        <h2 className="text-2xl text-ggPurple font-bold mt-8">
          Céard é an focal ceart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          
          <LinkBox
            name="Uimhreacha"
            image={uimhreacha}
            link="/cluichí/uimhreacha"
          />
          <LinkBox name="Ainmhite" image={ainmhite} link="/cluichí/ainmhite" />
          <LinkBox name="Torthaí" image={torthai} link="/cluichí/torthai" />
          <LinkBox name="Glasraí" image={glasrai} link="/cluichí/glasrai" />
          <LinkBox name="Dathanna" image={dathanna} link="/cluichí/dathanna" />
          <LinkBox name="Aimsir" image={aimsir} link="/cluichí/aimsir" />
        </div>
      </div>
    </>
  );
}
