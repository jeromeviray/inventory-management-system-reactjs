import { GET_EMPLOYEES, SAVE_EMPLOYEE } from "../constants";

const employeeReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_EMPLOYEES:
            return {
                status: payload.status,
                action: payload.action,
                data: {
                    employees: payload.data.employees
                }
            }
        case SAVE_EMPLOYEE:
            return {
                status: payload.status,
                action: payload.action,
                data: payload.data
            }
        default:
            return state
    }
}
export default employeeReducer;