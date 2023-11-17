export function Mapa() {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.4334649385282!2d55.13983908629163!3d25.087184178874942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbea7fbb931%3A0x85167c3d4a211374!2sCiel%20Tower!5e0!3m2!1ses-419!2sco!4v1700224185119!5m2!1ses-419!2sco"
          width={700}
          height={600}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
