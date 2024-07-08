//components
import LinkBox from "../components/LinkBox";

//images
import dathanna from "/images/linkbox/dathanna.svg";
import uimhreacha from "/images/linkbox/uimhreacha.svg";
import ainmhite from "/images/linkbox/ainmhite.svg";

export default function Home() {
  return (
    <>
      {/* Container for home page */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-ggPurple font-bold">
          Fáilte go goGaeilge
        </h1>
        <p className="text-lg text-center mt-4 px-24">
          Cuir le do chuid Gaeilge leis na cluichí simplí seo. Tá siad oiriúnach
          do dhaoine ag foghlaim na teanga.
        </p>

        {/* Container for links */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          <LinkBox name="Dathanna" image={dathanna} link="/cluichí/dathanna" />
          <LinkBox
            name="Uimhreacha"
            image={uimhreacha}
            link="/cluichí/uimhreacha"
          />
          <LinkBox name="Ainmhite" image={ainmhite} link="/cluichí/ainmhite" />
        </div>
      </div>
    </>
  );
}
