var ev_date = {
	selected_date:false
}
$(function(){
	$('.calender td').live('click', function(){
		$('.calender td').removeClass('selected');
		if($(this).data('date')){
			$(this).addClass('selected');
			$('.cur_selected_date_txt > span').text($(this).data('date'));
			ev_date.selected_date = $(this).data('date');
		}else{
			$('.cur_selected_date_txt > span').text('N/A');
			ev_date.selected_date = false;
		}
	});
	$('.event_form').live('submit', function(e){
		e.preventDefault();
		var th = $(this);
		var name = $('[name=name]',th).val();
		var description = $('[name=description]',th).val();
		console.log(name, description);
	});
});