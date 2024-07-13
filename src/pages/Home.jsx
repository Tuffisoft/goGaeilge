//components
import LinkBox from "../components/LinkBox";
import LinkBoxPrintouts from "../components/LinkBoxPrintouts";

//images
import dathanna from "/images/linkbox/dathanna.svg";
import uimhreacha from "/images/linkbox/uimhreacha.svg";
import ainmhite from "/images/linkbox/ainmhite.svg";
import ainmhitePDF from "/printables/ainmhithe-lch-1.jpg";
import torthaiPDF from "/printables/torthai-lch-1.jpg";
import glasraiPDF from "/printables/glasrai-lch-1.jpg";

export default function Home() {
  return (
    <>
      {/* Container for home page */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-ggPurple font-bold text-center">
          Fáilte go goGaeilge
        </h1>
        <p className="text-lg text-center mt-4 px-24">
          Cuir le do chuid Gaeilge leis na cluichí simplí seo. Tá siad oiriúnach
          do dhaoine ag foghlaim na teanga.
        </p>

        {/* Container word games */}
        <h2 className="text-2xl text-ggPurple font-bold mt-8">
          Céard é an focal ceart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <LinkBox name="Dathanna" image={dathanna} link="/cluichí/dathanna" />
          <LinkBox
            name="Uimhreacha"
            image={uimhreacha}
            link="/cluichí/uimhreacha"
          />
          <LinkBox name="Ainmhite" image={ainmhite} link="/cluichí/ainmhite" />
        </div>
        <h2 className="text-2xl text-ggPurple font-bold mt-8 text-center">
          An fearr leat obair ar páipéir?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <LinkBoxPrintouts
            name="Ainmhithe"
            image={ainmhitePDF}
            document="/printables/ainmhithe-lch-1.pdf"
          />
          <LinkBoxPrintouts
            name="Torthaí"
            image={torthaiPDF}
            document="/printables/torthai-lch-1.pdf"
          />
          <LinkBoxPrintouts
            name="Glasraí"
            image={glasraiPDF}
            document="/printables/glasrai-lch-1.pdf"
          />
        </div>
      </div>
    </>
  );
}
