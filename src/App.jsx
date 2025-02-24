// src/App.jsx
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/unsplashApi";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setLoading(true);
    setError(null);
    try {
      const newImages = await fetchImages(newQuery, 1);
      setImages(newImages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    setError(null);
    try {
      const newImages = await fetchImages(query, nextPage);
      setImages((prev) => [...prev, ...newImages]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    if (selectedImage?.id !== image.id) {
      setSelectedImage(image);
    }
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        images={images}
        onImageClick={openModal}
        isClickable={!selectedImage}
      />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
