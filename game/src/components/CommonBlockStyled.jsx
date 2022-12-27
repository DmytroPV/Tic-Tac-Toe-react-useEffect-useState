import styled from 'styled-components'

import ImgBac from '../img/ImgBac.png'

export const ClearButton = styled.button`
    width: 200px;
    height: 60px;
    border: solid 2px rgb(177, 156, 0);
    background-color: #0fe30f;
    margin: 30px auto;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
`;

export const BalsTitle = styled.h3`
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px auto;
`;

export const Bals = styled.div`
    width: 100px;
    height: 30px;
    border: solid 1px #28271e;
    background-color: #9ba3a3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    font-family: system-ui;
`;

export const WrapperBlock = styled.div`
    width: 285px;
    height: 285px;
    border-radius: 8px;
    border: solid 10px #246a86;
    background-image: url(${ImgBac}); 
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

export const Cell = styled.div`
    width: 85px;
    height: 85px;
    border: solid 2px #28271e4d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    font-weight: bolder;
    font-family: cursive;
    &:hover{
       box-shadow: 0 0 8px rgb(0 0 0 / 60%);
       filter: brightness(90%);
    }
`;

export const ColorWin = styled(Cell)`
   background-color: #0bdb13;
   background-image: none; 
   &:hover{
      background-image: none; 
      background-color: #0bdb13;
   }
`;