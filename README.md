# Dcard Reader

A simple Dcard posts reader built with Lerna, React and express.

## Getting Start

run `yarn start` to start both the client and server.

## Features

- A monorepo built with lerna to run React client and express server.
- Styling with Material UI v5 and Styled Components.

## Client

Built with create-react-app

```
components
|-- Article // render a dcard post
|__ ArticleList // render posts list with infinite scroll
hooks
|__ useFetch // handle fetch posts from backend server
```

## Server

An express server to get data from Dcard API and handle cors.
