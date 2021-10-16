console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('music_files/1.mp3.mp3');
let masterplay = document.getElementyById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');


let songs = [
    { songname="Into Your Arms", filepath: "c:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
    { songname="Into Your Arms", filepath: "C:\Users\Admin\Desktop\Code Playground", coverpath: "covers/1.jpg" },
]
// audioElement,play();

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
    }
})

//Listen to Events
myprogressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
})

