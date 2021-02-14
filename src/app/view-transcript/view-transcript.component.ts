import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-transcript',
  templateUrl: './view-transcript.component.html',
  styleUrls: ['./view-transcript.component.css']
})
export class ViewTranscriptComponent implements OnInit {

  transcript;

  constructor() { }

  ngOnInit(): void {
  }

  handleTranscriptFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e => {
      const jsonContent = e.target.result as string;
      this.transcript = JSON.parse(jsonContent);
    })
    reader.readAsText(file);
  }

}
