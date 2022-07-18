## Procedurator
To see the application live [click here](http://procedurator.ianb.digital/).

Procedurator is a dreamweaver((xml=>html) - from the design window convertor) corrector and style applier for PSPC governement styling ([wet-boew](https://wet-boew.github.io/wet-boew/index-en.html)). The applications runs multiple regex script that converts the html given to a repaired version. It can also agglomerate code depending on the tag and convert it to an accordion.

### How the app works
The application basically works by running multiple line of regex and searching throughout the code and replacing it by nothing ("") or by a correction/governement styling.
```markdown
const regexWidth = /(((width=")+(\d*(%|px)?)")?)+(\s*(valign="top"))?/g;
  const regexBR = /<br(\/)?>(\n.*?)?(?!<\/\w*>)/g;
  const regexTable = /<table .*>/g;
  const regexSpaces = /(<\w*>)(&nbsp;|\s)?(<\/\w*>)/g;
  const regexNames = /\sname="(\w|\d)*"/g;
  const regexDiv =
    /<div>(((\n.*?)(<div>(\s*)<\/div>\n.*?)*(\n*)*)|(\s*))<\/div>/g;
```
for more complicated search and replace, the application will loop a regex search throughout the converted code and apply an agglomaration of governement styling.

```markdown
function image() {

  const imagePrefix = `
  <ul class="list-unstyled" id="duties-a">
  <li><details><summary>
  `;

    let textResult = $("#textResult").val(); 
    const regexFigureStart = /<p><strong>Figure \d(.)*<\/strong>/g;
    const regexFigureEnd = /(?<=<\/summary>)(.)*<\/p>/g;

  foundFigureStart = textResult.match(regexFigureStart);

  for( let headers of  foundFigureStart){
  console.log(2);
    let headersApplied = (imagePrefix.concat(headers).concat("</summary>"))
    textResult = textResult.replaceAll(headers, headersApplied)
 
  };
      
  foundFigureEnd = textResult.match(regexFigureEnd);

  for( let headers of  foundFigureEnd){
  
    let headersApplied = ("<p>".concat(headers).concat("<details/></li></ul>"))
    textResult = textResult.replaceAll(headers, headersApplied)
 
  };
  $("#textResult").val(textResult);
  }
```

For more details see my [script.js file](https://github.com/IanBedard/procedurator/blob/main/script.js).

