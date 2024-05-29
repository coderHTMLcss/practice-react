import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

const Slider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false)
            }
        } catch (error) {
            setError(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    if (loading) {
        return <p>Loading images!Please waite!</p>
    }

    if (error) {
        return <p>Occured! {error}</p>
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {images && images.length > 0 ?
                (images.map((image, index) => {
                    return <img key={image.id}
                        src={image.download_url}
                        alt={image.download_url}
                        className={
                            currentSlide === index
                                ? "current-image"
                                : "current-image hide-current-image"
                        }
                    />
                }))
                : null}
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {images && images.length > 0 ? (images.map((_, index) => {
                    return <button onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"} key={`${_}+${index}`}></button>
                })) : null}
            </span>
        </div>
    )
}

export default Slider