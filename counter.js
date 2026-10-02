let no = 0



$(".plus5Btn").click(function(){
    no = no + 5
    $("h2").text(no)
    if(no > -1){
        $("h2").css("color", "black")
    }
})
$(".plusBtn").click(function(){
    no++
    $("h2").text(no)
    if(no > -1){
        $("h2").css("color", "black")
    }
})
$(".minusBtn").click(function(){
    no--
    $("h2").text(no)
    if(no < 0){
        $("h2").css("color", "red")
    }
})
$(".minus5Btn").click(function(){
    no = no - 5
    $("h2").text(no)
    if(no < 0){
        $("h2").css("color", "red")
    }
})


$(".resetBtn").click(function(){
    no = 0
    $("h2").text(0)
    if(no > -1){
        $("h2").css("color", "black")
    }
})


