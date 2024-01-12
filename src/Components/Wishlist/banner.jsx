import { Breadcrumbs } from "@material-tailwind/react";
import Bread from "./whislist/Breadcrumbs1.png"
export function BreadcrumbsWithIcon() {
  return (
    <div className="relative bg-cover bg-center h-28 md:h-28 lg:h-20" style={{ backgroundImage: `url(${Bread})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-start left-40">
        <Breadcrumbs className="text-white">
          <a href="#" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{size:'20px'}}
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="#" className="opacity-60">
            <span style={{color:'#FF6316'}}>Wishlist</span>
          </a>
          {/* <a href="#">Breadcrumbs</a> */}
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default BreadcrumbsWithIcon;
