import "./button.css"

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={handleClick} className="botaotopo">
      &#9650;
    </button>
  );
}

export default ScrollToTopButton;