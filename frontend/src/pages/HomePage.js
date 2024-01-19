import React from "react";

function HomePage() {
    return (
        <>
            <h2>Steven Crowther Portfolio</h2>
            <article>
                <h3>Welcome to my website!</h3>
                <p>This website was developed as a project during the Spring term of 2023 as part of CS 290 Web Dev at Oregon State University. Initially, the site was built using basic HTML, CSS, and the incorporation of Google Fonts. The Artwork gallery was created using images that I optimized for the web. The focus was on preserving image quality while ensuring the correct format and minimal file size were achieved. Forms were later added as well utilizing JavaScript to handle form submissions. I employed Node and Express to run local developmental tests with my website.</p>
                <p>This website was then converted into a React application with the same content as before, now as a Single Page App (SPA). React icons were implemented to add character and in some cases were incorporated as interactive as buttons. Finally, utilizing MongoDB and Mongoose, a backend REST API was developed to enable functionality for managing a board game collection log, including Create, Read, Update, and Delete (CRUD) operations.</p>
            </article>
        </>
    );
}

export default HomePage;