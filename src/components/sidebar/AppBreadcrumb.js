import React from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from 'src/router/config/routes'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
// import { useSelector } from 'react-redux'
// import GetAllowedRoutes from 'src/_helper/GetAllowedRoutes'
import Routings from 'src/_helper/Routings'
import { connect, useSelector } from 'react-redux'

const AppBreadcrumb = (props) => {
  const roles = useSelector((state) => state.userResponse.credentials.roles.roleName)
  const currentLocation = useLocation().pathname


  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    if (!currentRoute) return null;
    return currentRoute.name
  }

  const getBreadcrumbs = (location) => {
    const allowedRoutes = Routings.getAllowedRoutes(routes, roles);

    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      breadcrumbs.push({
        pathname: currentPathname,
        name: getRouteName(currentPathname, allowedRoutes),
        active: index + 1 === array.length ? true : false,
      })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      {/* <CBreadcrumbItem href="/">Admin</CBreadcrumbItem> */}
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
