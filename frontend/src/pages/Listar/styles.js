import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 25px;
  margin-top: 40px;
  height: 630px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  .background_list {
    padding-top: 20px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
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

  .titulo_pagina {
    display: flex;
    justify-content: center;
    margin: 20px;
    font-size: 30px;
    color: #666;
  }

  .background_list {
    text-decoration: none;
    color: black;
  }

  .background_list nav a:hover {
    background: rgb(199, 182, 213);
    transition: 0.5s;
    border-radius: 4px;
    padding: 10px 8px;
  }

  table  {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 2px solid #ddd;
    text-align: center;
    padding: 8px;
  }

  .btn_cadastrar a{
    text-decoration: none;
    background: rgb(102, 102, 223);
    color: #fff;
    font-weight: bold;
    padding: 5px;
    border-radius: 4px;
    transition: 0.5s;
  }

  .icon {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }
`;
