# ReactLibrary
ReactLibrary with react router

## Some pic
![reactlibrary](https://cloud.githubusercontent.com/assets/23314692/24324525/dbefff40-1190-11e7-82ae-40f6c6884fe5.jpg)

![reactlibrary2](https://cloud.githubusercontent.com/assets/23314692/24324539/f8b1c230-1190-11e7-8531-448baca2e4d2.jpg)

## Development

```
npm install
npm start
```
## Style

For change header style use:
- [Material Design Lite or just MDL] (https://getmdl.io/customize/index.html)
and in index.html
```html
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-red.min.css" />
```

# URL Params

For example — consider the following URLs:

```
localhost:8080/books/react
localhost:8080/books/react/react-up-and-running
```

These URLs would match a route path like this:

```
localhost:8080/books/:topic/
localhost:8080/books/:topic/:tagline
```

The parts that start with `:` are URL parameters whose values will be
parsed out and made available to route components on
`this.props.params[name]`.

