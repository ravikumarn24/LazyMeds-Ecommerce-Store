import styled from 'styled-components'

export const Navigator = styled.nav`
background: var(--mainPink);
width: 100%;
max-height: 30%;
box-sizing: border-box;
padding-top: 2%;
padding-bottom: 2%;
@media(min-width: 768px){
  height: 8%;
}
color: var(--lightPink) !important;
.nav-link{
    font-size: 1.1rem;
    text-transform: capitalize;
}
@media (max-width: 768px){
.navbar-brand{
    width: 10%;
    height: 4%;
}
} 
.navbar-collapse{
    max-height:100%;
    background: var(--mainPink);
}
.navbar-brand{
  padding-top: 0rem;
  padding-bottom: 0rem;
}
  @media (min-width: 768px) {
    .navbar-brand{
        width: 100px;
        height: 40px;
    }
  }
`