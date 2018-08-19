import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesaverService {

  constructor() { }

  onTestSaveFile() {
    const blob = new Blob(["Hol\nSoy un puto amo\n\n## hola\n\n### hola\n\n### bajs"], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.md");
  }
}

