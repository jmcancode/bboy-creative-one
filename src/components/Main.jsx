import React from 'react'
import backgroundVideo from "../assets/bboy.mp4"
function Main() {
    return (
        <section>
            <div>
                <video loop autoPlay muted id="video">
                    <source src={backgroundVideo} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default Main 