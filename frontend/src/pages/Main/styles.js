import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 60px auto;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 30px;
    font-weight: bold;

    display: flex;
    justify-content: center;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {    
    border: 0;
    background: #7159c1;
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
    padding: 0 20px;
    margin-top: 20px;
    border-radius: 4px;
    height: 30px;
  }
  button:hover {
    background: #644cb5;
  }


`