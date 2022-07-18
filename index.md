## Procedurator



### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
/*accordions to images */
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
  
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/IanBedard/procedurator/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
