import styles from "./TopLabelPromo.module.css";

const TopLabelPromo = () => {
  return (
    <section className={styles.topLabelPromo}>
      <div className={styles.container}>
        <h1 className={styles.contentText}>
          Rebajas de vacaciones para todos los estudiantes de la CUN y entrega
          gratuita - ¡descuento del 60%!{" "}
          <span className={styles.contentTextCTA}>compra ahora</span>
        </h1>
      </div>
    </section>
  );
};

export default TopLabelPromo;
