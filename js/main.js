// form variable
const form = document.getElementById('text-area');
// here will append created child after events
const parent = document.getElementById('medium');

form.addEventListener( 'submit', event => {
            event.preventDefault();
            const textValue = document.getElementById('text').value;
            const newText = document.createElement('p');
            const timeHolder = document.createElement('span');
                  timeHolder.innerHTML = getTime();
                  newText.innerHTML = textValue;
                  newText.append(timeHolder);
            parent.prepend(newText);
            const scroll = document.getElementById('medium');
            scroll.scrollTop = scroll.scrollHeight;
            form.reset();
});

form.addEventListener( 'keydown', event => {
    if (event.key === "Enter"){
        event.preventDefault();
        if( document.getElementById('text').value !=="") {
        const textValue = document.getElementById('text').value;
        const newText = document.createElement('p');
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var interval = 50; // in milliseconds
        var delay = 50; // in milliseconds
        
        
        var index = 0;
        
        
        var timer = setInterval(function() {
            
            
            newText.innerHTML += textValue.charAt(index);
            
            // increment the character index
            index++;
            
            // if all characters have been added, clear the interval
            if (index >= text.length) {
                clearInterval(timer);
            }
        }, interval + delay);
        
        
        
        
        
        
        
        const timeHolder = document.createElement('span');
        timeHolder.innerHTML = getTime();
//      newText.innerHTML = textValue;
        newText.append(timeHolder);



        parent.prepend(newText);
        const scroll = document.getElementById('medium');
        scroll.scrollTop = scroll.scrollHeight;
        form.reset();
    }
} });






function getTime(){
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// determine whether it is AM or PM
var amOrPm = hours < 12 ? "AM" : "PM";

// convert to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // handle midnight and noon

// format the time as a string
var timeString = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)  + " " + amOrPm;

return timeString;
}

