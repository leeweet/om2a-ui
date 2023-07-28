import { render, screen, cleanup } from '@testing-library/react'
import { describe, expect, test, afterEach } from 'vitest'
import HelloWorld from './index'

describe('Integration test', () => {
  afterEach(cleanup)

  test('Minimal render display expected text', () => {
    render(<HelloWorld greetee={'Om2a'} />)
    expect(screen.getByText('Hello, Om2a!'))
  })

  test('Expected greetee is displayed', () => {
    const greetee = 'World'
    render(<HelloWorld greetee={greetee} />)
    expect(screen.getByText(`Hello, ${greetee}!`))
  })
})
