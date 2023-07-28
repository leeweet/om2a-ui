import PropTypes from 'prop-types'
export default function Div(props: { greetee: string }) {
  const {
    greetee = ''
  } = props

  return (
    <div>Hello, {greetee}!</div>
  )
}

Div.prototype = {
  greete: PropTypes.string
}
