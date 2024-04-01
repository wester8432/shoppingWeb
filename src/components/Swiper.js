export default function SwiperImg() {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-ride="carousel"
        // data-bs-touch="false"
        // data-bs-interval="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://i.imgur.com/6zWwEaf.png"
              className="d-block w-100 objectFit"
              alt="..."
              height="900px"
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://cdn.esence.travel/%E6%9C%AC%E8%B3%AA%E6%97%85%E8%A1%8C/%E6%9C%AC%E8%B3%AA%E6%97%85%E8%A1%8C-%E6%95%85%E4%BA%8B%E6%96%87%E7%AB%A0%E9%A6%96%E5%9C%96-1200737-1-5.png"
              className="d-block w-100 objectFit"
              alt="..."
              height="900px"
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://i.pinimg.com/564x/04/dd/e2/04dde285b059b8cd0cf7267a62163bed.jpg"
              className="d-block w-100 objectFit"
              alt="..."
              height="900px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
