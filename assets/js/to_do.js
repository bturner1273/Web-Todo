
var line_height;

window.onload = function(){
  //bold first list item because it is the title
  $("li:first").css("font-weight", "bold");
  bind();
};

function bind(){
  $(".add_todo_btn").click(function(){
      if($("input").val() != ""){
        $("ul").append($("<li>" + $("input").val() + "<btn class='hide remove_todo_btn'>Remove Todo</btn></li>"));
        line_height = $("li").length * 45.67;
        $("input").val("");
        $(".lines").css("height", line_height);
        bind_last();
      }
  });

  $(document).keypress(function(event){
    if(event.which == 13){
      if($("input").val() != ""){
        $("ul").append($("<li>" + $("input").val() + "<btn class='hide remove_todo_btn'>Remove Todo</btn></li>"));
        line_height = $("li").length * 45.67;
        $("input").val("");
        $(".lines").css("height", line_height);
        bind_last();
      }
    }
  });
}


function bind_last(){
  $("li:last").hover(function(){
    $(this).children().fadeIn("fast", function(){
      $(this).children().removeClass("hide");
    });
  }, function(){
    $(this).children().fadeOut("fast", function(){
      $(this).children().addClass("hide");
    });
  });
  $(".remove_todo_btn:last-child").click(function(){
    $(this).parent().remove();
    line_height = $("li").length * 45.67;
    $(".lines").css("height", line_height);
  });
}
