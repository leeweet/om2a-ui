import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import HelloWorld from './index'

describe('HelloWorld', () => {
  test('HelloWorld component renders correctly', () => {
    const component = renderer.create(
      <HelloWorld greetee={'World'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The greetee prop works', () => {
    const component = renderer.create(
      <HelloWorld greetee={'World'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
