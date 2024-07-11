import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xblrllnb");
  if (state.succeeded) {
    return <p>Go raibh míle maith agat.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
    <div className="mb-4">
      <label htmlFor="email" className="block text-ggPurple font-bold mb-2">Seoladh e-phost</label>
      <input id="email" type="email" name="email" className="w-full border border-ggPurple px-3 py-2 rounded-lg text-gray-700 focus:outline-none focus:border-ggBlue" placeholder="Scríobh do seoladh ríomhphost anseo"/>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-ggPurple font-bold mb-2">Do theachtaireacht</label>
      <textarea
        id="message"
        name="message"
        placeholder="Scríobh do theachtaireacht anseo"
        rows="5"
        className="w-full px-3 py-2 border border-ggPurple rounded-lg text-gray-700 resize-none focus:outline-none focus:border-ggBlue"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </div>
    <button
      type="submit"
      disabled={state.submitting}
      className="w-full bg-ggWhite hover:bg-ggBlue text-ggPurple font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
    >
      Seol
    </button>
  </form>
  
  );
}

export default Contact;
