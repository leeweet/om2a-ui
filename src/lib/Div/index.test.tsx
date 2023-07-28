import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import Div from './index'

describe('Div', () => {
  test('Div component renders correctly', () => {
    const component = renderer.create(
      <Div greetee={'World'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The greetee prop works', () => {
    const component = renderer.create(
      <Div greetee={'World'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
