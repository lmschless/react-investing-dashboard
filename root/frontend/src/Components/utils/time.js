import moment from 'moment';

export const formatTimeFromNow = (timestamp) => {
	return moment(timestamp).fromNow();
};

export const currentTime = () => {
	return moment().toDate().getTime();
};
