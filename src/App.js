import Container from "./Container";
import Header from "./Container/Header";
import Form from "./Container/Form";
import Footer from "./Container/Footer";


function App() {
  
  return (
    <Container>
      <Header title="Kalkulator walut"></Header>
      <Form />
      <Footer author="Dominik Blak 2021"></Footer>
    </Container>
  );
}

export default App;
