import PropTypes from 'prop-types'
export default function HelloWorld(props: { greetee: string }) {
  const {
    greetee = ''
  } = props

  return (
    <div>Hello, {greetee}!</div>
  )
}

HelloWorld.prototype = {
  greete: PropTypes.string
}
