This is my portfolio page in React.js

My initial intention is to add Redux to it

This app uses create-react-app

First issue is how to handle multiple conditional renderings for the pages. 

I am using several functions but I am not sure how it scales

Managed to render the desired page. The page key had to be passed to state, so I can pass it from child to parent.

For future reference:
//importing all images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) =>  images[item.replace('./', '')] = r(item) );
    return images;
}
const thumbnails = importAll(require.context('./thumbnails', false, /\.(png|jpe?g|svg)$/));
