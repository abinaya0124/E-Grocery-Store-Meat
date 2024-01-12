import styles from "./CheckOutPage.module.css"
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

import Banner from "./banner";
//import the componnets
import Check from "./check"
import OrderSummery from './payment';
const CheckOutpage = () => {
    const [theme] = useThemeHook()
  return (
    <>
  
     <Banner/>
    <div className={styles.main} style={{backgroundColor:theme ? 'black':''}}>
        <OrderSummery/>
        <Check/>
    </div>
    </>
  )
}

export default CheckOutpage;