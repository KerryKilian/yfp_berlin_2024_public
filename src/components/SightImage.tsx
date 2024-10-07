import Image from "next/image";

interface SightImageProp {
    img: string;
}

const SightImage: React.FC<SightImageProp> = ({ img }) => {
    
  
    return (
        <Image
        src={`/images/${img}.jpg`}
        alt="Beschreibung des Bildes"
        width={300} 
        height={300}
        className="sight__img"
        />
        // <img src={`/images/${img}.jpg`} alt="Beschreibung des Bildes" />
    );
  };
    
  export default SightImage;