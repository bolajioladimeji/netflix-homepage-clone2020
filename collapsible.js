var coll = document.getElementsByClassName("collapsible");
var i;
for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var faq_content = this.nextElementSibling;
        if(faq_content.style.display ==="block"){
            faq_content.style.display = "none";
        }
        else{
            faq_content.style.display = "block";
        }
    });
}
