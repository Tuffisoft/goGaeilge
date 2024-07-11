import CookieConsent from "react-cookie-consent";

export default function CookieInfo() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Tuigim | I understand"
        cookieName="mySiteCookieConsent"
        style={{ background: "#0388A6", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", fontSize: "13px", borderRadius: "5px"}}
        buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: "5px"}}
        expires={150}
      >
        <p>Baineann an suíomh seo usáid as cookies le feabhas a chuir ar an
        seirbhís a chuireann muid a fáil.</p>
        <p>We use cookies on this site to improve the experience.</p>
        <a href="/polasaí-príobháideachta" style={{ color: "#FFD700" }}>
         Féach ar an Polasaí Príobháideachta | Privacy Policy
        </a>
      </CookieConsent>
    </div>
  );
}
