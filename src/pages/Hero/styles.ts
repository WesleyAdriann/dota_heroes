import styled from 'styled-components'

export const Content = styled.div`
    
`

export const InfoCard = styled.div`
    align-items: flex-start;
    background-color: ${(props) => props.theme.cardBackground};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 16px 0 16px;
    position: absolute;
    width: 40%;
`

export const Text = styled.p`
    color: ${(props) => props.theme.colors.black};

    strong {
        color: ${(props) => props.theme.colors.primaryRed};
    }

    li {
        margin: 20px;
    }
`