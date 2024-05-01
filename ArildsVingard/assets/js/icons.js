import { Add24 } from "@carbon/icons";
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.innerHTML = Add24.svgData;
const button = document.querySelector(".cart-button");
button.appendChild(svg);
