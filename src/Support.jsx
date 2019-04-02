import React from "react";
import {render} from "react-dom";


export const Support = () => <h1>HEllo!</h1>
const container = document.getElementById('support-page-react-root')
if (!!container) {
  render(<Support />, container)
}
