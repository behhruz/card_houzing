import {
  Container,
  Wrapper,
  Button,
  Img1,
  Img2,
  Title,
  Content,
  Icon1
} from "./style";
import img from "./images/house.jpg";
import User from "./images/massa.jpg";
import icons1 from "./icons/bed.png"
import icons2 from "./icons/bath.png"
import icons3 from "./icons/car.png"
import icons4 from "./icons/ruler.png"


const Hooks = () => (
  <Container>
    <Button>FEATURED</Button>
    <Button right>FOR SALE</Button>
    <Img1 src={img} />
    <Wrapper>
      <Img2 src={User} />
      <Title>New Apartment Nice Wiew</Title>
      <Title description>Quincy St, Brooklyn, NY, USA</Title>
      <Content wrap>
        <Content wrapper>
          <Icon1 src={icons1} />
          <Content.Title description>4 Bed</Content.Title>
        </Content>
        <Content wrapper>
        <Icon1 src={icons2} />
          <Content.Title description>4 Bed</Content.Title>
        </Content>
        <Content wrapper>
        <Icon1 src={icons3} />
          <Content.Title description>4 Bed</Content.Title>
        </Content>
        <Content wrapper>
        <Icon1 src={icons4} />
          <Content.Title description>4 Bed</Content.Title>
        </Content>
      </Content>
    </Wrapper>
  </Container>
);

export default Hooks;
