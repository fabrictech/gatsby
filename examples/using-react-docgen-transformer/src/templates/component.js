import React from "react"
import PropTypes from "prop-types"

class ComponentTemplate extends React.Component {
  render() {
    const { displayName } = this.props.pathContext

    return (
      <div>
        <h1>{displayName}</h1>
      </div>
    )
  }
}

ComponentTemplate.propTypes = {
  pathContext: PropTypes.shape({
    displayName: PropTypes.string,
  }),
}

export default ComponentTemplate
