export const getSaleItems = (data) => {
  return data.filter((item) => item.tag.includes("SALES"));
};
