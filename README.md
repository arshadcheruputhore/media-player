set up path for component in react
    - install react router dom using the command npm i react-router-dom
    - steps to set-up path for component using react router dom
        - React app must be rendered inside <BrowserRouter></BrowserRouter>
        - components needs to set-up path must inside <Routes> component of react router dom
        
-create json-server

        - create a folder to hold json file
        - create package.json file using the command npm init -y
        - create a json file
        - insall json-server using the command npm i json-server (stable version: npm i json-server@0.17.4)
        - run json file using the command npx json-server json-file-name

- how to deploy json file using node.js
-----------------------------------------
1. create a index.js file in server folder
2. updating script in "package.json" file as "start": "node index.js"
3. create .gitignore file and add node_modules folder
4. define json-server to run json file in index.js