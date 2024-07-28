//components
import LinkBoxPrintouts from "../components/LinkBoxPrintouts";

const data = [
  {
    id: 1,
    title: "Ainmhite Leathanach 1",
    document: "/printables/ainmhithe-lch-1.pdf",
    image: "/printables/ainmhithe-lch-1.jpg",
  },
  {
    id: 2,
    title: "Ainmhite Leathanach 2",
    document: "/printables/ainmhithe-lch-2.pdf",
    image: "/printables/ainmhithe-lch-2.jpg",
  },
  {
    id: 3,
    title: "Dathanna Leathanach 1",
    document: "/printables/dathanna-lch-1.pdf",
    image: "/printables/dathanna-lch-1.jpg",
  },
  {
    id: 4,
    title: "Glasraí Leathanach 1",
    document: "/printables/glasrai-lch-1.pdf",
    image: "/printables/glasrai-lch-1.jpg",
  },
  {
    id: 5,
    title: "Glasraí Leathanach 2",
    document: "/printables/glasrai-lch-2.pdf",
    image: "/printables/glasrai-lch-2.jpg",
  },
  {
    id: 6,
    title: "Torthaí Leathanach 1",
    document: "/printables/torthai-lch-1.pdf",
    image: "/printables/torthai-lch-1.jpg",
  },
  {
    id: 7,
    title: "Torthaí Leathanach 2",
    document: "/printables/torthai-lch-2.pdf",
    image: "/printables/torthai-lch-2.jpg",
  },
  {
    id: 8,
    title: "Uimhreacha Leathanach 1",
    document: "/printables/uimhreacha-lch-1.pdf",
    image: "/printables/uimhreacha-lch-1.jpg",
  },
  {
    id: 9,
    title: "Uimhreacha Leathanach 2",
    document: "/printables/uimhreacha-lch-2.pdf",
    image: "/printables/uimhreacha-lch-2.jpg",
  },
];

export default function AbharPriontail() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-ggPurple font-bold text-center">
          Ábhar Priontáil
        </h1>
        <p className="text-lg text-center mt-4 px-24 w-3/4">
          Is féidir na hábhar seo a phriontáil agus a úsáid mar ábhar foghlama.
          Gear amach na pictiúirí agus na focail agus úsáid iad le gach aois
          grúpa.
        </p>
        <p className="font-light mt-4">
          Cliceáil ar an bosca le an PDF a fheiceáil agus sábháil nó priontáil
          uaigh sin é.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-96">
          {data.map((item) => (
            <LinkBoxPrintouts
              key={item.id}
              name={item.title}
              image={item.image}
              document={item.document}
            />
          ))}
        </div>
      </div>
    </>
  );
}
