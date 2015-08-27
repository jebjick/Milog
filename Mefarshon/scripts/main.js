document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
}

function translate() {
	$('#loading').show();
    $('#iframe_translation').hide();
    $('#iframe_translation').attr('src', 'http://emet-solutions.com/mefarshon/mefarshon.php?w=' + $('#word').val());
}

$('#iframe_translation').load(function(){
	$('#loading').hide();
    if ($(this).attr('src') != 'about:blank') $('#iframe_translation').show();
});

$('#translateButton').click(function () {
    translate();
});

$('#translateForm').submit(function () {
    translate();

    return false;
});