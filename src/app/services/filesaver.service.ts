import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesaverService {

  constructor() { }

  onTestSaveFile(content,title) {
    const blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    const fileName = `${title}.md`;
    FileSaver.saveAs(blob, fileName);
  }
}

