import dayjs from "dayjs";

export function add(a, b) {
	console.log("this is shared");
	return a + b;
}

export function formatDate(date) {
	return dayjs(date).format("YYYY-MM-DD");
}
