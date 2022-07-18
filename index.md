## Procedurator


sadasadsda

### How the app works

Procedurator is a ...

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

For more details see my [script.js file]([https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax](https://github.com/IanBedard/procedurator/blob/main/script.js)).


### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
