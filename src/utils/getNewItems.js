export const getNewItems = (data) => {
  const today = new Date();

  const filteredData = data.filter(
    (item) => today - item.createdDate <= 60 * 60 * 24 * 7 * 1000
  );

  const sortedData = filteredData.toSorted((a, b) => {
    return Number(b.createdDate) - Number(a.createdDate);
  });

  return sortedData;
};
