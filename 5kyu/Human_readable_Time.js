function humanReadable (sec) {
   const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60); 
    const seconds = sec % 60;
     return`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}