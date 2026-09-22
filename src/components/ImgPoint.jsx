import styles from "./ImgPoint.module.css";

function ImgPoint({ img, point }) {
  return (
    <div className={styles.point}>
      <img src={img} />
      <p>{point}</p>
    </div>
  );
}

export default ImgPoint;
