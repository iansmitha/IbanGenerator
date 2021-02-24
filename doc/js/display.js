function display() {
    var e = document.getElementById("country_input").value;
    updateUrl("?country="+e);
    var country_input = e;
    var how = buildIbans(country_input);
    document.getElementById("demo").innerHTML = how;
}

$('document').ready(function() {
    var active_country = "Spain"
    var x = document.body.innerHTML = buildIbans(active_country).substring(2);
});
