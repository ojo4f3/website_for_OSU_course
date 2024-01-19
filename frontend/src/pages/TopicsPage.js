import React from "react";

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="subsection">
                <a href="#web-servers">Web Servers</a>
                <a href="#design">Frontend Design</a>
                <a href="#images">Image Optimization</a>
                <a href="#style">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
                <a href="#DOM">DOM</a>
            </nav>
            <article id="web-servers">
                <h3>Web Servers</h3>
                <p>The default page of a website is designated as
                    “<strong>/index.html</strong>”. It functions as the
                    default homepage when
                    the domain is visited without a specific resource
                    requested. It is located in the site's root directory.</p>
                <p>The webpage does not create any requests when on the
                    local computer. The HTML code is just rendered. When the
                    webpage is loaded on the web server, it makes four
                    <strong>GET
                        requests</strong>. First, the HTML for the page is
                    loaded. Then
                    the stylesheet and scripts are requested but are not
                    found. Finally, the webpage requests the favicon from
                    the host, which responds.</p>
                <p>The favicon.ico has a <strong>200 status code</strong>
                    because it
                    successfully loaded. The webpage made a GET request to
                    “https://web.engr.oregonstate.edu/favicon.ico” which
                    replied with the requested image. Main.css and main.js
                    result in a <strong>404 status code</strong> , not found
                    error. This is
                    because the documents that the links in the boilerplate
                    point to, do not exist. The HTML code states that they
                    exist, but they were not created; therefore, they were
                    not found.</p>
                <p>The URL for this website is
                    “https://web.engr.oregonstate.edu/~crowthes/a1-crowthes”.
                    The <strong>scheme</strong> is HTTPS, it is the protocol
                    used for the
                    requests and responses. The <strong>host domain</strong>
                    is
                    “oregonstate.edu” and is preceded by “web.engr” which is
                    a <strong>subdomain</strong>. The final part is the
                    <strong>resource path</strong>
                    for the
                    website “/~crowthes/a1-crowthes”.</p>
            </article>
            <article id="design">
                <h3>Frontend Design</h3>
                <p>The concept of <strong>frontend web design</strong> is
                    centered on
                    creating an effective, functional, and interesting
                    experience for the user. It involves the look and feel
                    of the webpage, as well as navigation and simplicity of
                    use.</p>
                <dl>
                    <dt>Effective</dt>
                    <dd>A website should allow the user to accomplish their
                        goals
                        for visiting the site. The user's need should be
                        met.</dd>
                    <dt>Efficient</dt>
                    <dd>The user should be able to accomplish their goals in
                        the simplest fashion possible. The design should use
                        the fewest steps possible to complete the task.</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>The website should be structured in a way that the
                        user can find the page they require and be able to
                        return to pages they have visited. The site should
                        be easy to use for all users, including new users.</dd>
                    <dt>Error-free</dt>
                    <dd>The webpage should be free of glitches or errors
                        that disrupt the user's experience. If common errors
                        occur, they should be documented and fixed.</dd>
                    <dt>Enjoyable/Engaging</dt>
                    <dd>The overall content and graphical design should meet
                        the
                        user's needs and encourage the user to return.</dd>
                </dl>
                <p>HTML <strong>page layout tags</strong> are used to
                    organize the webpage to
                    improve organization and readability. They are used to
                    create sections and subsections, display lists, provide
                    navigational links, as well as header and footer
                    information.</p>
                <p><strong>Anchor elements</strong> are used to move to a
                    specific page or
                    section. A navigational anchor allows the user to
                    move to a different webpage with the <strong>href
                        attribute</strong>.
                    Anchors can also link to sections of the current page.
                    This is done by defining <strong>id elements</strong>
                    and then creating
                    anchors to those id points. The href attribute is used
                    again, this time with the current page's URL with a "#"
                    followed by the id of the section to jump to.</p>
            </article>
            <article id="images">
                <h3>Image Optimization</h3>
                <p>The main factors that impact image optimization for the web are the following:</p>
                    <dl>
                        <dt>Image file name</dt>
                        <dd>Ensure the name is descriptive to improve search engine optimization.</dd>
                        <dt>Image color mode</dt>
                        <dd>RGP is preferred for all file types except .gif files. CMYK color mode should not be used as it is best used for print.</dd>
                        <dt>Image dimensions</dt>
                        <dd>The most important part of the image should fill the space available on the webpage. This means the image needs to be cropped and scaled to the correct size.</dd>
                        <dt>Reduced resolution</dt>
                        <dd>Web images do not need the same resolution images for print. Decreasing the resolution helps keep the file size small.</dd>
                        <dt>File size</dt>
                        <dd>The larger the image files are, the longer it takes the webpage to load. Images can be compressed to decrease their file size while still maintaining their quality.</dd>
                        <dt>File format</dt>
                        <dd>Simple images are often saved as .gif, .png, or .svg file types. Photos files should be .jpg or .WebP</dd>
                    </dl>
                <p>The best file format for photographs or any detailed colored image is .jpg or .WebP. They are preferred due to their ability to be compressed without losing quality. WebP is also useful in that it has a transparency channel. Images that consist of line art or simple shapes are best stored as .gif, .png, or .svg. These file types can compress to smaller sizes than .jpg or .WebP without losing quality due to the simpler image style. GIF and .png files are capable of transparency.</p>
            </article>
            <article id="style">
                <h3>Cascading Stylesheets</h3>
                <p>Cascading Stylesheets (CSS) are used to define the visual and layout qualities of a webpage or app. CSS rules are created that define the font, text size, color palette, and more. The reason CSS is used instead of changing the style attribute in HTML is that the same rules can be used over and over without having to write the code again. CSS also allows for making quick changes to a rule that affects the full webpage without needing to change each instance.</p>
                <p>The most common ways of implementing webpage styles is with CSS, with JavaScript, or within the HTML code itself. CSS can be linked or imported as an external file. This is the preferred method. JavaScript can be used to change the document object model or within a JavaScript script template literal. Finally, styles can be implemented using HTML; either by coding the style inline with the HTML tag, or embedding the HTML tag within a style tag.</p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>For a webpage to be successful, users must be able to access the site and interact with it in a meaningful way. Accessibility must be considered to support all users who may or may not have a disability. Six major goals of accessibility and their purpose are below:</p>
                <ol>
                    <li>Clear instructions: ensure that the user understands what information is being requested and how to respond</li>
                    <li>Why information is being requested: helpful to inform the user why their information is needed and which fields are required, as some maybe optional</li>
                    <li>Start with the first field in focus: this allows the user to start completing the form immediately</li>
                    <li>Keyboard compatible: full keyboard support is needed to accommodate users who cannot use a mouse</li>
                    <li>Tab through entries: allows users to quickly move from one field to another</li>
                    <li>Validation messages are legible: these guiding messages help the user complete the form without missing a field or other requirements</li>
                </ol>
                <h4>HTML Tags</h4>
                <p>HTML forms use many tags to create specific user input environments. The form is initiated with a form tag which has two very important attributes, action and method. Action directs the form where to submit the form information to once complete. Method identifies the HTTP request type that will be used to deliver the information. The fieldset tag groups form control units (specific input boxes, dropdowns, etc.) into separate spaces on the page. This tag is used to make the form more legible and easier to comprehend. A legend tag is used to add a title to the fieldset. Finally, the label tag allows the webpage developer to add text above the input to instruct the user what data is expected.</p>
                <p>Input is the heart of the HTML form. It is the tag that creates a user input point and links the entered data to the form submission. Input type defines the input format with possible formats being text, email, telephone number, date, checkbox, radio button, among others. The input tag can have the attribute 'required' which will alert the user that this input must be completed to submit the form. Some attributes that aid the user in filling out the form are autofocused and placeholder. Autofocus places the keyboard in control of the indicated input, allowing the user to begin filling the form immediately. Placeholder is used to give an example of the kind of data that is expected. A few more important form tags include select used for dropdown menus, textarea for multiline text input and button which configures the form submission function.</p>
                <h4>Style</h4>
                <p>Style is important is form design. A strong design will make the form easier to complete and avoid user confusion. Spacing clearly defines different areas and inputs. This can be done with different colors, borders, and font attributes. Margins and padding also help ensure the form is readable and clear. Another user aid is to use focus styling to show the user which input is active. It is generally a good idea to set the first input to autofocus. Since many websites are accessed by mobile devices, the style must accommodate large enough elements to allow for touch inputs. Additionally, text input benefits from the placeholders that guide the user and demonstrate what is expected.</p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>Server-side networking and applications can be supported by Node. It is an open-source, cross-platofrm program THAT. Node uses modules to perform specific tasks and these modules are managed by npm or Node packet manager. The modules are stored in a repository that npm uses to install and update Node modules. These modules simplify tasks by using built-in functions instead of writing out detailed commands. Express is a framework used by Node which handles HTTP requests, analyzes requests, and serves static files. This allows for the use of APIs or application program interfaces.</p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>The main data types in JavaScript are string, number, Boolean, symbol, special value (undefined or null), and object. All data types are primitives except for an object. A JavaScript object stores information which can be edified, added to, or deleted. Arrays are a simple JavaScript object that hold string values in a defined order. If numbers or other data types need to be in the array, they must be stored as a string. Another common JavaScript object is the JSON (JavaScript Object Notation) format. Many programming languages use JSON especially to share data between different platforms or languages.</p>
                <p>Conditional statements allow for branching code that executes when the condition is met or not met. The conditional expression must be within parentheses. Expressions can be strict or loose, depending on how exact the comparisons need to be. While and for loops are used to repeat a block of code multiple times. While loops continue to execute until a condition is met. JavaScript also uses a do while loop that executes the code block once and then checks the condition statement to determine if it should repeat. There are many types of for loops in JavaScript. The for loop is similar to other languages in that it is initiated with an expression and the loop condition is checked after each use to determine if it should be repeated. A "for of" loop iterates over a string or array specifically. Finally, a "for in" loop is designed to loop over the properties of objects.</p>
                <p>JavaScript uses objects for sophisticated data manipulation and storage. This is object-oriented programming. The objects can be unique or have the same structure and function as another object. The object has a specific state, behavior, and identity. This means each object has its own properties, its own functions or methods, and it represents a specific instance. Classes can be used to quickly and simply generate objects with the same structure and functions. One last important aspect of JavaScript is that functions can be used as variables, parameters to other functions, and be returned from a function. This allows for combining multiple functions to carry out complex tasks in a modular fashion. JavaScript provides simplified notation to define basic operations instead of needing to write a full function code block out.</p>
            </article>
            <article id="DOM">
                <h3>DOM (Document Object Model)</h3>
                <p>DOM is an API interface to access and manipulate the browser's viewport as well as the HTML document. Using JavaScript and Express, a developer can make webpages much more dynamic and interactive. The style or look and feel of the webpage can be changed based on user actions. The developer can create new elements and update or delete current elements. Functions created with JavaScript trigger these changes. They also initiate the interaction with other webpages.</p>
            </article>
        </>
    );
}

export default TopicsPage;