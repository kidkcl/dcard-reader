# Dcard Reader

A simple Dcard posts reader built with Lerna, React and express.

## Getting Start

run `yarn start` to start both client and server.

## Features

- A monorepo built with lerna to run React client and express server.
- Styling with Material UI v5 and Styled Components.
- Infinite scroll implemented by Intersection Observer API

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

- `/api/data?id={postId}`: call the Dcard API. `id` is Dcard post id, which is optional.

## Todos

- Empty state
- Skeleton components
