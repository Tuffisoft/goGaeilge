//react-router
import { Link } from "react-router-dom";

export default function LinkBoxPrintouts({ name, image, link }) {
  return (
    <div>
      <Link to={link} rel="noreferrer">
        <div className="link-box-printouts flex flex-col items-center justify-center w-64 h-64 m-8 p-4 border-2 border-ggPurple hover:border-ggBlue rounded-lg shadow-xl">
          <p className="text-white text-center font-bold mt-2">{name}</p>
          <img src={image} alt={name} className="w-32 h-32" />
        </div>
      </Link>
    </div>
  );
}
