import {
  faCoffee,
  faEnvelope,
  faFaceSmileBeam,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="top-header lg:bg-headerBgLg bg-headerBgSm">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-start align-middle p-1">
          <div className="flex gap-2">
            <a href="" className="text-white text-xs lg:text-sm">
              +880 1750 02040
            </a>

            <a href="" className="text-white text-xs lg:text-sm">

              contact@mediusware.com
            </a>
          </div>
          <div className="flex justify-end  gap-3 text-primary">
            <FontAwesomeIcon icon={faPenNib} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faFaceSmileBeam} />
            <FontAwesomeIcon icon={faCoffee} />

            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
