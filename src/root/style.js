import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  position: relative;
  border: 1px solid #e6e9ec;
  margin: 0 20px;
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
  border: none;
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
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 10px 0;
  border-bottom: 1px solid #e6e9ec;
  width: 100%;
  border: ${({ wrapper }) => wrapper && "none"};
`;

Content.Title = styled.div`
  color: #696969;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const Icon1 = styled.img`
  width: 19px;
  height: 13.6px;
  margin: 5px 0;
  margin: ${({ several }) => several && "0 15px"};
  width: ${({ several }) => several && "20px"};
  height: ${({ several }) => several && "20px"};
  background-color: ${({ several }) => several && "#F6F8F9"};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cost = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`;

const Price = styled.div``;
const Like = styled.div`
  display: flex;
`;
const Delcost = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;
const Onlycost = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const Icons1 = styled.div`
  width: 35px;
  height: 35px;
  margin: 0 15px;
  background-color: #f6f8f9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const Icon4 = styled.img`
  width: 23px;
  height: 23px;
  & path {
    fill: red;
  }
  :active {
    scale: 0.9;
  }
`;
const Icons2 = styled(Icons1)`
  :active {
    background-color: red;
  }
`;

const Containerr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;
export {
  Containerr,
  Container,
  Wrapper,
  Img1,
  Img2,
  Title,
  Button,
  Content,
  Icon1,
  Icon4,
  Wrap,
  Cost,
  Price,
  Like,
  Delcost,
  Onlycost,
  Icons1,
  Icons2,
};
