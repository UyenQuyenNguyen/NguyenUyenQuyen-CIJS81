import { Checkbox } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    height: 1.5rem;
    width: auto;
    display: flex;
    border-radius: 4px;
    background-color: rgb(249, 245, 255);
     order: 1px solid #d9d9d9;
    justify-content: center;
    font-size: 12px;
    transition: all 0.2s;
    align-items: center;
    margin-right: 5px;
`
const TagP = styled.p`
    font-size: 15px;
    margin-right: 5px;
`
const P = styled.p`
    display: flex;
    align-items: center;
`

const SettingsDiv = styled.div`
    max-width: 40rem;
    padding: 32px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
`

const H1 = styled.h1`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(254, 244, 82);
    width: 146px;
    height: 60px;
    font-weight: 700;
    font-size: 32px;
    line-height: 60px;
    color: rgb(148, 47, 112);
`
const Button = styled.button`
    border: none;
    margin: 0 8px;
    border-radius: 5px;
    min-height: 20px;
    cursor: pointer;
`
const CreateButton = styled.button`
    border: 1px solid rgb(254, 244, 82);
    box-shadow: rgb(16 24 40 / 5%) 0px 1px 2px;
    border-radius: 8px;
    background: rgb(254, 244, 82);
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 12px 20px;
    color: rgb(148, 47, 112);
    font-weight: 600;
    font-size: 16px;
    min-height: 48px;
    cursor: pointer;
    :hover{
        border-color: #1677ff ;
        color: #1677ff;
    }
`

const BtnChosen = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const BtnTag = styled.div`
    display: flex;
`


const Settings = () => {
    const [tags, setTags] = useState(['Product', 'Marketing', 'Engineering', 'Design'])
    let tagArr = [];
    const [choseTag, setChoseTag] = useState([tagArr]);
    const renderTag = (event, key) => {
        if (key == 0) {
            setChoseTag([...choseTag, "Product"]);
        } else if (key === 1)
            setChoseTag([...choseTag, "Marketing"]);
        else if (key === 2)
            setChoseTag([...choseTag, "Engineering"]);
        else if (key === 3)
            setChoseTag([...choseTag, "Design"]);

    }
    const rmvTag = (event, key) => {
        setChoseTag([
            ...choseTag.slice(0, key),
            ...choseTag.slice(key + 1)
        ]);
    }

    const showChodeTag = choseTag.map((item, key) => {
        return (
            <Container>
                <TagP>{item}</TagP>
                <CloseIcon onClick={event => rmvTag(event, key)} style={{ cursor: 'pointer' }} sx={{ fontSize: 15 }} />
            </Container>

        )
    })



    const btnTags = tags.map((item, key) => {
        return <Button onClick={event => { renderTag(event, key) }} key={key}>{item}</Button>
    })

    return (
        <SettingsDiv>
            <H1>Settings</H1>
            <P><Checkbox /> I want to approve attendees</P>
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="Public" control={<Radio />} label="Public" />
                    <FormControlLabel value="Curated" control={<Radio />} label="Curated Audience" />
                    <FormControlLabel value="Community" control={<Radio />} label="Community Only" />
                </RadioGroup>
            </FormControl>
            <P>Pick tags for our curation engine to work its magin </P>
            <BtnChosen>
                {showChodeTag}
            </BtnChosen>
            <BtnTag>
                {btnTags}
            </BtnTag>
            <CreateButton>Create Social</CreateButton>
        </SettingsDiv>
    )
}

export default Settings;

