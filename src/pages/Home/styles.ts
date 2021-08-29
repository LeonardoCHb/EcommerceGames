import styled from 'styled-components'

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 3rem 10rem 3rem;
    li {
        display: flex;
        flex-direction: column;
        border-radius: 5%;
        padding: 2rem;
        margin-bottom: 1rem;
        max-width: 15rem;
        border: solid 0.5rem;
        color: var(--blue);
        img {
        }
    }
`