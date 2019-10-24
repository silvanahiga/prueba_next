import React from "react";
import axios from "axios"
const API_KEY = "a70dbfe19b800809dfdd3e89e8532c9e";

class Movies extends React.Component {
  static async getInitialProps({ req, query }){
    let id;
    if(req){
      id = req.params.id
    }else {
      id = query.id
    }
    const movies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`)
    console.log(movies.data.results)
    return{
      movies: movies.data.results
    }
  }



  render() {
    return (
      <div>
        <p>movie</p>
        {this.props.movies.map((m)=>
        
        <div>

<p>{m.id}</p>
<p>{m.name}</p>
<img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + m.poster_path}/>

        </div>
        
        
        )}


      </div>
    )
  }
}

export default Movies