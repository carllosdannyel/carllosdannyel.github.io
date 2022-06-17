export const SEND_SAVE_NAME = "SEND_SAVE_NAME";

export const sendNameData = (nameData) => ({
  type: SEND_SAVE_NAME,
  payload: { ...nameData },
});
