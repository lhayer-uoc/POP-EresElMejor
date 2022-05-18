const getPercentage = (endDate, challengeDays) => {
  const today = Date.now();
  const finishChallengeDate = endDate.toDate().getTime();
  const dayConversor = 24 * 60 * 60 * 1000;
  if (today > finishChallengeDate) return 100;

  const restOfDays = Math.floor((finishChallengeDate - today) / dayConversor);
  const completedDays = challengeDays - restOfDays;

  if (completedDays === 0) return 0;

  return (completedDays * 100) / challengeDays;
};

export const challengeToDto = (data) => {
  return {
    id: data.id,
    percentage: getPercentage(data.endDate, data.time),
    title: data.title ?? "",
    description: data.description ?? "",
    periodicity: data.periodicity,
    time: data.time ?? 0,
    category: data.category,
    image: data.image ?? "",
  };
};
