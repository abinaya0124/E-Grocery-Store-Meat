import styles from "./popularcategories.module.css"
import Listofitems from "../Homepage/Listofitems";
import { Link } from "react-router-dom";
const popularcategories = () => {
  return (
    <div class="container" >
        <div className={styles.heading}>
        <span className={styles.popular}>Popular Categories</span>
        <Link to="/Dashboard">
        <button type="button"  className={styles.view} >View All</button>
        </Link>
        

        </div>
        <Listofitems/>
    </div>
  )
}

export default popularcategories