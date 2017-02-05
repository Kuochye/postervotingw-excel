$(document).ready(function(){

$( function() {
    var clickCount = localStorage.getItem('clickCount');
    clickCount = clickCount ? parseInt(clickCount) : 0;
    var $num = $('#result1');
    $num.text(clickCount);
    $('#box1').click( function() {
        $num.text(++clickCount);
        localStorage.setItem('clickCount', clickCount);
		document.getElementById("clicked").innerHTML = clickCount;
    });
    
});

$( function() {
    var clickCount2 = localStorage.getItem('clickCount2');
    clickCount2 = clickCount2 ? parseInt(clickCount2) : 0;
    var $num = $('#result2');
    $num.text(clickCount2);
    $('#box2').click( function() {
        $num.text(++clickCount2);
        localStorage.setItem('clickCount2', clickCount2);
		document.getElementById("clicked").innerHTML = clickCount2;
    });
    
});

$( function() {
    var clickCount3 = localStorage.getItem('clickCount3');
    clickCount3 = clickCount3 ? parseInt(clickCount3) : 0;
    var $num = $('#result3');
    $num.text(clickCount3);
    $('#box3').click( function() {
        $num.text(++clickCount3);
        localStorage.setItem('clickCount3', clickCount3);
		document.getElementById("clicked").innerHTML = clickCount3;
    });
});

$( function() {
    var clickCount4 = localStorage.getItem('clickCount4');
    clickCount4 = clickCount4 ? parseInt(clickCount4) : 0;
    var $num = $('#result4');
    $num.text(clickCount4);
    $('#box4').click( function() {
        $num.text(++clickCount4);
        localStorage.setItem('clickCount4', clickCount4);
		document.getElementById("clicked").innerHTML = clickCount4;
    });
    
});

$( function() {
    var clickCount5 = localStorage.getItem('clickCount5');
    clickCount5 = clickCount5 ? parseInt(clickCount5) : 0;
    var $num = $('#result5');
    $num.text(clickCount5);
    $('#box5').click( function() {
        $num.text(++clickCount5);
        localStorage.setItem('clickCount5', clickCount5);
		document.getElementById("clicked").innerHTML = clickCount5;
    });
    
});

$( function() {
    var clickCount6 = localStorage.getItem('clickCount6');
    clickCount6 = clickCount6 ? parseInt(clickCount6) : 0;
    var $num = $('#result6');
    $num.text(clickCount6);
    $('#box6').click( function() {
        $num.text(++clickCount6);
        localStorage.setItem('clickCount6', clickCount6);
		document.getElementById("clicked").innerHTML = clickCount6;
    });
    
});

$( function() {
    var clickCount7 = localStorage.getItem('clickCount7');
    clickCount7 = clickCount7 ? parseInt(clickCount7) : 0;
    var $num = $('#result7');
    $num.text(clickCount7);
    $('#box7').click( function() {
        $num.text(++clickCount7);
        localStorage.setItem('clickCount7', clickCount7);
		document.getElementById("clicked").innerHTML = clickCount7;
    });
    
});

$( function() {
    var clickCount8 = localStorage.getItem('clickCount8');
    clickCount8 = clickCount8 ? parseInt(clickCount8) : 0;
    var $num = $('#result8');
    $num.text(clickCount8);
    $('#box8').click( function() {
        $num.text(++clickCount8);
        localStorage.setItem('clickCount8', clickCount8);
		document.getElementById("clicked").innerHTML = clickCount8;
    });
    
});
/*
$('#box1').click(function() {
		var value = document.getElementById("result1").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result1").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });

$('#box2').click(function() {
		var value = document.getElementById("result2").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result2").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });

$('#box3').click(function() {
		var value = document.getElementById("result3").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result3").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box4').click(function() {
		var value = document.getElementById("result4").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result4").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box5').click(function() {
		var value = document.getElementById("result5").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result5").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box6').click(function() {
		var value = document.getElementById("result6").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result6").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box7').click(function() {
		var value = document.getElementById("result7").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result7").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });
	
$('#box8').click(function() {
		var value = document.getElementById("result8").innerHTML;
		var newValue = parseInt(value,10) + 1;
		document.getElementById("result8").innerHTML = newValue;
		document.getElementById("clicked").innerHTML = newValue;
    });

*/

	$("#resultbox").click(function () {
        $("#dvData").toggle();
    });
	
	$('body').bind('touchend', function(e) {
  e.preventDefault();
  // Add your code here.
})
});
