import { render, screen } from '@testing-library/react'
import Center from '.'

describe('Center', () => {
  it('centers content both vertically and horizontally by default', () => {
    render(<Center>Centered</Center>)

    const element = screen.getByText('Centered')

    expect(element).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })
  })

  it('only centers content vertically when type is vertical', () => {
    render(<Center type="vertical">Vertical</Center>)

    const element = screen.getByText('Vertical')

    expect(element).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
    })
    expect(element).not.toHaveStyle({
      justifyContent: 'center',
    })
  })

  it('only centers content horizontally when type is horizontal', () => {
    render(<Center type="horizontal">Horizontal</Center>)

    const element = screen.getByText('Horizontal')

    expect(element).toHaveStyle({
      display: 'flex',
      justifyContent: 'center',
    })
    expect(element).not.toHaveStyle({
      alignItems: 'center',
    })
  })
})
