[Live Example](http://humdrum-grid-component-react.surge.sh/)

A grid component built with React.
___
## Installation
```
git clone https://github.com/jjrajani/grid-component.git
cd grid-component
npm install
npm start
```
___
## Testing
```
npm test
```
___
## Folder Structure

After creation, your project should look like this:

```
grid-component/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.scss
    index.jsx
    app/
      App.scss
      App.jsx
      App.test.js
      components/
        footer/
          fooder.jsx
          footer.scss
          footer.test.js
          index.js
        grid/
          grid.jsx
          grid.scss
          grid.test.js
          index.js
          utils/
            index.js
            sort_store_test_data.js
            sort_store.js
            sort_store.test.js
        header/
          header.jsx
          header.scss
          header.test.js
          index.js
    db/
      index.js
      animal/
        animal_grid_meta.js
        animal.helpers.js
        animal.js
        animal.test.js
        animals.js
        index.js
      promotion/
        index.js
        promotion_grid_meta.js
        promotion.helpers.js
        promotion.js
        promotion.test.js
        promotions.js
      server/
        index.js
        server.js
        server.test.js
      utils/
        months.js
```
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
