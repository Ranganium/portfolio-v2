function ImgPoint({ img, point }) {
  return (
    <div className="img-point">
      <img src={img} />
      <p>{point}</p>
    </div>
  );
}

export default ImgPoint;
