import styles from "./Banner.module.css";
import Home from "./images/home-1 1.svg";
import Group from "./images/Group.svg";

const Banner = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.location}>
        <img className={styles.home11Icon1} alt="" src={Home} />
        <img className={styles.groupIcon1} alt="" src={Group} />
        <div className={styles.vegetables}>Contact</div>
      </div>
    </div>
  );
};

export default Banner;
