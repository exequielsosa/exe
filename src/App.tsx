import "./styles.css";
import BoxImage from "./BoxImage";
import { mockParcels } from "./services/mocklist";
import Container from "./CardContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <h2>Espero que ande esto</h2>
      <br></br>
      {/* <Layout>
        <Row> */}
      <Container>
        {mockParcels.map((el) => (
          <BoxImage
            imgUrl={el.url}
            title={el.title}
            description={el.list}
            handleClick={() => el.link}
          />
        ))}
      </Container>
      {/* </Row>
      </Layout> */}
      <br></br>
    </div>
  );
}
