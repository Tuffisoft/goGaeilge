export default function PayPalDonateButton() {
  return (
    <div>
      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_top"
        className="mt-8"
      >
        <input type="hidden" name="hosted_button_id" value="DGBMJX2T6888Q" />
        <input
          type="image"
          src="/images/buttons/paypal.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          color="white"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_DE/i/scr/pixel.gif"
          width="2"
          height="2"
          color="white"
        />
      </form>
    </div>
  );
}
