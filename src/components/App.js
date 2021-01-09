import axios from "axios";
import React from "react";

class App extends React.Component {
  state = { data: [], ratingData: [] };

  async componentDidMount() {
    const KEY = "apikey=5178c7ef";
    const query = "tt3896198";
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${query}&&${KEY}`
    );
    this.setState({ data: response.data , ratingData: response.data.Ratings });
  }

  render() {
    console.log("Movie Detail", this.state.data);
    // const rating = this.state.ratingData.map( (rating) =>{
    //   return (
    //     <span key={rating.Source} style={{color :'#0a0a0a'}}>
    //       {rating.Source}: {rating.Value});
    //     </span>
    // )})
    const data = this.state.data;
    return (
      <div
        className="ui container grid"
        style={{
          backgroundColor: "",
          padding: "10px 10px 20px 10px",
          height: "250px",
          margin: "0 0 3px 0",
        }}
      >
        <div className="ui row">
          <div className="item">
            <div className="right floated content">
              <img
                alt={data.Title}
                src={data.Poster}
                height="346px"
                width="250px"
              />
            </div>
          </div>
          <div className="column eight wide right ">
            <h3 style={{ color: "#0C0098" }}>
              {data.Title}
              <span
                style={{
                  fontFamily: "cursive",
                  fontSize: "14px",
                  color: "grey",
                  wordSpacing: "0px",
                }}
              >
                ({data.Year})
              </span>
            </h3>
            <p style={{ color: "#646C73" }}>
              <span>{data.Rated}</span> | <span>{data.Runtime}</span> |{" "}
              <span>{data.Genre}</span> |{" "}
              <span>Language : {data.Language}</span>
            </p>
            <div style={{ height: "30px", width: "560px", color: "#646C73" }}>
              ⭐ IMDB Rating :
              <span style={{ color: "black", fontWeight: "bold" }}>
                {data.imdbRating}
              </span>
              | Awards :{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                {" "}
                {data.Awards}
              </span>
            </div>
            <div style={{ color: "darkblack", fontWeight: "bold" }}>
              <span>{data.Plot}</span>
            </div>
            <p style={{ color: "#212121" }}>
              Director :
              <span style={{ color: "#1200DF" }}>{data.Director} </span>| Stars
              : <span style={{ color: "#1200DF" }}> {data.Actors}</span>
            </p>
            <p style={{ color: "#212121" }}>
              Writer: <span style={{ color: "#4A485D" }}> {data.Writer} </span>
            </p>
            <div style={{ color: "#646C73" }}>
              <span>Votes : {data.imdbVotes}</span>|
              <span>Released: {data.Released}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
