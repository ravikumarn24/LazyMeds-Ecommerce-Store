import styled from 'styled-components'

export const Navigator = styled.nav`
background: var(--lightBlue);
width: 100%;
height: 12%;
max-height: 22%;
.nav-link{
    color: var(--mainBlue) !important;
    font-size: 1.1rem;
    text-transform: capitalize;
}
@media (max-width: 768px){
.navbar-brand{
    max-width: 100%;
    max-height: 100%;
}
} 
.navbar-collapse{
    max-height:100%;
    background: var(--lightBlue);
}
  @media (min-width: 768px) {
    .navbar-brand{
        width: auto;
        height: 100%;
    }
  }
`