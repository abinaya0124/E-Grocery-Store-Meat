import styles from './Wishlist.module.css';
import FaceBook from "./whislist/facebook 1.svg";
import Twitter from "./whislist/twitter 1.svg";
import Pintrest from "./whislist/pinterest 1.svg";
import Instagram from "./whislist/instagram 1.svg";
import GreenCapsicum from "./whislist/Image (2).png";
import Mango from "./whislist/Image.png";
import ChiniseCabbege from "./whislist/Image (1).png";
import Close from "./whislist/Close.svg";
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const Wishlist = () => {
	const [theme] = useThemeHook();

	return (
		<div className={styles.wishlist} style={{backgroundColor:theme ? '#2A2C38':''}}>
			<div className={styles.share}>
				<div className={styles.greenCapsicum}>Share:</div>
				<div className={styles.share2}>
					<img className={styles.socialMediaIcon4} style={{backgroundColor:'#FF6316',borderRadius:'10px' }}alt="" src={FaceBook} />
					<img className={styles.socialMediaIcon5} alt="" src={Twitter} />
					<img className={styles.socialMediaIcon5} alt="" src={Pintrest} />
					<img className={styles.socialMediaIcon5} alt="" src={Instagram} />
				</div>
			</div>
			<div className={styles.devider3} />
			<div className={styles.wishlistProduct}>
				<div className={styles.product}>
					<img className={styles.imageIcon} alt="" src={Mango} />
					<div className={styles.greenCapsicum}>Fresh Sujapuri Mango</div>
				</div>
				<div className={styles.price}>
					<div className={styles.div}>$09.00</div>
				</div>
				<div className={styles.action}>
					<div className={styles.button}>
						<div className={styles.normal}>Add to Cart</div>
					</div>
					<img className={styles.closeIcon3} alt="" src={Close} />
				</div>
				<div className={styles.stockStatus}>
					<div className={styles.greenCapsicum}>Out of Stock</div>
				</div>
			</div>
			<div className={styles.devider4} />
			<div className={styles.wishlistProduct1}>
				<div className={styles.product}>
					<img className={styles.imageIcon} alt="" src={ChiniseCabbege} />
					<div className={styles.greenCapsicum}>Chinese Cabbage</div>
				</div>
				<div className={styles.price}>
					<div className={styles.div}>$45.00</div>
				</div>
				<div className={styles.action1}>
					<div className={styles.button1}>
						<div className={styles.normal}>Add to Cart</div>
					</div>
					<img className={styles.closeIcon3} alt="" src={Close} />
				</div>
				<div className={styles.stockStatus1}>
					<div className={styles.greenCapsicum}>In Stock</div>
				</div>
			</div>
			<div className={styles.devider5} />
			<div className={styles.wishlistProduct2}>
				<div className={styles.product}>
					<img className={styles.imageIcon} alt="" src={GreenCapsicum} />
					<div className={styles.greenCapsicum}>Green Capsicum</div>
				</div>
				<div className={styles.price2}>
					<div className={styles.div}>$14.99</div>
					<div className={styles.div3}>$20.99</div>
				</div>
				<div className={styles.action1}>
					<div className={styles.button1}>
						<div className={styles.normal}>Add to Cart</div>
					</div>
					<img className={styles.closeIcon3} alt="" src={Close} />
				</div>
				<div className={styles.stockStatus1}>
					<div className={styles.greenCapsicum}>In Stock</div>
				</div>
			</div>
			<div className={styles.header}>
				<div className={styles.header1}>
					<div className={styles.product3}>Product</div>
					<div className={styles.price3}>price</div>
					<div className={styles.stockStatus3}>Stock Status</div>
				</div>
				<div className={styles.headerChild} />
			</div>
		</div>
	);
}
export default Wishlist;
