import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 128px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
    font-family: 'open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;

    color: #ffffff;
`

export const TitleHighLight = styled.h3`
    font-family: 'open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;

    color: #ffffff;
`

export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`