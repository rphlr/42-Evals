


function save_login()
{
    var login = document.getElementById('input_login').value;
    localStorage.setItem("g_my_login", login);
    if (login == '')
    {
	var lvl = Math.round(6 + 4*Math.random());
	localStorage.setItem("g_my_eval", JSON.stringify([lvl]));
	window.location = "level"+lvl+".html";
    }
    else
	window.location = 'level1.html';
}


function load_login()
{
    var login;
    if (!(login = localStorage.getItem("g_my_login")))
        login = ''; // will means full random during sim.
    return (login);
}
