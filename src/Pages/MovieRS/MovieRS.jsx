import "./MovieRS.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  movieListApi,
  recommendedMovieApi,
  tmdb_image_url,
} from "../../constant/constant";
import { Dropdown } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import images from "../../Assets";
import { CardSkeleton } from "../../Component";
const MovieRS = () => {
  const [movieList, setMovieList] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [isLoadingMovieImdb, setIsLoadingMovieImdb] = useState(false);
  const [recommendedMovieList, setRecommendedMovieList] = useState();
  const [searchMovie, setSearchMovie] = useState("");
  const header = {
    "Content-Type": "application/json",
  };
  const fetchMovie = async () => {
    setIsLoadingMovie(true);
    try {
      const response = await axios.get(movieListApi);
      if (response.status === 200) {
        setMovieList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingMovie(false);
  };
  const handleDropdownChange = async (movie) => {
    setIsLoadingMovieImdb(true);
    const movie_id = movie.id;
    const movie_index = movie.movie_index;
    const sm = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b105fd2105b38ae32e9df54f88014765`
    );
    setSelectedMovie(sm.data);
    const recommended_movie = await axios.post(
      recommendedMovieApi,
      {
        movie_index: movie_index,
      },
      { headers: header }
    );

    setRecommendedMovieList(recommended_movie.data);
    setIsLoadingMovieImdb(false);
    setSearchMovie("");
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie__dropdown">
      <div>Movie selection</div>{" "}
      <div className="">
        {isLoadingMovie ? (
          <p className="placeholder-glow">
            <span
              className="placeholder rounded"
              style={{ width: 300, height: 35 }}
            ></span>
          </p>
        ) : (
          <Dropdown className="">
            <Dropdown.Toggle
              variant="secondary"
              id=""
              className="dropdown_toggle"
            >
              --Select Movie--
              {/* <FaCaretDown size={25} /> */}
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="drop__down"
              style={{
                overflow: "scroll",
                height: 500,
                width: 300,
                margin: 0,
                alignItems: "center",
              }}
            >
              <img id="searchIcon" src=""></img>
              <input
                className="form form-control search__text"
                type="text"
                placeholder="Search.."
                onChange={(e) => setSearchMovie(e.target.value)}
              />
              {movieList &&
                movieList
                  .filter((x) =>
                    x.title.toLowerCase().includes(searchMovie.toLowerCase())
                  )
                  .map((item, index) => (
                    <div key={index}>
                      <Dropdown.Item
                        key={index}
                        eventKey={item.title}
                        onClick={() => {
                          handleDropdownChange(item);
                        }}
                        defaultValue={item.index}
                        className=""
                      >
                        {item.title}
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </div>
                  ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
      <div className="top_div_selected">
        <div> Selected Movie: </div>
        <div className="selected_movie">
          {selectedMovie ? (
            <div className="">
              <div className="card " style={{ width: "18rem" }}>
                <div className="card-body">
                  <div className=" d-flex justify-content-center">
                    <img
                      className="card-img-top movie__image"
                      src={
                        selectedMovie.backdrop_path
                          ? tmdb_image_url + "/" + selectedMovie.backdrop_path
                          : images.NoImage
                      }
                      alt={selectedMovie.title}
                    />
                  </div>
                </div>
                <div className="card-footer border-top movie_details">
                  <div className="movie_description">
                    <span>{selectedMovie.title} </span>
                    <br />
                    <span className=" text-secondary">
                      {selectedMovie.runtime} minutes
                    </span>
                    <br />
                    <strong>{selectedMovie.vote_average}/10 </strong>
                  </div>
                </div>
              </div>
            </div>
          ) : isLoadingMovieImdb ? (
            <CardSkeleton />
          ) : (
            ""
          )}
        </div>
      </div>
      <span>
        {selectedMovie && "Below are the recommended movie similar to "}
        <strong>{selectedMovie && selectedMovie.title}</strong>
      </span>
      <div className="ddd">
        {isLoadingMovieImdb ? (
          <div className="cards">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ) : (
          <div className="cards">
            {recommendedMovieList &&
              recommendedMovieList.map((item, index) => {
                return (
                  <div key={index} className="card " style={{ width: "18rem" }}>
                    <div className="card-body">
                      <div className=" d-flex justify-content-center">
                        <img
                          className="card-img-top movie__image"
                          src={
                            item.single_movie.backdrop_path
                              ? tmdb_image_url +
                                "/" +
                                item.single_movie.backdrop_path
                              : images.NoImage
                          }
                          alt={item.single_movie.title}
                        />
                      </div>
                    </div>
                    <div className="card-footer border-top movie_details">
                      <div className="movie_description">
                        <span>{item.single_movie.title} </span>
                        <br />
                        <span className=" text-secondary">
                          {item.single_movie.runtime} minutes
                        </span>{" "}
                        <strong className="text-success">
                          {item.similarity}% match
                        </strong>
                        <br />
                        <strong>{item.single_movie.vote_average}/10 </strong>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieRS;
