import React from 'react'

const Layout = props => (
  <div
    style={{
      width: props.width ? props.width : 'auto',
      height: props.height ? props.height : 'auto',
      margin: props.margin ? props.margin : `0 $space`,
      padding: props.padding ? props.padding : `0 $space`,
      textAlign: props.textAlign ? props.textAlign : 'center',
      background: props.background ? props.background : 'transparent',
    }}
  >
    {props.children}
  </div>
)

export default Layout
