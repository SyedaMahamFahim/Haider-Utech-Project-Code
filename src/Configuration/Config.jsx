import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import State from '../Components/Hooks/State';
import Effect from '../Components/Hooks/Effect';
import ConditionalRendering from '../Components/Conditional';
import Map from '../Components/Map';
import TakingInput from '../Components/TakingInput';
import Home from '../Components/Home';
import HookRouter from '../Components/Hooks/HookRouter';
const Config = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="state" element={<State />} />
                <Route path="effect" element={<Effect />} />
                <Route path="conditional-rendering" element={<ConditionalRendering />} />
                <Route path="map" element={<Map />} />
                <Route path="taking-input" element={<TakingInput />} />
                <Route path="hook-router" element={<HookRouter />} />
            </Routes>
        </>
    )
}

export default Config
