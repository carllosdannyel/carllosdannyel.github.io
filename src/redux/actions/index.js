export const SAVE_NAME = "SAVE_NAME";

export const sendNameData = (nameData) => ({
  type: SAVE_NAME,
  payload: { ...nameData },
});
