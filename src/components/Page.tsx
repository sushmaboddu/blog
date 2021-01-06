import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../styles/variables'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  margin-bottom: 3rem;
  padding: ${dimensions.containerPadding}rem;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
