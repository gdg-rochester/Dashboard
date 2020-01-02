$(document).ready(function(){
    $('.datepicker').datepicker();
    $('.chips-initial').chips({
        data: [{
            tag: 'Cloud',
        }, {
            tag: 'Web',
        }, {
            tag: 'Flutter',
        }],
    });
    $('.timepicker').timepicker();
});
