import styles from "./ScrollToTopButton.module.css"

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scrollToTopButton} onClick={scrollToTop}>
      <span><i className="fa-solid fa-up-long fa-xl"></i></span>
    </div>
  );
};

export default ScrollToTopButton;
