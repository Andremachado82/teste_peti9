import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  margin-top: 40px;
  height: 630px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  .cadastro {
    /* padding: 30px; */
  }

  h3 {
    text-align: center;
    color: #666;
    padding-top: 10px;
    margin-bottom: 30px;
    font-size: 30px;
  }

  .input {
    display: block;
    padding: 8px ;

  }

  label {
    width: 250px;
    background: #fff;
    margin: 0px auto;
    color: #333;

    display: block;
    align-items: center;
  }


  input {
    width: 250px;
    height: 30px;
    background: #fff;
    margin: 0 auto;
    color: #333;
    margin-top: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    display: block;
    align-items: center;
  }

  input {
    &::placeholder {
      display: inline-block;
      margin-left: 10px;
    }
  }

  input[type="submit"] {
    border: solid 1px rgb(102, 102, 223);
    background-color: #7159c1;
    color: #fff;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background: #644cb5;
    transition: 0.5s;
  }

  .btn_voltar a {
    text-decoration: none;
    background: rgb(102, 102, 223);
    color: #fff;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    transition: 0.5s;
  }

  .btn_voltar a:hover {
    background: #644cb5;
  }
`;
