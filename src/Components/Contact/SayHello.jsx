import styles from "./JustSayHello.module.css";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

const JustSayHello = () => {
  const [theme] = useThemeHook();
  return (
    <div className={styles.justSayHello2}>
      <div
        className={styles.bg}
        style={{ backgroundColor: theme ? "" : "#ffffff" }}
      />
      <div className={styles.button}>
        <div className={styles.normal} style={{ color: theme ? "" : "black" }}>
          Send Message
        </div>
      </div>
      <div>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Subjects"
        />
      </div>
      <div>
        <input type="text" className={styles.inputField1} placeholder="Helo" />
      </div>
      <div>
        <input
          type="text"
          className={styles.inputField2}
          placeholder="test@gmail.com"
        />
      </div>
      <div>
        <input
          type="text"
          className={styles.inputField3}
          placeholder="Template Cookie"
        />
      </div>
      <div
        className={styles.doYouFancy1}
        style={{ color: theme ? "" : "black" }}
      >
        Do you fancy saying hi to me or you want to get started with your
        project and you need my help? Feel free to contact me.
      </div>
      <div
        className={styles.justSayHello3}
        style={{ color: theme ? "" : "black" }}
      >
        Just Say Hello!
      </div>
    </div>
  );
};

export default JustSayHello;
