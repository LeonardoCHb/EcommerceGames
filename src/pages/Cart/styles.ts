import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 3rem 5rem 2rem;
    margin: 5rem;
    background:var(--secondaryColor);
    border-radius: 1%;

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 20rem;
        white-space:nowrap;
        .TotalPrices {
            display: flex;
            flex-direction: column;
            margin: 3rem;
        }
        strong {
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        button {
            margin-top: 20rem;
            padding: 2rem;
	        background-color:#2696e0;
	        border-radius:  1.75rem;
	        border:1px solid #29668f;
	        cursor:pointer;
	        color:#ffffff;
	        font-family:Arial;
	        text-decoration:none;
        }
        button:hover {
        	background-color:#E07026;
        }
    }
    
    `
export const TableContainer = styled.table`
    width: 100%;

    /* .Quantidade{
        padding: 1rem 0.5rem;
        text-align: center;
    } */
    img {
        padding-top:0.5rem;
    }
    td {
        padding: 1rem;
        border-bottom: 1px solid #eee;
        text-align: left;

    }
    thead th {
    text-align: left;
    padding: 12px;
    }
    
    
`

