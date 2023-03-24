import { render } from "prixjs";

import './styles/globals.css';
import Home from "./app";
import notFound from "./app/404";

const routes = {
  '/': Home,
  '404': notFound,
};

render(routes, document.getElementById('app'));

//Soon Prix docs