// templates/normal.js

import { head } from "./parts/head.js";
import { header } from "./parts/header.js";
import { secheader } from "./parts/secheader.js";
import { secfooter } from "./parts/secfooter.js";
import { footer } from "./parts/footer.js";

export function normalTemplate(page) {
  return `
<!DOCTYPE html>
<html data-theme='default'>

<head>
${head(page)}
</head>

<body class='no-user' data-action='lazyload@window-&gt;checkout--checkout#initCheckout' data-controller='checkout--checkout utilities--ab-test utilities--timer' data-utilities--timer-containers--countdown-outlet='.containers--countdown' id='teepublic'>

${header(page)}

${secheader(page)}

${page.content}

${secfooter(page)}

${footer(page)}

</body>
</html>
`;
}
