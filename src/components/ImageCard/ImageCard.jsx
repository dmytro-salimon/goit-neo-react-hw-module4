const ImageCard = ({ image, onClick }) => (
  <div onClick={onClick}>
    <img src={image.urls.small} alt={image.alt_description || "Image"} />
  </div>
);

export default ImageCard;
