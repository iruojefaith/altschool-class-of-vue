import { ref } from "@vue/reactivity";



const colourArray = () =>{
    const colours = ["Green", "Purple", "Red", "Blue" ];
    let message = ref("Select a Colour....");

    const matchColor = (value) => {

        const randomColour = Math.floor(Math.random()*3)+1;
        if(colours[randomColour] === value) {
            message.value = `Congratulations You Won.......[answer:${colours[randomColour]}]`;
            return;
        }
        message.value= `Sorry You Loose[answer: ${colours[randomColour]}]`;
    }
    return {colours, message, matchColor};
};
export default colourArray;