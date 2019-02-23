function open_one(){
	var docs = $(document).find('.vibor01');
	delete docs[0];
	if(docs[1]['value'] == "1"){
		$('.logins').attr('style','display:none!important;');
		$('.posts').attr('style','display:none!important;');
		$('.links1').attr('style','display:block!important;');
		$('.logins').val("");
		$('.posts').val("")
	}else{
		$('.logins').attr('style','display:block!important;');
		$('.posts').attr('style','display:block!important;');
		$('.links1').attr('style','display:none!important;');
		if($(document).width() < 700){
			$("#tml-content-wrapper").attr('style','top: 4%!important;');
		}
	}
}
function open_one_p(pre){
	var docs = $(document).find('.vibor01');
	delete docs[0];
	if(pre == "1"){
		$('.logins').attr('style','display:none!important;');
		$('.posts').attr('style','display:none!important;');
		$('.links1').attr('style','display:block!important;');
		$('.logins').val("");
		$('.posts').val("")
	}else{
		$('.logins').attr('style','display:block!important;');
		$('.posts').attr('style','display:block!important;');
		$('.links1').attr('style','display:none!important;');
		if($(document).width() < 700){
			$("#tml-content-wrapper").attr('style','top: 4%!important;');
		}
	}
}
function open_two(){
	var docs = $(document).find('.vibor019');
	delete docs[0];
	if(docs[1]['value'] == "1"){
		$('.logins9').attr('style','display:none!important;');
		$('.posts9').attr('style','display:none!important;');
		$('.links19').attr('style','display:block!important;');
		$('.logins9').val("");
		$('.posts9').val("")
	}else{
		$('.logins9').attr('style','display:block!important;');
		$('.posts9').attr('style','display:block!important;');
		$('.links19').attr('style','display:none!important;');
		if($(document).width() < 700){
			$("#tml-content-wrapper").attr('style','top: 4%!important;');
		}
	}
}
function open_two_p(t){
	var docs = $(document).find('.vibor019');
	delete docs[0];
	if(t == "1"){
		$('.logins9').attr('style','display:none!important;');
		$('.posts9').attr('style','display:none!important;');
		$('.links19').attr('style','display:block!important;');
		$('.logins9').val("");
		$('.posts9').val("")
	}else{
		$('.logins9').attr('style','display:block!important;');
		$('.posts9').attr('style','display:block!important;');
		$('.links19').attr('style','display:none!important;');
		if($(document).width() < 700){
			$("#tml-content-wrapper").attr('style','top: 4%!important;');
		}
	}
}
function open_one2(){
	var docs = $(document).find('.vibor012');
	delete docs[0];
	if(docs[1]['value'] == "1"){
		$('.logins2').attr('style','display:none!important;');
		$('.posts2').attr('style','display:none!important;');
		$('.links12').attr('style','display:block!important;');
		$('.logins2').val("");
		$('.posts2').val("")
	}else{
		$('.logins2').attr('style','display:block!important;');
		$('.posts2').attr('style','display:block!important;');
		$('.links12').attr('style','display:none!important;');
	}
}
function getElementCustom(attribut){
	var docsi = $(document).find(attribut);
	delete docsi[0];
	return docsi[1]['value'];
}
function call_a1(z1,z2,z3,z4,z5,z6){
	var apost = getElementCustom(".apost1");
	var akoll = getElementCustom(".akoll1");

	var itogs = apost * akoll;

	if(itogs < 1000){
				var cens = 0.04;
			}else if(itogs >= 1000 && itogs < 5000){
				var cens = z1;
			}else if(itogs >= 5000 && itogs < 10000){
				var cens = z2;
			}else if(itogs >= 10000 && itogs < 25000){
				var cens = z3;
			}else if(itogs >= 25000 && itogs < 50000){
				var cens = z4;
			}else if(itogs >= 50000 && itogs < 100000){
				var cens = z5;
			}else if(itogs >= 100000){
				var cens = z6;
			}
	$itog = (akoll * cens) * apost;
	$('.resultviewA1').val($itog.toFixed(2));
	$('.asum1').html($itog.toFixed(2));
}
function call_a2(z1,z2,z3,z4,z5,z6){
	var apost = getElementCustom(".apost2");
	var akoll = getElementCustom(".akoll2");

	var itogs = apost * akoll;

	if(itogs < 1000){
				var cens = 0.05;
			}else if(itogs >= 1000 && itogs < 5000){
				var cens = z1;
			}else if(itogs >= 5000 && itogs < 10000){
				var cens = z2;
			}else if(itogs >= 10000 && itogs < 25000){
				var cens = z3;
			}else if(itogs >= 25000 && itogs < 50000){
				var cens = z4;
			}else if(itogs >= 50000 && itogs < 100000){
				var cens = z5;
			}else if(itogs >= 100000){
				var cens = z6;
			}
	$itog = (akoll * cens) * apost;
	$('.resultviewA2').val($itog.toFixed(2));
	$('.asum2').html($itog.toFixed(2));
}
function tes1(form){
	var hh = $(document).find('.f1');
			delete hh[0];
			var t = hh[1].value;
			if(t < 100){
				$('.f1').val("100");
				alert("Количество должно быть не меньше 100");
				$(".summa1").html("5.00");
				call1();
				return false;
			}
			return true;
}
function tes2(form){
	var hh = $(document).find('.f12');
			delete hh[0];
			var t = hh[1].value;
			if(t < 100){
				$('.f12').val("100");
				alert("Количество должно быть не меньше 100");
				$(".summa12").html("30.00");
				call2();
				return false;
			}
			return true;
}
function tes3(form){
	var hh = $(document).find('.f123');
			delete hh[0];
			var t = hh[1].value;
			if(t < 100){
				$('.f123').val("100");
				alert("Количество должно быть не меньше 100");
				$(".summa123").html("4.00");
				call3();
				return false;
			}
			return true;
}
function tes4(form){
	var hh = $(document).find('.f19');
			delete hh[0];
			var t = hh[1].value;
			if(t < 100){
				$('.f19').val("100");
				alert("Количество должно быть не меньше 100");
				$(".summa19").html("5.00");
				call4();
				return false;
			}
			return true;
}
function tes5(form){
	var akoll = getElementCustom(".akoll1");
	if(akoll >= 100){
	}else{
		$('.akoll1').val('100');
		alert("Количество должно быть не меньше 100");
		call_a1();
		return false;
	}
}
function tes6(form){
	var akoll = getElementCustom(".akoll2");
	if(akoll >= 100){
	}else{
		$('.akoll2').val('100');
		alert("Количество должно быть не меньше 100");
		call_a2();
		return false;
	}
}
function tes7(form){
	var hh = $(document).find('.f12a');
			delete hh[0];
			var t = hh[1].value;
			if(t < 100){
				$('.f12a').val("100");
				alert("Количество должно быть не меньше 100");
				$(".summa12a").html("11.00");
				call2a();
				return false;
			}
			return true;
}
function dopus1(v1,v2){
	var i = getElementCustom("."+v1);
	$('.'+v2).html(i);
}

/*left menu*/
$(function(){
    $(".menu__showsub").click(function() {
        $(".menu__check").removeAttr('checked');
    });
});