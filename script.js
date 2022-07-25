$("#loading").hide();
/*regex*/
const regexWidth = /(((width=")+(\d*(%|px)?)")?)+(\s*(valign="top"))?/g;
const regexBR = /<br(\/)?>(\n.*?)?(?!<\/\w*>)/g;
const regexTable = /<table .*>/g;
const regexSpaces = /(<\w*>)(&nbsp;|\s)?(<\/\w*>)/g;
const regexName = /(<a name="(.{1,15})">(\s)?<\/a>)/g;
const regexDiv =
  /<div>(((\n.*?)(<div>(\s*)<\/div>\n.*?)*(\n*)*)|(\s*))<\/div>/g;

const regexTD = /<td(\s)*([\w,\s,=,"]*)>/g;
const regexBRall = /<\w*><br(\s(clear="all"))>(\n.*?)?<\/\w*>/g;
const regexEM = /<\/em><em>/g;
const regexHtwo = /<h2(.)*><strong>/g;
const regexTR =
  /<table class="table table-bordered" style="table-layout: fixed;">(\n.*?)<tr>/g;
const regexTRactive = `<table class="table table-bordered" style="table-layout: fixed;">
    <th class="label-default-active">`;
const tableBordered =
  '<table class="table table-bordered" style="table-layout: fixed;">';

//abbr ENG */
const regexAbbrCA = /(?<!(\w))CA(?!(\w))/g;
const AbbrCA = '<abbr title="compensation advisor">CA</abbr>';
const regexAbbrEI = /(?<!(\w))EI(?!(\w))/g;
const AbbrEI = '<abbr title="employment insurance">EI</abbr>';
const regexAbbrQPIP = /(?<!(\w))QPIP(?!(\w))/g;
const AbbrQPIP =
  '<abbr title="Qu&eacute;bec Parental Insurance Plan">QPIP</abbr>';
const regexAbbrABBR = /(?<!(\w))ABBR(?!(\w))/g;
const AbbrABBR = '<abbr title="Annual Benefit Base Rate">ABBR</abbr>';
const regexAbbrSDB = /(?<!(\w))SDB(?!(\w))/g;
const AbbrSDB = '<abbr title="Supplementary Death Benefit">SDB</abbr>';
const regexAbbrSAM = /(?<!(\w))SAM(?!(\w))/g;
const AbbrSAM = '<abbr title="Superannuation Administration Manual">SAM</abbr>';
const regexAbbrPSHCP = /(?<!(\w))PSHCP(?!(\w))/g;
const AbbrPSHCP = '<abbr title="Public Service Health Care Plan">PSHCP</abbr>';
const regexAbbrPP = /(?<!(\w))PP\+(?!(\w))/g;
const AbbrPP = '<abbr title="Pay Period Plus">PP+</abbr>';
const regexAbbrCPP = /(?<!(\w))CPP(?!(\w))/g;
const AbbrCPP = '<abbr title="Canada Pension Plan">CPP</abbr>';
const regexAbbrQPP = /(?<!(\w))QPP(?!(\w))/g;
const AbbrQPP = '<abbr title="Qu&eacute;bec Pension Plan">QPP</abbr>';
const regexAbbrLTD = /(?<!(\w))LTD(?!(\w))/g;
const AbbrLTD = '<abbr title="Long-term disability">PSMIP</abbr>';
const regexAbbrPSMIP = /(?<!(\w))PSMIP(?!(\w))/g;
const AbbrPSMIP =
  '<abbr title="Public Service Management Insurance Plan">PSMIP</abbr>';
const regexAbbrDCP = /(?<!(\w))DCP(?!(\w))/g;
const AbbrDCP = '<abbr title="Dental Care Plan">DCP</abbr>';
const regexAbbrDI = /(?<!(\w))DI(?!(\w))/g;
const AbbrDI = '<abbr title="Disability Insurance">DI</abbr>';
const regexAbbrPSAC = /(?<!(\w))PSAC(?!(\w))/g;
const AbbrPSAC = '<abbr title="Public Service Aliance of Canada">PSAC</abbr>';
const regexAbbrLWOP = /(?<!(\w))LWOP(?!(\w))/g;
const AbbrLWOP = '<abbr title="Leave without pay">LWOP</abbr>';
const regexAbbrLIA = /(?<!(\w))LIA(?!(\w))/g;
const AbbrLIA = '<abbr title="Leave with income averaging">LIA</abbr>';
const regexAbbrBB = /(?<!(\w))BB(?!(\w))/g;
const AbbrBB = '<abbr title="Bilingual bonus">BB</abbr>';
const regexAbbrHR = /(?<!(\w))HR(?!(\w))/g;
const AbbrHR = '<abbr title="Human Resources">HR</abbr>';
const regexAbbrPRI = /(?<!(\w))PRI(?!(\w))/g;
const AbbrPRI = '<abbr title="Personal Record Identifier">PRI</abbr>';
const regexAbbrJSM = /(?<!(\w))JSM(?!(\w))/g;
const AbbrJSM = '<abbr title="Job Stack Mapping">JSM</abbr>';
const regexAbbrHRMS = /(?<!(\w))HRMS(?!(\w))/g;
const AbbrHRMS = '<abbr title="Human Resource Management System">HRMS</abbr>';

//FRA

const regexAbbrRH = /(?<!(\w))RH(?!(\w))/g;
const AbbrRH = '<abbr title="Ressources Humaine">RH</abbr>';
const regexAbbrCR = /(?<!(\w))CR(?!(\w))/g;

const AbbrCR =
  '<abbr title="Conseiller en r&eacute;mun&eacute;ration">CR</abbr>';
const regexAbbrCIDP = /(?<!(\w))CIDP(?!(\w))/g;
const AbbrCIDP =
  '<abbr title="code d&ldquo;identification de dossier personnel">CIDP</abbr>';

const regexAbbrMFT = /(?<!(\w))MFT(?!(\w))/g;
const AbbrMFT =
  '<abbr title="Mappage de gestion des ressources humaines">MFT</abbr>';

const regexAbbrSGRH = /(?<!(\w))SGRH(?!(\w))/g;
const AbbrSGRH =
  '<abbr title="Syst&egrave;me de gestion des ressources humaines">SGRH</abbr>';

function ConvertFra() {
  let textOrigin = $("#textOrigin").val();

  //ABBR

  textResult = textOrigin.replaceAll(regexWidth, "");
  textResult = textOrigin.replaceAll(regexName, "");

  textResult = textResult.replaceAll(regexDiv, "");
  textResult = textResult.replaceAll('align="center"', "");
  textResult = textResult.replaceAll(regexSpaces, "");
  textResult = textResult.replaceAll(regexBR, "");
  textResult = textResult.replaceAll(regexBRall, "");
  textResult = textResult.replaceAll(regexTD, "<td>");
  textResult = textResult.replaceAll(regexEM, "");
  textResult = textResult.replaceAll(regexHtwo, "<h2>");
  textResult = textResult.replaceAll("</strong></h2>", "</h2>");
  textResult = textResult.replaceAll(regexTable, tableBordered);
  textResult = textResult.replaceAll(regexTR, regexTRactive);
  //ABBR
  textResult = textResult.replaceAll(regexAbbrSGRH, AbbrSGRH);
  textResult = textResult.replaceAll(regexAbbrCIDP, AbbrCIDP);

  textResult = textResult.replaceAll(regexAbbrMFT, AbbrMFT);

  textResult = textResult.replaceAll(regexAbbrRH, AbbrRH);
  textResult = textResult.replaceAll(regexAbbrCR, AbbrCR);

  $("#textResult").val(textResult);
  tdToTh();
  nameRemover();
  idApplier();
}

function ConvertEng() {
  let textOrigin = $("#textOrigin").val();

  textResult = textOrigin.replaceAll(regexWidth, "");

  textResult = textOrigin.replaceAll(regexName, "");
  textResult = textResult.replaceAll(regexDiv, "");

  textResult = textResult.replaceAll('align="center"', "");
  textResult = textResult.replaceAll(regexSpaces, "");
  textResult = textResult.replaceAll(regexBR, "");
  textResult = textResult.replaceAll(regexBRall, "");
  textResult = textResult.replaceAll(regexTD, "<td>");
  textResult = textResult.replaceAll(regexEM, "");
  textResult = textResult.replaceAll(regexHtwo, "<h2>");
  textResult = textResult.replaceAll("</strong></h2>", "</h2>");
  textResult = textResult.replaceAll(regexTable, tableBordered);
  textResult = textResult.replaceAll(regexTR, regexTRactive);
  //ABBR
  textResult = textResult.replaceAll(regexAbbrPSHCP, AbbrPSHCP);
  textResult = textResult.replaceAll(regexAbbrQPIP, AbbrQPIP);
  textResult = textResult.replaceAll(regexAbbrABBR, AbbrABBR);
  textResult = textResult.replaceAll(regexAbbrPSMIP, AbbrPSMIP);
  textResult = textResult.replaceAll(regexAbbrPSAC, AbbrPSAC);
  textResult = textResult.replaceAll(regexAbbrLWOP, AbbrLWOP);
  textResult = textResult.replaceAll(regexAbbrHRMS, AbbrHRMS);

  textResult = textResult.replaceAll(regexAbbrSDB, AbbrSDB);
  textResult = textResult.replaceAll(regexAbbrSAM, AbbrSAM);
  textResult = textResult.replaceAll(regexAbbrCPP, AbbrCPP);
  textResult = textResult.replaceAll(regexAbbrQPP, AbbrQPP);
  textResult = textResult.replaceAll(regexAbbrLTD, AbbrLTD);
  textResult = textResult.replaceAll(regexAbbrDCP, AbbrDCP);
  textResult = textResult.replaceAll(regexAbbrLIA, AbbrLIA);
  textResult = textResult.replaceAll(regexAbbrPRI, AbbrPRI);
  textResult = textResult.replaceAll(regexAbbrJSM, AbbrJSM);

  textResult = textResult.replaceAll(regexAbbrBB, AbbrBB);
  textResult = textResult.replaceAll(regexAbbrHR, AbbrHR);
  textResult = textResult.replaceAll(regexAbbrDI, AbbrDI);
  textResult = textResult.replaceAll(regexAbbrCA, AbbrCA);
  textResult = textResult.replaceAll(regexAbbrEI, AbbrEI);
  textResult = textResult.replaceAll(regexAbbrPP, AbbrPP);
  $("#textResult").val(textResult);

  tdToTh();
  nameRemover();
  idApplier();
}
//copy all
function CopyToClipboard(textid) {
  navigator.clipboard.writeText(textResult);
}

/*accordions to h3 */
function expand() {
  const dashboardPrefix = `
</details></li>
<li>
<details>
<summary>
`;
  const dashboardTop = `
<div class="btn-group pull-right">
<button type="button" class="btn btn-primary wb-toggle btn-sm mrgn-rght-sm" data-toggle='{"selector": "details", "parent": "#duties-a", "type": "on"}'>Expand all</button>
<button type="button" class="btn btn-primary wb-toggle btn-sm" data-toggle='{"selector": "details", "parent": "#duties-a", "type": "off"}'>Collapse all</button>
  </div>

    <div class="clearfix"></div>
<ul class="list-unstyled" id="duties-a">
<li><details><summary>
`;

  const dashboardPostfix = "</summary>";
  let textResult = $("#textResult").val();
  const regexH3 = /<h3.*>(.)*<\/h3>/g;

  found = textResult.match(regexH3);

  for (let headers of found.slice(1)) {
    let headersApplied = dashboardPrefix
      .concat(headers)
      .concat(dashboardPostfix);
    textResult = textResult.replaceAll(headers, headersApplied);
  }
  let firstHeadersApplied = dashboardTop
    .concat(found[0])
    .concat(dashboardPostfix);
  textResult = textResult.replaceAll(found[0], firstHeadersApplied);

  $("#textResult").val(textResult);
}

/*accordions to images */
function image() {
  const imagePrefix = `
  <ul class="list-unstyled">
  <li><details><summary>
  `;

  let textResult = $("#textResult").val();
  const regexFigureStart = /<p><strong>Figure \d(.)*<\/strong>/g;
  const regexFigureEnd = /(?<=<\/summary>)(.)*<\/p>/g;

  foundFigureStart = textResult.match(regexFigureStart);

  for (let headers of foundFigureStart) {
    let headersApplied = imagePrefix.concat(headers).concat("</summary>");
    textResult = textResult.replaceAll(headers, headersApplied);
  }

  foundFigureEnd = textResult.match(regexFigureEnd);

  for (let headers of foundFigureEnd) {
    let headersApplied = "<p>".concat(headers).concat("</details></li></ul>");
    textResult = textResult.replaceAll(headers, headersApplied);
  }
  $("#textResult").val(textResult);
}

/*h2 id */
/*
to add: 
On this page:
href="id"
*/
function idApplier() {
  let textResult = $("#textResult").val();
  const regexH2 = /(<h2>)(.)*(<\/h2>)/g;
  const regexH2IdApplier = /(>)(.)*(<\/h2>)/g;
  const regexH2idFormat = /(?<=<h2>)(.)*(?=<\/h2>)/g;
  const space = /\s/g;

  foundFigureStart = textResult.match(regexH2);

  for (let headers of foundFigureStart) {
    let id = headers.match(regexH2idFormat);
    id = String(id).replace(space, "-");
    let applier = headers.match(regexH2IdApplier);
    let newString = (' id="' + id + '"').concat(applier);
    $("#textResult").val(textResult);
    textResult = textResult.replaceAll(applier, newString);
  }

  $("#textResult").val(textResult);
}
/*name removerf */
function nameRemover() {
  let textResult = $("#textResult").val();
  const names = /(<a name)(.)*(<\/a>)/g;
  const nameContentFormat = /(?<=<a name=".*">).*(?=<\/a>)/g;

  allNameFound = textResult.match(names);

  for (let aTagWithName of allNameFound) {
    let content = aTagWithName.match(nameContentFormat);
    textResult = textResult.replaceAll(aTagWithName, content);
  }

  $("#textResult").val(textResult);
}
/*td to th*/
function tdToTh() {
  let textResult = $("#textResult").val();
  const regexCaptureFirstTDGroup =
    /((<th class="label-default-active">(.){10,}?))(<\/tr>)/gs;
  const regexconcentrateTd = /<\/tr>/g;
  const thClosure = "</th>";
  const findTDs = textResult.match(regexCaptureFirstTDGroup);
  for (let findTDsGroups of findTDs) {
    let concentrateTd = findTDsGroups.match(regexconcentrateTd);
    newFindTDsGroups = findTDsGroups.replaceAll(concentrateTd, thClosure);

    textResult = textResult.replaceAll(findTDsGroups, newFindTDsGroups);
  }
  $("#textResult").val(textResult);
}
