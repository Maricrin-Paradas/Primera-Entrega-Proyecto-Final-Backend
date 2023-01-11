const express = require("express");
const app = express();
const PORT = 3000;
const productsRoute = require("./src/routes/productRoutes");
const cartRoute = require("./src/routes/cartRoutes");
const notFoundRoute = require("./src/routes/main");


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/productos", productsRoute);
app.use("/api/carrito", cartRoute);
app.use("/*", notFoundRoute);

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});