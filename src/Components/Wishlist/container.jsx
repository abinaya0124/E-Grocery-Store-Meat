import Wishlist from './wishlist';
import  {useThemeHook}  from '../GlobalComponents/ThemeProvider';
import NavLinks from "./navLinks";
import Product from "./product"
import Banner from "./banner";
const Container = () => {
	const [theme] = useThemeHook()
  return (
    <>
    {/* <NavLinks/> */}
    <Banner/><br></br>
    <div className="bg-gray-800 flex min-h-[585px] flex-col rounded-[49px]">
        <Product/>
    </div>
    
    </>
  )
}

export default Container;