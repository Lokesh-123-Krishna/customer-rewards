export const getMonthKey = (date) => {
  const parsedDate = new Date(date);

  return parsedDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
};

export const getMonthShortName = (date) => {
  return new Date(date).toLocaleString("default", {
    month: "short",
  });
};

export const sortByDateDescending = (transactions = []) => {
  return [...transactions].sort(
    (firstTransaction, secondTransaction) =>
      new Date(secondTransaction.date) - new Date(firstTransaction.date),
  );
};

export const getRecentMonths = (numberOfMonths = 3) => {
  const months = [];

  const currentDate = new Date();

  for (let index = 0; index < numberOfMonths; index += 1) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - index,
      1,
    );

    months.push(
      date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      }),
    );
  }

  return months;
};
