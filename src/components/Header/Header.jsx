import {
  faCoffee,
  faEnvelope,
  faFaceSmileBeam,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';

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
              {/* <i className="fa fa-envelope"></i> */}
              contact@mediusware.com
            </a>
          </div>
          <div className="flex justify-end  gap-3 text-primary">
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
            <FontAwesomeIcon icon={faPenNib} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faFaceSmileBeam} />
            {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon="fab fa-react" />

            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
