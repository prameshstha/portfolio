import "../../Pages/MovieRS/MovieRS.css";
const CardSkeleton = () => {
  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="card-body">
        <div className=" d-flex justify-content-center placeholder-glow">
          <div className="card-img-top image placeholder" src="" alt=""></div>
        </div>
      </div>
      <div className="card-footer border-top movie_details">
        <div className="card-text placeholder-glow">
          <span className="placeholder">Moviefd Name</span>
          <br />
          <span className="placeholder">description descriptions </span>
          <br />
          <span className="placeholder">Ratings </span>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
