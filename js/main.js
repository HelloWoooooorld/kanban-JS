import { getCards } from "../src/services/card";
import { getColums } from "../src/services/column";
import { generateColumn } from '../src/render/render_column';
// import { generateCards } from '../src/render/render__card';

const app = document.querySelector("#app");
const board = document.createElement("div");
board.classList.add("column__block");
app.appendChild(board);

