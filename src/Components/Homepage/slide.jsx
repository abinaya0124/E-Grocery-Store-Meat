import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BG1 from "../images/banner/Bannar Big.png";
import BG2 from "../images/banner/BG1.png";
import BG3 from "../images/banner/BG2.png";
import "./slide.css"
const fadeImages = [
  {
    url: BG1,
    caption: 'Fresh & Healthy Organic Food',
    sale: 'Sale up to',
    off: '30% Off',
    desc: 'Free shipping on all your order.'
  },
  {
    url: BG2,
    caption: 'Summer Sale',
    off: '78% Off',
    desc: 'Only Fruit & Vegetable',
  },
  {
    url: BG3,
    caption: 'Best Deal',
    desc: 'Special Products Deal of the Month',
  },
];


const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', height: '60%' }} src={fadeImage.url} alt={`Slide ${index}`} />

            <div className='absolute top-48 left-28 font-body-large-body-large-400'>
              <h1 className='main' >{fadeImage.caption}</h1>
              <h3 style={{fontSize:'32px'}}>
                {fadeImage.sale} <span style={{backgroundColor:'#FF6316',width:'10px', border: '1px solid #FF6316 '}}>{fadeImage.off}</span>
              </h3>
              {fadeImage.desc && (
                <p className='myText'>{fadeImage.desc}</p>
              )}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
