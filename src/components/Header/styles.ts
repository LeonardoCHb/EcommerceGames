import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #0064ff;
    
    justify-content: space-between;
    padding: 3rem 10rem 2rem;
    border-bottom: 0.2rem solid var(--barColor);

    img {
        max-width: 8rem;
        border-radius: 4px;
    }

    h1 {
        color: #ffffff;
    }
`