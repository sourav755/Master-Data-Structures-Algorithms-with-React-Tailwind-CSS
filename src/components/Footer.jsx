import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="p-10 flex items-center justify-center">
      Designed with <FaHeart className="mx-1 text-orange-500" /> by
      <a
        href="https://github.com/sourav755"
        target="_blank"
        className="ml-1 text-blue-600"
      >
        Sourav
      </a>
    </div>
  );
}

export default Footer;
