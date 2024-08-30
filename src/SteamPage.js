import React from 'react';
import './style2.css'; 

const SteamPage = () => {
    return (
        <div>
            <header>
                <img
                    src="/ITS_Logo_Golden.png"
                    alt="ITS Image"
                    width="80"
                    height="150"
                />
                <h3>
                    <a href="https://mohammedimohallangp.in/pass-booking/logi">
                        Anjuman-E-Hakimi
                    </a>
                </h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h3>
                    <a href="index.html">Logout</a>
                </h3>
            </header>

            <br /><br /><br />

            <div className="mid">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ri-PDNtY1VE?si=TPZa-KEuvvbpp8I5"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <br /><br /><br />

            <footer>
                Company © Anjuman e Hakimi | 2024. All rights reserved.
            </footer>
        </div>
    );
};

export default SteamPage;
