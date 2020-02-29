import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentVideo='Play Video';
  videos = [
      {name: 'Nature', url: "https://vjs.zencdn.net/v/oceans.mp4"},
      {name: 'Nature2', url: "https://stackblitz.com/files/vkas05/github/aakash18012/vkas05/master/src/assets/animal.mp4"}
  ];

  tableData=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
  ];



constructor(private elRef: ElementRef){}

videoChange(url){
  this.currentVideo = url;
  console.log(this.currentVideo);
  const player= this.elRef.nativeElement.querySelector('video');
  player.load();
 
}

}
