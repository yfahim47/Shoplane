const { default: About } = require("./components/About");
const { default: HomePage } = require("./components/HomePage");
const { default: Container } = require("./components/Container");
const { default: Product } = require("./components/Product");

const routeDetails = [

    {
        path: '/about',
        comp: <About />
    },
    {
        path: '/container',
        comp: <Container />
    },
    // {
    //     path: '/product',
    //     comp: <Product />
    // }

]