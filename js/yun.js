/*切换*/
$(function(){
    $(".js-tab").each(function(){
    	var _js_tab_name = $(this).attr("name");
	    	$(".js-tab[name='"+_js_tab_name+"']").find("li").each(function(n){
		    	$(this).click(function(){
		    		 $(this).addClass("active").siblings().removeClass("active");
		             $(".js-tab-"+_js_tab_name).find(".js-tab-panel").eq(n).show().siblings().hide(); 
		    	})

	    	})
    })
    /*块状清边距*/
    var _box_col = $(".js-box-column").attr("data-grid");
    $(".js-box-column > *").each(function(n){
        // alert(n%_box_col);
       if(n%_box_col==0){
          $(this).addClass("ml-remove");
          if(n==0){
          	 $(this).addClass("mt-remove");
          } 
       }else if(n<_box_col){
          $(this).addClass("mt-remove");
       }
    })

    /*单选*/
    $(".js-radio").find("label").click(function(){
    	var _val = $(this).attr("val");
    	$(this).addClass("active").siblings().removeClass("active");
    	$(this).parents(".js-radio").find("input[type=hidden]").attr("value",_val)

    }) 
}) 