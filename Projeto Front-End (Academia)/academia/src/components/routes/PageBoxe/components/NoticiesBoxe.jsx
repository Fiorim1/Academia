import "../../../../styles/NoticiesBoxe.css"
import { useState, useEffect } from "react";

function NoticiesBoxe() {

    const images = [
        'https://via.placeholder.com/600x300?text=Image+1',
        'https://via.placeholder.com/600x300?text=Image+2',
        'https://via.placeholder.com/600x300?text=Image+3',
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
                <h3>Notícias Boxe</h3>
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

export default NoticiesBoxe