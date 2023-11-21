export function Mapa() {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14453.734424143375!2d55.14471!3d25.0871794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbea7fbb931%3A0x85167c3d4a211374!2sCiel%20Tower!5e0!3m2!1ses-419!2sco!4v1700531042620!5m2!1ses-419!2sco"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
