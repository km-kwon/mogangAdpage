import { AxiosError } from "axios";
import { message } from "antd";

export const manageEmailError = (error: AxiosError) => {
  console.dir(error);

  switch (error.response?.status) {
    case 400:
      const messageArray = (error.response?.data as { message: string[] })
        ?.message;

      if (messageArray.includes("is-empty")) {
        message.error("이메일이 비어 있습니다!");
      } else if (messageArray.includes("not-email")) {
        message.error("이메일 형식을 확인해주세요!");
      }
      break;

    case 408:
      message.error("다시 입력해주세요!");

    case 409:
      message.error("이미 제출하셨습니다! ");
      break;

    case 500:
      message.error("잠시 후에 다시 시도해주세요!");
      break;

    default:
      message.error("알 수 없는 오류가 발생했습니다.");
  }
};

export const manageOpinionError = (error: AxiosError) => {
  console.dir(error);

  switch (error.response?.status) {
    case 400:
      message.error("내용을 입력해주세요!");
      break;

    case 408:
      message.error("다시 입력해주세요!");

    case 500:
      message.error("잠시 후에 다시 시도해주세요!");
      break;

    default:
      message.error("알 수 없는 오류가 발생했습니다.");
  }
};
