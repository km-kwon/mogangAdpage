"use client";
import { useState } from "react";

import Main_Body from "./pageStyle";

import axios from "axios";

import { message } from "antd";
import { manageEmailError, manageOpinionError } from "./util/errors";

// TODO : refactor - api 파일 분리하자 !

// ! 배포 시 API URL 수정 필요
const apiUrl = "http://localhost:3001";

// *
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const emailInputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };

  const opinionInputHandle = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;

    setOpinion(value);
  };

  const emailSubmit = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      try {
        const requestData = {
          email: email,
        };
        console.log("req:", requestData);

        const response = await axios.post(`${apiUrl}/email`, requestData);

        if (response.data.ok) {
          message.success("이메일 등록 성공!");
        }

        console.log("Response Data:", response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) manageEmailError(e);
      }

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 2000);
    }
  };
  const opinionSubmit = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);

      try {
        const requestData = {
          opinion: opinion,
        };
        console.log("req:", requestData);

        const response = await axios.post(`${apiUrl}/opinion`, requestData);

        if (response.data.ok) {
          message.success("의견 등록 성공!");
        }

        console.log("Response Data:", response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) manageOpinionError(e);
      }

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 2000);
    }
  };

  const isSubmitButtonEnabled = email !== "" && checked;

  const isOpinionButtonEnabled = opinion.trim() !== "";

  return (
    <Main_Body>
      <div id="first_introduction">
        <div>
          <span className="color1">모</span>
          <span className="color2">든 </span>
          <span className="color1">강</span>
          <span className="color2">의가 모였다!</span>
        </div>
        <span className="color3" id="title">
          모 강
        </span>
        <span id="subIntroduction">
          “당신의 강의 선택이 합리적인 선택이 되도록”
        </span>
      </div>
      <div className="blueBack">
        <span className="title_1">나에게 딱 맞는 강의 찾아보기</span>
        <img src="/main1.png" alt="첫번째 예시 화면입니당." className="image" />
        <div className="explain_1">
          <span>강의 옵션을 설정하여 </span>
          <span className="color3">원하는 강의를 한눈에</span>
        </div>
        <span
          style={{
            margin: "0 0 1rem 0",
            fontSize: "1.2rem",
            fontWeight: "800",
          }}
        >
          모두 모아 볼 수 있습니다
        </span>
      </div>
      <div className="whiteBack">
        <span className="title_1">강의 상세정보 보기</span>
        <img src="/main2.png" alt="첫번째 예시 화면입니당." className="image" />
        <div className="explain_1">
          <span>모강은 </span>
          <span className="color3">강의 및 가격변화</span>
          <span>를</span>
        </div>
        <span
          style={{
            margin: "0 0 1rem 0",
            fontSize: "1.2rem",
            fontWeight: "800",
          }}
        >
          상세적으로 보여주어 합리적으로 소비를 돕습니다
        </span>
      </div>
      <div className="blueBack">
        <span className="title_1">강의 비교하기</span>
        <img src="/main3.png" alt="첫번째 예시 화면입니당." className="image" />
        <div className="explain_1">
          <span className="color3">비슷한 강의를 비교</span>

          <span>하여</span>
        </div>
        <span
          style={{
            margin: "0 0 1rem 0",
            fontSize: "1.2rem",
            fontWeight: "800",
          }}
        >
          보다 강의를 선택하는데 도움을 제공합니다
        </span>
      </div>
      <div id="alarm">
        <div className="name">
          <img src="/bell.png" alt="벨" className="icon" />
          <span className="title_2">웹 런칭시 알림 받기</span>
        </div>
        <div className="inputContainer">
          <input
            type="email"
            className="input"
            value={email}
            placeholder="알림 받을 메일을 적어주세요"
            onChange={emailInputHandle}
          />

          <button
            onClick={emailSubmit}
            className={`submitBtn1 ${isSubmitButtonEnabled ? "" : "disabled"}`}
            disabled={isButtonDisabled || !isSubmitButtonEnabled}
          >
            전송
          </button>
        </div>
        <div id="agree">
          <div>
            <span>개인정보보호 동의</span>
            <span>(전송 후 일괄 폐기됩니다)</span>
          </div>
          <input
            type="checkbox"
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
        </div>
      </div>
      <div id="message">
        <div className="name">
          <img src="/message.png" alt="벨" className="icon" />
          <span className="title_2">여러분의 이야기를 듣고 싶습니다</span>
        </div>
        <span className="subexplain">
          필요하시거나 원하시는 기능을 말씀해주세요!
        </span>
        <div id="inputContainer">
          <textarea
            className="input_information"
            placeholder="예시. 커리큘럼 추천, 포트폴리오 공유 등"
            value={opinion}
            onChange={opinionInputHandle}
            minLength={10} // !
          ></textarea>
        </div>
        <button
          onClick={opinionSubmit}
          className={`submitBtn2 ${isOpinionButtonEnabled ? "" : "disabled"}`}
          disabled={isButtonDisabled || !isOpinionButtonEnabled}
        >
          전송
        </button>
      </div>
    </Main_Body>
  );
}
