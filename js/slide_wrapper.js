let current_slide = 0;
var slide_button = document.querySelectorAll(".slide-wrapper a");
var slide_container = document.getElementsByClassName("slide-container")[0];

function scrollToSlide(index){
	slide_container.querySelectorAll("li")[index].scrollIntoView(false, {behaviour: "smooth", block: "center", inline: "center"});
}

slide_button[0].addEventListener('click', () => {
	current_slide = current_slide % slide_container.querySelectorAll("li").length;
	scrollToSlide(current_slide);
});

slide_button[1].addEventListener('click', () => {
	current_slide = (current_slide + 1) % slide_container.querySelectorAll("li").length;
	scrollToSlide(current_slide);
});
