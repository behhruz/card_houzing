import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  position: relative;
  border: 1px solid #e6e9ec; ;
`;
const Button = styled.div`
  position: absolute;
  background: ${({ right }) => (right ? "#0D263B" : "#0061df")};
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  width: 70px;
  height: 23;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 12px;
  gap: 10px;
  color: white;
  border-radius: 3px;
  left: ${({ right }) => !right && "20px"};
  right: ${({ right }) => right && "20px"};
  top: ${({ right }) => !right && "20px"};
  top: ${({ right }) => right && "20px"};
`;

const Wrapper = styled.div`
  position: relative;
`;

const Img1 = styled.img`
  width: 100%;
  max-width: 380px;
  max-height: 220px;
`;
const Img2 = styled.img`
  width: 100%;
  max-width: 38px;
  max-height: 38px;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
  right: 22px;
  margin-top: -19px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  color: #0d263b;
  margin-top: ${({ description }) => !description && "24px"};
  margin-bottom: ${({ description }) => description && "16px"};
  font-size: ${({ description }) => description && "14px"};
  color: ${({ description }) => description && "#696969"};
  margin-left: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ wrap }) => (wrap ? "row" : "column")};
`;
Content.Title = styled(Title)`
  margin: 0;
`;

const Icon1 = styled.img`
  width: 19px;
  height: 13.6px;
  margin-left: 22px;
`;
export { Container, Wrapper, Img1, Img2, Title, Button, Content, Icon1 };
