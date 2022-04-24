export const challengeToDto = data => {
	return {
		id: data.id,
		percentage: data.percentage ?? 0,
		title: data.title ?? '',
		description: data.description ?? '',
		periodicity: data.periodicity,
		time: data.time ?? 0,
		category: data.category,
	};
};
