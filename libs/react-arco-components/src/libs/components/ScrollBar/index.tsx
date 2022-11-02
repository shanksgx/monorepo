import React, { CSSProperties } from "react"
import { Scrollbars } from 'rc-scrollbars'

const ScrolBar: React.FC<{
  autoHide?: boolean,
  content: React.ReactNode,
  barStyle?: CSSProperties
}> = ({
  autoHide = false,
  content,
  barStyle = { width: 500, height: 300 }
}) => {
    return (
      <Scrollbars
        autoHide={autoHide}
        style={barStyle}
      >
        {content}
      </Scrollbars>
    )
  }

export default ScrolBar
