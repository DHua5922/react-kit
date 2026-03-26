import { BaseComponentProps } from '@/types/common'
import React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLProps<HTMLDivElement>, BaseComponentProps {
  type?: 'vertical' | 'horizontal' | ''
}

const CenterHorizontalVertical = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CenterVertical = styled.div`
  display: flex;
  align-items: center;
`

const CenterHorizontal = styled.div`
  display: flex;
  justify-content: center;
`

function Center({ type = '', ...props }: Props) {
  if (type === 'vertical') return <CenterVertical {...props} />
  else if (type === 'horizontal') return <CenterHorizontal {...props} />
  return <CenterHorizontalVertical {...props} />
}

export default Center
