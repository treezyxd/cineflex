import { PageContainer, ListContainer, MovieContainer } from "./styled";

export function Home() {
  return (
    <PageContainer>
      Selecione o filme

      <ListContainer>
          <MovieContainer>
              <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
          </MovieContainer>

          <MovieContainer>
              <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
          </MovieContainer>

          <MovieContainer>
              <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
          </MovieContainer>

          <MovieContainer>
              <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
          </MovieContainer>
      </ListContainer>

    </PageContainer>
  );
}