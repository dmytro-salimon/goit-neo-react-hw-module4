import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <button onClick={onClick} className={css.loadMore}>
    Load more
  </button>
);

export default LoadMoreBtn;
