import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss'],
})
export class HelpPageComponent implements OnInit {
  title = 'test-markdown';


  language = 'html';
  content = '<p>test</p>';
  markdown = 'Hola caboron'

  constructor() { }

  public pipeMarkdown = '# Markdown';

  ngOnInit() {
  }

}
