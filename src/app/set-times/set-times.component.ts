import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-set-times',
  templateUrl: './set-times.component.html',
  styleUrls: ['./set-times.component.css'],
})
export class SetTimesComponent implements OnInit {

  @ViewChild('videoPlayer') videoElement;
  video;
  transcript; 
  activeEntry;
  videoBlob;

  constructor() { }

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
    this.videoElement.nativeElement.src = this.videoBlob;
  }

  setTime(e, entry) {
    e.stopPropagation();
    entry.time = this.videoElement.nativeElement.currentTime - .25;
    this.selectNextEntry(entry);
  }

  selectNextEntry(currentEntry) {
    const currentKey = this.transcript.findIndex(entry => entry == currentEntry);
    this.setActiveEntry(this.transcript[currentKey + 1]);
  }

  selectPrevEntry(currentEntry) {
    const currentKey = this.transcript.findIndex(entry => entry == currentEntry);
    this.setActiveEntry(this.transcript[currentKey - 1]);
  }

  exportTranscript() {
    this.downloadJson(this.transcript);
  }

  setActiveEntry(entry) {
    this.activeEntry = entry;
    if (entry.time) {
      this.videoElement.nativeElement.currentTime = entry.time;
    }
  }

  downloadJson(myJson){
    var sJson = JSON.stringify(myJson);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "transcript.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const video = this.videoElement.nativeElement;

    if (event.key == ' ') {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    } 
    
    else if (event.key == 'ArrowDown') {
      this.selectNextEntry(this.activeEntry);
    } 
    
    else if (event.key == 'ArrowUp') {
      this.selectPrevEntry(this.activeEntry);
    }

    else if (event.key == 's') {
      this.setTime(event, this.activeEntry);
    }

    else if (event.key == 'ArrowLeft') {
      video.currentTime = video.currentTime - 5; 
    }

    else if (event.key == 'ArrowRight') {
      video.currentTime = video.currentTime + 5; 
    }

    else {
      console.log(event.key)
    }

  }

}
