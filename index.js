//how many pixels to scroll down before the next message is shown
const pixelCount = 6399;

document.addEventListener("DOMContentLoaded", () => {
//   const pixel = document.querySelector('.pixel');
//   pixel.addEventListener("mouseenter", () => {
//     pixel.classList.add("colored-in");
//   });
//   console.dir(pixel);

    //  select the screen
    const screen = document.querySelector('#screen'  )   ;
    //  loop through the screen and add the colored-in class to each pixel
    for (let i =0; i < pixelCount; i++){
        // create the element
        const pixel = document.createElement('div');
        // set the props (add pixel class), and add event listener 
        pixel.classList.add("pixel");
        
        // append the element to the screen
        screen.appendChild(pixel);
        // mount the element on the DOM

    }
    // querySelectorAll 
    const allPixels = Array.from(document.querySelectorAll('.pixel'));
    // console.log(allPixels);
    // loop through the pixels and add the event listener

    // console.log(pixelArray.length);
    allPixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", () => {
            pixel.classList.add("colored-in");
        } );
    } );

    // add event listener to each pixel

    // clear the screen when clear button is clicked
    const clearButton = document.querySelector('#clear-screen-button');
    clearButton.addEventListener("click", () => {
        allPixels.forEach(pixel => {
            pixel.classList.remove("colored-in");
        } );
    }
    );


});
