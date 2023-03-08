import axios from "axios";
import { useEffect, useState } from "react";
import { PageContainer, ListContainer, MovieContainer } from "./styled";

export function Home({ URL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);
  
  const loadPosts = async () => {
    let response = await (await axios.get(`${URL}/movies`)).data;
    setMovies(response);
    console.log(response)
  }

  return (
    <PageContainer>
      Selecione o filme

      <ListContainer>
        {movies.map(m => (
          <MovieContainer key={m.id}><img src={m.posterURL} alt="Cartaz" /></MovieContainer>
        ))}
      </ListContainer>

    </PageContainer>
  );
}