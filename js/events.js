grid.addEventListener("dblclick",function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
});

// grid.addEventListener("click",function(event){
	// console.log(event.target.textContent);
// });