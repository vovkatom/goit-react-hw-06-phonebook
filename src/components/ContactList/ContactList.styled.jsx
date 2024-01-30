import styled from '@emotion/styled';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


export const Box = styled.ul`
  width: 100%;
  border-top: 2px solid #006400;
  margin: 20px auto;
  padding: 5px;
  list-style: none;
  font-size: 18px;
`;
export const List = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 30px repeat(2, 240px) 100px;
  margin-bottom: 8px;
`;
export const ContactName = styled.span`
  min-width: 120px;
  margin-right: 10px;
  color: blue;
  animation: colorChange 2700ms infinite; 
`;
export const ContactNumber = styled.span`
  min-width: 150px;
  margin-right: 10px;
  color: #2d2d2d;
  font-size: 20px;
`;

export const Btn = styled.button`
  border: none;
  width: 90px;
  padding: 0 5px;
  cursor: pointer;

  font-size: 18px;
  border-radius: 4px;
  color: #ff4500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${getRandomColor};
  animation: colorChange 1700ms infinite; 

  &:hover {
    color: red;
  }

  @keyframes colorChange {
    0% {
      color: ${getRandomColor}; 
    }
    50% {
      color: ${getRandomColor}; 
    }
    100% {
      color: ${getRandomColor}; 
    }
  }
`;