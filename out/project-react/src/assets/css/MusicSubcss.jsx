import styled from "styled-components";

export const ListDiv = styled.div`
  height: 100%;
  background-color: #000;
  box-sizing: border-box;
  overflow: hidden;

  p h2 {
    font-size: 50px;
    text-align: center;
    padding: 80px;
    position: relative;
    left: 5%;
    color: rgb(217, 217, 217);
  }
  ul {
    height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    margin: 40px;
    color: rgb(217, 217, 217);
    position: relative;
    left: 5%;
    li {
      height: 100px;
      display: flex;
      align-items: center;
      padding: 0 25px;
      min-width: 100px;
      height: 100%;
      cursor: pointer;
      font-size: 25px;
      a {
        font-size: 25px;
        padding: 0 25px;
        color: rgb(217, 217, 217);
      }
    }
    li:hover {
      color: red;
      a {
        color: red;
      }
    }
  }
  form {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px;
    left: 5%;
    input {
      width: 700px;
      height: 60px;
      border-radius: 30px;
      border: 1px solid #222;
      text-indent: 50px;
      font-size: 20px;
      outline: none;
    }
    button {
      background-color: transparent;
      border: none;
      font-size: 40px;
      position: relative;
      right: 60px;
      width: 20px;
      height: 20px;
      transform: translateY(50%);
    }
  }
  table {
    margin: 0 auto;
    width: 60%;
    position: relative;
    left: 5%;
    caption {
      display: none;
    }
    .NO {
      width: 80px;
    }
    .table_editor {
      width: 48px;
    }
    thead {
      display: none;
    }
    tbody {
      tr {
        height: 150px;
        border-bottom: 1px solid;
        td {
          text-align: left;
          vertical-align: middle;
          font-size: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          color: rgb(217, 217, 217);
          a {
            font-size: 20px;
            color: rgb(217, 217, 217);
          }
        }
        td:hover {
          a {
            color: rgb(51, 51, 51);
            font-size: 25px;
            font-weight: 700;
          }
        }
      }
      td:nth-child(3),
      td:nth-child(4) {
        font-size: 13px;
        color: rgb(217, 217, 217);
      }
      td:nth-child(1) {
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
  p {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    position: relative;
    left: 5%;
    button {
      width: 320px;
      height: 50px;
      font-size: 12px;
      font-weight: 700;
      background-color: transparent;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 20px;
      color: rgb(217, 217, 217);
    }
  }
`;
export const ListQnaDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 100px;
  background-color: #000;
  overflow: hidden;

  ul {
    height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    padding: 40px 0;

    li {
      height: 100px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      min-width: 100px;
      height: 100%;
      cursor: pointer;
      font-size: 25px;
      color: rgb(217, 217, 217);
      a {
        font-size: 25px;
      }
    }
    .QnaMenu:hover {
      color: red;
    }
  }
  table {
    margin: 50px auto;
    width: 60%;
    caption {
      display: none;
    }
    .table_No {
      width: 120px;
    }
    .tableQna_title {
      text-align: center;
    }
    thead {
      height: 40px;
      tr {
        border-top: 2px solid rgb(235, 235, 235);
        border-bottom: 1px solid rgb(217, 217, 217);
        th {
          font-size: 12px;
          vertical-align: middle;
        }
      }
    }
    tbody {
      tr {
        height: 100px;
        border-bottom: 1px solid rgb(235, 235, 235);
        td {
          vertical-align: middle;
          position: relative;
          color: rgb(217, 217, 217);
          strong {
            display: block;
          }
          strong.on {
            height: 50px;
            width: 100%;
            padding: 20px 0;
            text-indent: 20px;
            background-color: #222222;
            font-size: 24px;
            border-bottom: 1px solid darkgray;
          }
          p {
            position: absolute;
            right: 3%;
            top: 50%;
            transform: translateY(-50%);
            font-size: 15px;
            color: gray;
          }
          p.on {
            position: absolute;
            right: 3%;
            top: 20px;
            transform: translateY(-50%);
            font-size: 15px;
            color: gray;
          }
          ul {
            display: none;
            flex-direction: column;
            li {
              font-size: 12px;
              line-height: 2;
              display: flex;
              justify-content: left;
              display: flex;
              width: 80%;
              padding-left: 20px;
              color: lightgray;
              img {
                width: 100px;
                height: 100px;
              }
            }
          }
        }
      }
      tr td:first-child {
        text-align: center;
        font-weight: 700;
      }
      tr td:nth-child(2) ul.on {
        background-color: #222222;
        font-size: 14px;
      }
      tr td:first-child ul.on {
        background-color: #333333;
      }
      ul.on {
        display: flex;
        height: 150px;
        padding: 50px 0;
      }
    }
  }
  .prev {
    padding: 50px 0;
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 320px;
      height: 50px;
      font-size: 12px;
      font-weight: 700;
      background-color: transparent;
      border: 1px solid rgb(235, 235, 235);
      border-radius: 20px;
      color: rgb(217, 217, 217);
    }
  }
`;

export const LoginDivBG = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  overflow: hidden;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    left: 5%;
  }
  form {
    width: 700px;
    height: 500px;
    border: 1px solid rgb(217, 217, 217);
    margin: auto;
    padding: 50px 120px;
    box-sizing: border-box;
    position: relative;
    left: 5%;

    input[type="text"] {
      width: 440px;
      height: 60px;
      border: none;
      border-bottom: 1px solid rgb(217, 217, 217);
      font-size: 16px;
      font-weight: 700;
      color: rgb(217, 217, 217);
      outline: none;
      margin-bottom: 10px;
      background-color: transparent;
    }
    input::placeholder {
      color: rgb(235, 235, 235);
      font-size: 16px;
    }
    .login_submit {
      width: 410px;
      height: 110px;
      padding-top: 20px;

      input[type="checkbox"] {
        width: 15px;
        height: 15px;
        margin-left: 10px;
      }

      label {
        font-size: 14px;
        color: rgb(24, 24, 24);
        margin-left: 15px;
        color: rgb(217, 217, 217);
      }
      .Login_Btn {
        width: 440px;
        height: 60px;
        margin-top: 30px;
        background-color: rgb(63, 63, 255);
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
      }
    }
    .LoginJoin_btn {
      position: absolute;
      right: 140px;
      transform: translateY(50%);
      a {
        color: rgb(217, 217, 217);
      }
    }
    .Login_type {
      display: flex;
      margin-top: 70px;
      justify-content: center;
      button {
        width: 215px;
        height: 60px;
        font-size: 14px;
        font-weight: 700;
        color: #fff;
        border: none;
        margin-right: 10px;
        border: 1px solid rgb(235, 235, 235);
      }
      button:first-child {
        background-color: rgb(51, 51, 51);
        color: #fff;
        border: none;
      }
      button:last-child {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;

export const JoinConditionsBG = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  margin: auto;
  overflow: hidden;

  h2 {
    text-align: center;
    position: relative;
    left: 5%;
    img {
      width: 80px;
      height: 60px;
      margin: 20px 0;
    }
  }
  form {
    width: 600px;
    height: 600px;
    margin: auto;
    padding: 60px 120px;
    border: 1px solid rgb(217, 217, 217);
    position: relative;
    left: 5%;
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      padding-bottom: 30px;
      border-bottom: 1px solid rgb(217, 217, 217);
      color: #fff;
    }
    div {
      margin-top: 20px;
      height: 40px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      font-size: 16px;
      input {
        width: 15px;
        height: 15px;
        margin-right: 15px;
      }
      strong {
        position: absolute;
        right: 0;
        a {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }
      }
      label {
        p {
          display: inline;
          color: rgb(63, 63, 255);
          font-weight: 700;
          margin-right: 10px;
        }
        span {
          color: lightgray;
        }
      }
      .total {
        font-size: 16px;
        font-weight: 700;
      }
      em {
        display: block;
        margin-left: 35px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        font-weight: 700;
      }
    }
    div:last-of-type {
      padding-top: 20px;
      border-top: 1px solid rgb(217, 217, 217);
      span {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  p {
    margin: 70px 0;
    text-align: center;
    button {
      width: 480px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }
`;
export const JoinTable = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  margin: auto;
  overflow: hidden;

  div {
    width: 900px;
    height: 100%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    left: 3%;
    h2 {
      text-align: center;
      position: relative;
      left: 3%;
      img {
        width: 80px;
        height: 60px;
        margin: 20px 0;
      }
    }
    form {
      padding: 60px 120px;
      border: 1px solid rgb(217, 217, 217);
      text-align: center;
      h3 {
        font-size: 50px;
        font-weight: 70;
        color: #fff;
        margin-bottom: 50px;
      }
      div {
        position: relative;
        width: 100%;
        color: #fff;
        input {
          width: 560px;
          height: 60px;
          border: none;
          border-bottom: 1px solid rgb(235, 235, 235);
          font-size: 20px;
          font-weight: 700;
          font-weight: normal;
          color: rgb(217, 217, 217);
          outline: none;
          margin-bottom: 10px;
          background-color: transparent;
        }
        input::placeholder {
          font-size: 18px;
          font-weight: 600;
          color: rgb(217, 217, 217);
        }
        p {
          display: block;
          width: 380px;
          margin: 20px;
          text-align: left;
          font-size: 14px;
          padding-left: 30px;
          color: lightgray;
        }
        .emil {
          width: 260px;
          height: 60px;
          margin-right: 10px;
          outline: none;
          border-bottom: 1px solid rgb(217, 217, 217);
          color: rgb(217, 217, 217);
        }
        select {
          width: 260px;
          height: 60px;
          margin-left: 10px;
          outline: none;
          border: none;
          border-bottom: 1px solid rgb(217, 217, 217);
          font-size: 18px;
          font-weight: 700;
          color: rgb(217, 217, 217);
          background-color: transparent;
        }
      }
      .Certified {
        position: relative;
        width: 580px;
        height: 60px;
        background-color: #3f3fff;
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        margin: 50px auto;
        line-height: 3;
        left: 3%;
      }
    }
  }
`;
export const LoginComplet = styled.div`
  width: 100%;
  height: 800px;
  background-color: #000;
  overflow: hidden;

  div {
    padding: 50px 40px;
    width: 1200px;
    height: 500px;
    margin: auto;
    border: 1px solid rgb(217, 217, 217);
    box-sizing: border-box;
    position: relative;
    left: 8%;
    top: 15%;
    text-align: center;

    h2 {
      font-size: 60px;
      color: #3f3fff;
    }
    h3 {
      font-size: 50px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
      color: #fff;
    }
    strong {
      margin: auto;
      display: block;
      width: 50%;
      font-size: 18px;
      color: rgb(51, 51, 51);
    }
  }
  p {
    button {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translatex(-50%);
      width: 220px;
      height: 60px;
      background-color: #3f3fff;
      border: none;
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 30px 0;
    }
  }
`;
export const StorageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0 50px 150px;
  position: relative;
  box-sizing: border-box;
  h2 {
    font-size: 25px;
    font-weight: 700;
    text-align: left;
    padding: 30px 0;
    color: rgb(217, 217, 217);
  }
  .playList,
  .playList2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 250px;
    position: relative;
    border-bottom: 1px solid rgb(217, 217, 217);
    .storageBox {
      width: 250px;
      height: 250px;
      background-color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 120px;
      color: #800000;
    }
    .storageBox2 {
      width: 250px;
      height: 250px;
      background-color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 80px;
      color: #000;
    }

    p {
      font-size: 20px;
    }
    strong {
      font-size: 30px;
      font-weight: normal;
    }
  }
  .table1,
  .table2 {
    width: 90%;
    height: 100%;
    text-align: left;
    margin: 50px 0;
    caption {
      display: none;
    }
    thead {
      tr {
        th {
          width: 100px;
          font-weight: 700;
          font-size: 14px;
          display: none;
        }
        th:nth-child(3) {
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        width: 80px;
        white-space: nowrap;
        height: 80px;
        img {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
        button {
          width: 140px;
          height: 50px;
          background-color: #000;
          border: 1px solid #202020;
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          padding: 0;
          text-align: center;
        }
        p {
          font-size: 16px;
          font-weight: 700;
        }
      }
      td:nth-child(3) {
        text-align: center;
      }
    }
  }
`;
export const ListItemDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 100px 0;
  overflow: hidden;
  div {
    width: 80%;
    margin: auto;
    position: relative;
    left: 3%;
    text-align: center;
    h2 {
      font-size: 40px;
      text-align: center;
      position: relative;
      left: 3%;
      padding-bottom: 50px;
      color: rgb(235, 235, 235);
    }
    .item_textbox {
      display: flex;
      height: 50px;
      align-items: center;
      width: 100%;
      border-top: 3px solid rgb(235, 235, 235);
      border-bottom: 1px solid rgb(51, 51, 51);
      p {
        margin-right: 20px;
        color: lightgray;
      }
    }

    .info {
      width: 50%;
      text-align: center;
      padding: 50px 0;
      img {
        margin-bottom: 10px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 80%;

        strong {
          color: rgb(235, 235, 235);
          font-size: 12px;
          display: block;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          font-weight: 700;
          margin: 20px 0;
          color: #fff;
        }
      }
      p {
        font-size: 18px;
        margin: 20px 0;
        color: #fff;
      }
    }

    .button_onprev {
      padding: 30px 0;
      width: 100%;
      position: relative;
      left: 3%;
      border-top: 1px solid rgb(51, 51, 51);
      margin: auto;
      button {
        width: 240px;
        height: 60px;
        background-color: #3f3fff;
        border: none;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        position: absolute;
        left: 52%;
        transform: translateX(-50%);
      }
    }
  }
`;
export const FooterDiv = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  box-sizing: border-box;
  background-color: #111111;
  padding: 40px 25px 0 25px;
  z-index: 1;
  ul {
    display: flex;
    li {
      color: #666;
      p {
        display: inline;
        color: #999;
      }
    }
  }
  ul:last-child {
    margin: 25px 0;
    li {
      margin-right: 15px;
      a {
      }
    }
  }
`;
export const Membership = styled.div`
  width: 60%;
  margin: auto;
  h2 {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    margin: 50px 0;
  }
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    margin: 80px 0;
  }
  .textLi {
    text-align: center;
    margin-bottom: 50px;
    padding: 0;
    li {
      font-size: 15px;
      font-weight: normal;
      border: 1px solid red;
      border-radius: 20px;
      list-style-type: none;
      strong {
        display: block;
      }
      span {
        display: inline;
        font-size: 23px;
        font-weight: 700;
      }
      p {
        display: inline;
        font-size: 12px;
        color: darkgray;
      }
    }
  }
  ul {
    padding-left: 30px;
    li {
      font-size: 15px;
      font-weight: lighter;
      line-height: 2;
      list-style-type: disc;

      span {
        color: red;
      }
    }
  }
  p {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 120px;
      height: 50px;
      background-color: transparent;
      font-size: 20px;
    }
    button:first-child {
      color: #fff;
      border: 1px solid #fff;
      margin-right: 30px;
    }
    button:last-child {
      color: #fff;
      background-color: #0a22fb;
      border: none;
    }
  }
`;
export const Lyricstext = styled.div`
  color: gray;
  font-size: 15px;
  margin: 50px 0;
  width: 900px;
  @media (max-width: 1400px) {
    width: 700px;
  }
  line-height: 3;
  overflow:hidden;
  text-overflow: ellipsis;
`;
export const Longbut = styled.div`
  width: 900px;
  height: 60px;
  @media (max-width: 1400px) {
    width: 700px;
  }
  button{
    margin: 0 0 0 30px;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    font-size: 18px;
    background: none;
    color: white;
    border: 1px solid #1a1a1a;
  }
`
export const FooterPage = styled.div`
  line-height: 2.5;
  width: 80%;
`;
