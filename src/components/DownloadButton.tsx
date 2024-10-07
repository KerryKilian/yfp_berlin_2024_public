import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

interface Prop {
    href: string;
    download: string;
    text: string;
}

const DownloadButton: React.FC<Prop> = ({ href, download, text }) => {
    
  
    return (
        <button className="button submit">
            <Link href={href} download={download} className="file">
            <FaFilePdf />
            <p>{text}</p>
            </Link>
            </button>
        // <img src={`/images/${img}.jpg`} alt="Beschreibung des Bildes" />
    );
  };
    
  export default DownloadButton;