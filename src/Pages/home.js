import React from 'react';
import ButtonAppBar from "../Component/header"
import Description from '../Component/description';
import UntileEvent from '../Component/untitle';
import Settings from '../Component/setiings';

const Home = () => {
    return(
        <body>
            <ButtonAppBar/>
                <UntileEvent/>
                <Description/>
                <Settings/>
        </body>


    )
}

export default Home;
