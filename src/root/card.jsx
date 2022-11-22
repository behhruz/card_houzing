import {
  Container,
  Wrapper,
  Button,
  Img1,
  Img2,
  Title,
  Content,
  Icon1,
  Icon4,
  Cost,
  Price,
  Like,
  Delcost,
  Onlycost,
  Icons1,
  Icons2
} from "./style";
import img from "./images/house.jpg";
import User from "./images/massa.jpg";
import icons1 from "./icons/bed.png";
import icons2 from "./icons/bath.png";
import icons3 from "./icons/car.png";
import icons4 from "./icons/ruler.png";
import str from "./icons/str.png";
import love from "./icons/love.png";

export const Hooks = () => (
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
          <Content.Title>4 Bed</Content.Title>
        </Content>
        <Content wrapper>
          <Icon1 src={icons2} />
          <Content.Title>5 Baths</Content.Title>
        </Content>
        <Content wrapper>
          <Icon1 src={icons3} />
          <Content.Title>1 Garage</Content.Title>
        </Content>
        <Content wrapper>
          <Icon1 src={icons4} />
          <Content.Title>1200 Sq Ft</Content.Title>
        </Content>
      </Content>
    </Wrapper>
    <Cost>
      <Price>
        <Delcost>
          <del>$2,800/mo</del>
        </Delcost>
        <Onlycost>$7,500/mo</Onlycost>
      </Price>
      <Like>
        <Icons1>
          <Icon1 several src={str} />
        </Icons1>
        <Icons2 loved>
          <Icon4 src={love} />
        </Icons2>
      </Like>
    </Cost>
  </Container>
);

export default Hooks;
