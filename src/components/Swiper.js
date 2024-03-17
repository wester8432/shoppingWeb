export default function SwiperImg() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://i.imgur.com/6zWwEaf.png"
              className="d-block w-100"
              height="800px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ color: "light" }}>慶開幕單筆訂單打8折</h2>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              height="800px"
              src="https://cdn.esence.travel/%E6%9C%AC%E8%B3%AA%E6%97%85%E8%A1%8C/%E6%9C%AC%E8%B3%AA%E6%97%85%E8%A1%8C-%E6%95%85%E4%BA%8B%E6%96%87%E7%AB%A0%E9%A6%96%E5%9C%96-1200737-1-5.png"
              className="d-block -100 objectFit"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>職人精神，立即品嘗</h2>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              height="800px"
              src="https://i.pinimg.com/564x/04/dd/e2/04dde285b059b8cd0cf7267a62163bed.jpg"
              className="d-block w-100 objectFit"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>在台灣品嚐日本的味道</h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
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
