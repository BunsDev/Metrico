// HELPER FUNCTION TO TURN MONTH AS NO. TO MONTH AS ABBR.
export const monthEstToAbbr = (monthEst: string | number) => {
	switch (monthEst) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
		default:
			return 'N/A';
	}
}

// calculate 1 today's date and 1 year ago today, return them as strings
export const setChartDataInterval = (numDaysPriceData: number) => {
	// get todays date and format as API-friendly string
	let now = new Date()
	let todayDate = now.getUTCDate()
	let todayMonth = now.getUTCMonth() + 1
	let thisYear = now.getUTCFullYear()

	// get max # of days ago that API call returns data for (256 days aka ~8 months) and format as API-friendly string
	const past = new Date()
	past.setDate((past.getDate() - numDaysPriceData))
	let maxDaysAgoDate = past.getDate()
	let maxDaysAgoMonth = past.getMonth() + 1
	let maxDaysAgoYear = past.getUTCFullYear()

	if (todayDate < 10) todayDate = 0 + todayDate

	if (todayMonth < 10) todayMonth = 0 + todayMonth

	if (maxDaysAgoDate < 10) maxDaysAgoDate = 0 + maxDaysAgoDate

	if (maxDaysAgoMonth < 10) maxDaysAgoMonth = 0 + maxDaysAgoMonth

	let today = `${thisYear}-${todayMonth}-${todayDate}`
	let maxInterval = `${maxDaysAgoYear}-${maxDaysAgoMonth}-${maxDaysAgoDate}`

	return [today, maxInterval]
}

export const formatArticleDate = (articleDate: string) => {
	return new Date(articleDate).toLocaleString([], {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})
}