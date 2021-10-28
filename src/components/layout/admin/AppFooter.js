import React from "react"
import { CFooter } from "@coreui/react"

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <div>
          <span className="ms-1">&copy; 2021 Inventory Management System.</span>
        </div>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
