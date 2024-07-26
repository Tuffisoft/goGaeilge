//react-router-dom
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Níl an leathnach seo ar fáil</h1>
      <p className="mb-4">Tá brón orainn, níl an leathanach seo ann.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Téigh ar ais go dtí an leathanach baile
      </Link>
    </div>
  );
}

export default NotFound;
