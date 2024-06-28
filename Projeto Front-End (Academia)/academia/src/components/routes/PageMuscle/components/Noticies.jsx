import "../../../../styles/Noticies.css"
import { useState, useEffect } from "react";

function Noticies() {

    const images = [
        '../../../../../src/assets/ImagensTrabalho/Musculaçã0.png',
        '../../../../../src/assets/ImagensTrabalho/Musculacao 2.PNG',
        '../../../../../src/assets/ImagensTrabalho/Musculação 3.PNG',
    ];

    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === images.length - 1 ? 0 : prevImage + 1
            );
        }, 3000); // Troca de imagem a cada 3 segundos

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="noticies">
            <div className="titleNoticies">
                <h3>Notícias Musculação</h3>
            </div>
            <div className="carousel">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Slide ${index}`}
                        className={index === currentImage ? 'active' : 'inactive'}
                    />
                ))}
            </div>
        </div>
    )
}

export default Noticies