(function () {


    var header = document.getElementsByClassName('header_content');
    var boody = document.body.scrollTop;
    // alert("the hieght" + boody)
    // var navList = document.getElementsByClassName('header_content');
    window.onscroll = function () {


        var bounding = header[0].getBoundingClientRect();
        console.log(bounding.top)
        
        if (bounding.top < -289) {
            console.log("hi")
            $('.header_list').css("backgroundColor", "black")
        } else {
            $('.header_list').css("backgroundColor", "transparent")
        }

    }


}())