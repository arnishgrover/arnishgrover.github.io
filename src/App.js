import React from 'react';
import './App.css';

import Introduction from "./components/Introduction/Introduction";
import MainContent from './components/MainContent/MainContent';

function App() {
    return (
        <div className="App">
            <div>
                <div className='column1'>
                    <section>
                        <nav>
                            <Introduction/>
                        </nav>
                    </section>
                </div>
                <div className='column2'>
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default App;
