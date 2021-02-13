import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-set-times',
  templateUrl: './set-times.component.html',
  styleUrls: ['./set-times.component.css'],
})
export class SetTimesComponent implements OnInit {

  @ViewChild('videoPlayer') videoElement; 
  transcript; 
  activeEntry;
  videoBlob;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  handleTranscriptFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e => {
      const jsonContent = e.target.result as string;
      this.transcript = JSON.parse(jsonContent);
      this.activeEntry = this.transcript[0];
    })
    reader.readAsText(file);
  }

  handleVideoFile(e) {
    const file = e.target.files[0];

    this.videoBlob = URL.createObjectURL(file);

    console.log(this.videoElement);

    this.videoElement.nativeElement.src = this.videoBlob;
  }

  setTime(entry) {
    entry.time = this.videoElement.nativeElement.currentTime;
    this.selectNextEntry(entry);
  }

  selectNextEntry(currentEntry) {
    const currentKey = this.transcript.findIndex(entry => entry == currentEntry);
    this.activeEntry = this.transcript[currentKey + 1];
  }

}
