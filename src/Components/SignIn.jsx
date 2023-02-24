import React from "react";
import { Check } from "@mui/icons-material";
import styled from "styled-components"
import Button from '@mui/material/Button';

const MyContent = styled.div`
    width: 60%;
    height: 75%;
    display: flex;
    align-item: center;
    justify-content: center;
    @media (max-width: 850px){
        flex-direction: column;
        height: 100%;
    }
`

const LeftContent = styled.div`
    box-shadow: 2px 1px 4px black;
    border-radius: 1rem;
    height: 100%;
    @media (max-width: 850px){
        margin-top: 2rem;
    }
`
const LeftTitle = styled.div`
    background: #1976d2;;
    color: white;
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    
`
const LeftItem = styled.div`
    padding: 1rem;
    height: 80%;
`

const LeftP = styled.p`
    align-item: center;
    width: 12rem;
    @media (max-width: 850px){
        width: 100%;   
    }
`
const Input = styled.input`
    border: 1px solid #aaadae;
    width: 100%;
    height 2rem;
    border-radius: 5px;
    padding-left: 8px;
    margin: 8px 0;
`

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    @media (max-width: 850px){
        height: 100%;
    }
`
const RightContent = styled.div`
    padding: 1rem;
    padding-left: 2rem;
    box-sizing: border-box;
    @media (max-width: 850px){
        padding: 1rem;
    }
`

const RightTitle = styled.h2`
`

export const SignIn = () => {
    return (
        <Main>
            <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
            <MyContent>
                <LeftContent>
                    <LeftTitle><h3>Benefits of being a member</h3></LeftTitle>
                    <LeftItem>
                        <LeftP><Check></Check>Find something to watch on your subcribed streaming sevices</LeftP>
                        <LeftP><Check></Check>Log the movies and TV shows you have watched</LeftP>
                        <LeftP><Check></Check>Keep track of your favourite movies and TV shows and get recommendatiions from them</LeftP>
                        <LeftP><Check></Check>Build and maintain a personal watchlist</LeftP>
                        <LeftP><Check></Check>Build custom mixed lists (movies and TV)</LeftP>
                        <LeftP><Check></Check>Take part in movies and TV dicussions</LeftP>
                        <LeftP><Check></Check>Contribute to, and improve the information in our database</LeftP>
                    </LeftItem>
                </LeftContent>
                <RightContent>
                    <RightTitle>Sign in for an account</RightTitle>
                    <p>Signing up for an account ít free and easy. Fill out the form below to get started. Javascript is required to countinue.</p>
                    <form>
                        <label>Username</label>
                        <Input type={"text"}></Input>
                        <label>Password (4 characters minimum)</label>
                        <Input type={"password"}></Input>
                        <label>Password Comfirm</label>
                        <Input type={"password"}></Input>
                        <label >Email</label>
                        <Input type={"email"}></Input>
                    </form>
                    <p>By clicking the "Sign up" button below, I certify that i have read and agree to the TMDB terms of use and privacy policy.</p>
                    <Button variant="contained">Đăng ký</Button>
                    <Button variant="text">Cancle</Button>
                </RightContent>
            </MyContent>
        </Main>
    )
}

