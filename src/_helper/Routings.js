import { intersection } from 'lodash';

const Routings = {
	isArrayWithLength(arr) {
		return (Array.isArray(arr) && arr.length)
	},

	getAllowedRoutes(routes, permission) {
		const roles = [permission];
		console.log(permission)
		return routes.filter(({ permission }) => {
			if (!permission) return true;
			else if (!this.isArrayWithLength(permission)) return true;
			else return intersection(permission, roles).length;
		})
	}
}

export default Routings



