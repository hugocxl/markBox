# Cheat Sheet

A quick reference to the Markdown syntax.

+++



This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can't cover every edge case, so if you need more information about any of these elements, refer to our reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber's original design document. All Markdown applications support these elements.

| Element                                                      | Markdown Syntax                            |
| ------------------------------------------------------------ | ------------------------------------------ |
| [Heading](https://www.markdownguide.org/basic-syntax/#headings) | `# H1## H2### H3`                          |
| [Bold](https://www.markdownguide.org/basic-syntax/#bold)     | `**bold text**`                            |
| [Italic](https://www.markdownguide.org/basic-syntax/#italic) | `*italicized text*`                        |
| [Blockquote](https://www.markdownguide.org/basic-syntax/#blockquotes-1) | `> blockquote`                             |
| [Ordered List](https://www.markdownguide.org/basic-syntax/#ordered-lists) | `1. First item2. Second item3. Third item` |
| [Unordered List](https://www.markdownguide.org/basic-syntax/#unordered-lists) | `- First item- Second item- Third item`    |
| [Code](https://www.markdownguide.org/basic-syntax/#code-1)   | ``code``                                   |
| [Horizontal Rule](https://www.markdownguide.org/basic-syntax/#horizontal-rules) | `---`                                      |
| [Link](https://www.markdownguide.org/basic-syntax/#links)    | `[title](https://www.example.com)`         |
| [Image](https://www.markdownguide.org/basic-syntax/#images-1) | `![alt text](image.jpg)`                   |

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

| Element                                                      | Markdown Syntax                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Table](https://www.markdownguide.org/extended-syntax/#tables) | `| Syntax | Description || ----------- | ----------- || Header | Title || Paragraph | Text |` |
| [Fenced Code Block](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks) | ````{  "firstName": "John",  "lastName": "Smith",  "age": 25}```` |
| [Footnote](https://www.markdownguide.org/extended-syntax/#footnotes) | `Here's a sentence with a footnote. [^1][^1]: This is the footnote.` |
| [Heading ID](https://www.markdownguide.org/extended-syntax/#heading-ids) | `### My Great Heading {#custom-id}`                          |
| [Strikethrough](https://www.markdownguide.org/extended-syntax/#strikethrough) | `~~The world is flat.~~`                                     |
| [Task List](https://www.markdownguide.org/extended-syntax/#task-lists) | `- [x] Write the press release- [ ] Update the website- [ ] Contact the media` |