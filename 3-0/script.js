$(document).ready(function() {
	$('.list-group-item').click(function() {
		var s = $(this).find('span');

			var num = Number(s.html());
			num--;
			if (num <= 0) {
				num = '';
			}
			s.html(num);	
	});
});