import styles from "./ContactInfo.module.css";
import Map from "./images/Map Pin.svg";
import Email from "./images/Email.svg";
import Phone from "./images/PhoneCall.svg";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
const ContactInfo = () => {
  const [theme] = useThemeHook();
  return (
    <div
      className={styles.contactInfo}
      style={{ backgroundColor: theme ? "" : "#ffffff" }}
    >
      <div className={styles.address}>
        <img className={styles.mapPinIcon} alt="" src={Map} />
        <div
          className={styles.proxygmailcomHelpproxygma}
          style={{ color: theme ? "" : "black" }}
        >
          2715 Ash Dr. San Jose, South Dakota 83475
        </div>
      </div>
      <div className={styles.devider2} />
      <div className={styles.address}>
        <img className={styles.mapPinIcon} alt="" src={Email} />
        <div className={styles.proxygmailcomHelpproxygma}>
          <p
            className={styles.proxygmailcom}
            style={{ color: theme ? "" : "black" }}
          >
            tracework@gmail.com
          </p>
          <p
            className={styles.proxygmailcom}
            style={{ color: theme ? "" : "black" }}
          >
            Help.tracework@gmail.com
          </p>
        </div>
      </div>
      <div className={styles.devider2} />
      <div className={styles.address}>
        <img className={styles.mapPinIcon} alt="" src={Phone} />
        <div className={styles.proxygmailcomHelpproxygma}>
          <p
            className={styles.proxygmailcom}
            style={{ color: theme ? "" : "black" }}
          >
            (219) 555-0114
          </p>
          <p
            className={styles.proxygmailcom}
            style={{ color: theme ? "" : "black" }}
          >
            (164) 333-0487
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
