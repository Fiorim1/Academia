import "../../../../styles/NoticiesCross.css"
import { useState, useEffect } from "react";

function NoticiesCross() {

    const images = [
        '../../../../../src/assets/ImagensTrabalho/Crossfit.png',
        '../../../../../src/assets/ImagensTrabalho/Crossfit 2.png',
        '../../../../../src/assets/ImagensTrabalho/Crossfit 3.png',
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
                <h3>Notícias CrossFit</h3>
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

export default NoticiesCross