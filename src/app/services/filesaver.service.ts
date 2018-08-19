import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesaverService {

  constructor() { }

  onTestSaveFile() {
    const blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");
  }
}

