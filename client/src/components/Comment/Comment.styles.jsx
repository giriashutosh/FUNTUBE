import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`

export const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({theme}) => theme.text}
`

export const Avatar = styled.img`
width: 50px;
height: 50px;
border: 50%;
`

export const Name = styled.span`
font-size: 13px;
font-weight: 500
`

export const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.text};
margin-left: 5px;
`

export const Text = styled.div`
font-size: 14px
`