import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image ? (
        <div className={css.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={css.image}
          />
          <div className={css.description}>
            <div className={css.author}>
              <p>Author: {image.user.name}</p>
              <p>Likes: {image.likes}</p>
            </div>
            {image.description && <p>{image.description}</p>}
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      ) : null}
    </Modal>
  );
};

export default ImageModal;
