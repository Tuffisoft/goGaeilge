import { Link } from "react-router-dom";

export default function LinkBoxBlog({ name, image, link }) {
  return (
    <div>
      <Link to={link}>
        <div className="link-box flex flex-col items-center justify-center w-64 h-64 m-8 p-4 bg-gradient-to-br from-ggSilver to-ggWhite border-2 border-ggPurple hover:border-ggBlue rounded-2xl shadow-2xl">
          <p className="text-white text-center text-lg font-bold mt-2">
            {name}
          </p>
          <img src={image} alt={name} className="mt-2" />
        </div>
      </Link>
    </div>
  );
}
