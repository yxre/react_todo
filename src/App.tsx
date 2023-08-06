import React from "react";
import "./App.css";
import {TodoListing} from "./components/TodoListing";
import {AppState, useAppState} from "./state.hook";
import {AppBar} from "./components/AppBar";
import {TodoEditorModal} from "./components/TodoEditorModal";

function App() {
    const state: AppState = useAppState();

    return (
        <div className="flex flex-col justify-start align-top">
            <AppBar/>
            <TodoListing todos={state?.data?.todos}/>
            <TodoEditorModal showEditor={state?.data?.showEditor}/>
        </div>
    );
}

export default App;
