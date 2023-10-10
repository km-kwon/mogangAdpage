import styled from "styled-components";

const color1 = "#3899ff";
const color2 = "#71b6ff";
const color3 = "#007bfb";
const color4 = "#005fc1";
const backColor = "#f4f7ff";

const Main_Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .color1 {
    color: ${color1};
  }
  .color2 {
    color: ${color2};
  }
  .color3 {
    color: ${color3};
  }
  .color4 {
    color: ${color4};
  }

  .blueBack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${backColor};
    width: 100%;
    font-weight: 800;
    padding: 0.5rem 0 0.5 rem 0;
  }
  .whiteBack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 800;
  }
  .image {
    width: 95%;
  }

  #first_introduction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #first_introduction div {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 1rem 0 0 0;
  }
  #title {
    font-size: 3.5rem;
    font-weight: 800;
    margin: 0.5rem 0 0.5rem 0;
  }
  #subIntroduction {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
  }

  #alarm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 3rem 0;
    width: 80%;
  }
  #message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 3rem 0;
    width: 80%;
  }
  #agree {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: gray;
    margin: 1rem 0 1rem 0;
    width: 100%;
    font-size: 0.8rem;
  }
  #agree input {
    height: 1.3rem;
    width: 1.3rem;
    margin: 0 0 0 1rem;
  }
  #agree div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title_1 {
    color: ${color4};
    font-weight: 900;
    font-size: 1.8rem;
    margin: 1.5rem 0 1rem 0;
  }
  .title_2 {
    font-weight: 900;
    font-size: 1.8rem;
  }
  .explain_1 {
    font-size: 1.2rem;
    font-weight: 800;
    margin: 1rem 0 0 0;
  }
  .icon {
    width: 3rem;
    height: 3rem;
  }
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0 0.5rem 0;
  }
  .inputContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: 1px solid #b5b5b5;
    border-radius: 1rem;
    width: 100%;
  }
  #inputContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: 1px solid #b5b5b5;
    border-radius: 1rem;
    width: 100%;
  }
  .input {
    height: 1.5rem;
    width: 80%;
    border: none;
    outline: none;
    font-size: 1.3rem;
  }
  .input::placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .input_information {
    height: 7rem;
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.3rem;
  }
  .input_information::placeholder {
    color: #919191;
  }
  .submitBtn1 {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    border: none;
    color: white;
    background-color: ${color3};
    width: 4rem;
    height: 2.5rem;
  }
  .submitBtn2 {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    color: white;
    background-color: ${color3};
    padding: 0.5rem;
    width: 4rem;
    height: 2.5rem;
    border: none;
    margin: 1rem 0 0 auto;
  }
  .subexplain {
    color: #3e3e3e;
    font-weight: 800;
    margin: 0.2rem 0 1rem 0;
  }
`;

export default Main_Body;
