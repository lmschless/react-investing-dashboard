import moment from 'moment';

export const formatTimeFromNow = (timestamp) => {
	return moment(timestamp).fromNow();
};
