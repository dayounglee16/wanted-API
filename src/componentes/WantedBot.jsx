import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment as faSolidComment } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown as faSolidChevronDown } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon="fa-solid fa-chevron-down" />;

// 메인 페이지) 원티드봇 채팅
const WantedBot = () => {
  const [wantedBotShow, setWantedBotShow] = useState(false);

  return (
    <Wrap>
      <div className="show" onClick={() => setWantedBotShow(!wantedBotShow)}>
        <h1>
          <FontAwesomeIcon
            className="buttons"
            icon={wantedBotShow === true ? faSolidChevronDown : faSolidComment}
            size="xl"
          />
        </h1>
      </div>
      {wantedBotShow && (
        <ModalBox>
          <Title>
            <h2>원티드 BOT</h2>
            <button onClick={() => setWantedBotShow(false)}>
              <FontAwesomeIcon
                className="buttons"
                icon={faSolidChevronDown}
                size="xl"
              />
            </button>
          </Title>
          <div className="time">
            <span>오후 10:46</span>
          </div>
          <Chatting>
            <div className="botImg"></div>
            <div className="message">
              <div>
                <h4>원티드 봇</h4>
                <p>
                  안녕하세요 원티드 Bot입니다.
                  <br />
                  <br />본 챗봇은 실제 상담원 채팅 서비스를 제공하지 않습니다.
                </p>
                <p>
                  남겨진 메세지는 전달되지 않습니다. <br />
                  <br />
                  아래 버튼 중 도움이 필요한 버튼을 선택해 주세요.
                  <button>고객센터 바로가기</button>
                  <button>건의사항</button>
                </p>
                <span>오후 10:46</span>
              </div>
            </div>
          </Chatting>
          <div className="chatInputBox">
            <input type="text" placeholder="메시지 입력" />
            <span>Zendesk로 구축</span>
          </div>
        </ModalBox>
      )}
    </Wrap>
  );
};
export default WantedBot;

// z-index사용 10 ~
const Wrap = styled.div`
  position: relative;

  .show {
    position: fixed;
    right: 2%;
    bottom: 3%;
    width: 60px;
    height: 60px;
    padding-bottom: 5px;
    border-radius: 30px;
    background-color: #000;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }

  h1 {
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px 10px 0 0;

  button {
    background-color: #000;
    font-size: 14px;
    color: #fff;
  }
`;

const ModalBox = styled.div`
  width: 380px;
  height: 700px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border: none;
  position: fixed;
  right: 20px;
  bottom: 11%;
  border-radius: 10px;
  z-index: 50;

  &::backdrop {
    opacity: 0;
  }

  .time {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    margin-top: 10px;
    color: #666;
  }

  .chatInputBox {
    height: 230px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    input {
      width: 100%;
      padding: 10px 15px;
      border-radius: 20px;
      border: 1px solid #666;

      &:focus {
        outline: 2px solid blue;
      }
    }
  }
`;

const Chatting = styled.div`
  display: flex;
  padding: 20px;
  gap: 15px;

  h4 {
    margin-bottom: 10px;
  }

  .botImg {
    background-color: #333;
    width: 45px;
    height: 35px;
    align-self: flex-end;
    margin-bottom: 30px;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      background-color: #eee;
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 90%;
        padding: 10px;
        border-radius: 30px;
        margin-top: 10px;
        background-color: rgb(61, 93, 239);
        color: #fff;

        &:hover {
          background-color: rgb(17, 56, 230);
        }
      }
    }
  }
`;
