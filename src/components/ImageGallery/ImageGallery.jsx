import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick, isClickable }) => {
  if (!images.length) return null;

  return (
      <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard
            image={image}
            onClick={isClickable ? () => onImageClick(image) : undefined}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
