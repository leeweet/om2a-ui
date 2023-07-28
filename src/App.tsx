import HelloWorld from './lib'
import Div from './lib/Div'

const App = () => {
  return (
    <div>
      <HelloWorld greetee={'World'} />
      <Div greetee={'World'} />
    </div>
  )
}

export default App
