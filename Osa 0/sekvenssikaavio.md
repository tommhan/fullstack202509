```mermaid


    sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser :User write new notes and press the SAVE button 
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: [{ "content": "Sending notes", "date": "2025-9-15" }, ... ]
    Note right of server: The server saves the "new note" to data.json
    deactivate server 

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    Note right of browser: The browser executes the callback function that renders the notes