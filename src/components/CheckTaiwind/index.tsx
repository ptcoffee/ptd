import React, { Component } from 'react'
import './index.css'
import { Button, ButtonStyle } from '../../baseComponent/button/Button'
export default class index extends Component {
    render() {
        return (
            <div className='px-5 py-5 border-8'>
                <p className='font-mono text-lg text-center text-gray-800'>Button Component - Mono</p>


                <div className="bg-gray-200">
                    <div className="inline-block px-4 py-2 mr-2 text-center "><Button style={ButtonStyle.Primary}  /></div>
                    <div className="inline-block px-4 py-2 mr-2 text-center "><Button style={ButtonStyle.Primary} icon='download' /></div>

                    <div className="inline-block px-4 py-2 mr-2 text-center "><Button style={ButtonStyle.Secondary} title="Secondary" /></div>
                    <div className="inline-block px-4 py-2 mr-2 text-center "> <Button style={ButtonStyle.Outlined} title="Outlined" icon='download'/></div>
                    <div className="inline-block px-4 py-2 mr-2 text-center "> <Button style={ButtonStyle.Minimal_1} title="Minimal" icon='home'/></div>
                    <div className="inline-block px-4 py-2 mr-2 text-center "> <Button style={ButtonStyle.Minimal_2} title="Minimal"   /></div>

                </div>

            </div>

        )
    }
}


