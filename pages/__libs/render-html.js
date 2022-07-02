import React from "react";
const renderHtml = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
export default renderHtml