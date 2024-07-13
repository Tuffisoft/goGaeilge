export default function LinkBoxPrintouts({ name, image, document }) {
  const handleDownload = (e) => {
    e.preventDefault();

    // Check if document path is valid
    if (!document) {
      console.error("Document path is empty or invalid");
      return;
    }

    // Try to open the document in a new tab
    try {
      window.open(document, "_blank");
    } catch (error) {
      console.error("Error opening document:", error);
    }
  };

  return (
    <div>
      <div
        onClick={handleDownload}
        className="link-box-printouts flex flex-col items-center justify-center w-64 h-64 m-8 p-4  border-ggPurple hover:border-ggBlue rounded-2xl shadow-2xl cursor-pointer"
      >
        <p className="text-white text-center font-bold mt-2">{name}</p>
        <img src={image} alt={name} className="mt-2" />
      </div>
    </div>
  );
}
