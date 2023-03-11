import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styled from '@emotion/styled';

const Section = styled.section`
    display: flex;
    justify-content: start;
    padding: 0 112px;
    margin-top: 60px;
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 18px;
    max-width: 35rem;
`
const Title = styled.div`
     background-color: rgb(148, 47, 112);
    padding: 4px 12px;
    color: rgb(255, 255, 255);
    max-width: 310px;
    height: 68px;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    margin-bottom: 28px;
`

const DateTime = styled.div`
    display: flex;
    align-items: center;
`

const Date_Time_Box = styled.div`
    display: flex;
    align-items: center;
    background-color: aliceblue;
    color: rgb(51, 51, 51);
    font-weight: 600;
    font-family: "Neue Haas Grotesk Display Pro";
    font-size: 28px;
    min-width: 181px;
    min-height: 40px;
    border-radius: 8px;
    padding: 0px 6px;
    margin:0 8px;
`
const Input1 = styled.input`
    border: none;
    min-height: 40px;
    background-color: transparent;
    outline: none;
`

const Input2 = styled.input`
     border: none;
    min-width: 181px;
    min-height: 40px;
    border-radius: 8px;
    padding: 0px 6px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    outline: none;
    margin-top: 1rem;
`

const RightChild = styled.div`
     width: 739px;
    height: 445px;
    background: rgba(242, 242, 242, 0.1);
    border: 1px dashed rgb(242, 242, 242);
    border-radius: 0px 64px;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(20, 89, 122);
    position: relative;
`
const Banner = styled.div`
    cursor: pointer;
`


export default function UntileEvent() {
    return (
        <Section>
            <LeftSide>
                <Title>Untitle Event</Title>
                <div>
                    <DateTime>
                        <CalendarTodayIcon />
                        <Date_Time_Box>
                            <Input1 placeholder='Date'></Input1>
                            <CalendarTodayIcon />
                        </Date_Time_Box>
                        <WatchLaterIcon />
                        <Date_Time_Box>
                            <Input1 placeholder='Time'></Input1>
                            <WatchLaterIcon />
                        </Date_Time_Box>
                    </DateTime>
                    <DateTime className='location_box'>
                        <LocationOnIcon />
                        <Input2 placeholder='Venue'></Input2>
                    </DateTime>
                    <DateTime>
                        <GroupsIcon />
                        <Input2 placeholder='Max capacity'></Input2>
                        <MonetizationOnIcon />
                        <Input2 placeholder='Cost per person'></Input2>
                    </DateTime>
                </div>
            </LeftSide>
            <div>
                <RightChild>
                    <AddPhotoAlternateIcon />
                    <Banner>Add a banner</Banner>
                </RightChild>
            </div>
        </Section>
    )
}