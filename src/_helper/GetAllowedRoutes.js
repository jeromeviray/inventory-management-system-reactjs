import { intersection } from 'lodash';
import { useSelector } from 'react-redux';
import { Roles } from 'src/router/config';

const isArrayWithLength = (arr) => {
	return (Array.isArray(arr) && arr.length)
}

const GetAllowedRoutes = (routes) => {
	const credentials = useSelector((state) => state.userResponse.credentials);
	const roles = [Roles.CUSTOMER];

	return routes.filter(({ permission }) => {
		if (!permission) return true;
		else if (!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	})
}

export default GetAllowedRoutes



