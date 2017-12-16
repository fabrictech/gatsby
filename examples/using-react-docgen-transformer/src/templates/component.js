import React from "react"
import PropTypes from "prop-types"
import GatsbyLink from "gatsby-link"

import Example from "./components/Example"

class ComponentTemplate extends React.Component {
  render() {
    const { displayName, props, html } = this.props.pathContext

    return (
      <div>
        <h1>{displayName}</h1>
        <h2>Props/Methods</h2>
        <ul>
          {props.map(({ name, description, type, required }, index) => (
            <li key={index}>
              <p>
                <strong>
                  <em>{name}</em>
                </strong>
              </p>
              <ul>
                <li>
                  <p>{description.text}</p>
                </li>
                <li>
                  <p>
                    <em>Type:</em> {type.name}
                  </p>
                </li>
                <li>
                  <p>
                    <em>Required:</em> {String(required)}
                  </p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <Example html={html} />
        <p>
          <GatsbyLink to="/components/">[index]</GatsbyLink>
        </p>
      </div>
    )
  }
}

ComponentTemplate.propTypes = {
  pathContext: PropTypes.shape({
    displayName: PropTypes.string,
    props: PropTypes.array,
    html: PropTypes.string,
  }),
}

export default ComponentTemplate
