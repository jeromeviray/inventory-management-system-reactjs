import { SET_SIDEBAR } from "../redux/constants"

export const sideBarChange = (sidebarState) => async (dispatch) => {
  dispatch({
    type: SET_SIDEBAR,
    payload: {
      status: 200,
      data: {
        sidebarState: sidebarState,
      },
    },
  })
}

// export const sidebarUnfoldChange = (sidebarUnfoldable) => async (dispatch) => {
//   dispatch({
//     type: SET_SIDEBAR_UNFOLD,
//     payload: {
//       status: 200,
//       data: {
//         sidebarUnfoldable: sidebarUnfoldable,
//       },
//     },
//   })
//}
