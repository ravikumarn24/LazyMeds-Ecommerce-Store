import styled from 'styled-components'

export const ButtonContainer = styled.button`
font-size: 1rem;
background: transparent;
border: 0.05rem solid var(--mainPink);
border-radius: 0.5rem;
padding: 0.2rem, 0.5rem;
transition: all 0.5s ease-in-out;
&:hover{
   border: 0.5rem solid var(--mainPink);
}
&:focus {
   outline: none;
}
`;