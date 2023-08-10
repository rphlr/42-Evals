
var g_sim_logs = '';
var g_my_login = 0;
var g_rand_prev;
var g_rand_repl = [];
var g_eval_lvls;


function my_console_log(str)
{
//    console.log(str);
}


function hash_login(login)
{
    var seed = 0;
    for (var i = 0; i < login.length; i ++)
    {
	if (i%2 == 0)
	    seed += 973 * (login.charCodeAt(i)+i);
	else
	    seed += 5 * login.charCodeAt(i) * i;
    }
//    console.log("hash login : '"+login+"' -> "+seed);
    return (seed);
}


function err(thetype, field)
{
    my_console_log("Fatal error in "+thetype+", on field "+field);
    throw '';
}


function my_random(a, b)
{
    if (g_my_login == '')
	return (Math.round(parseInt(a) + (parseInt(b)-parseInt(a))*Math.random()));
    var prev = g_rand_prev;
    prev ^= prev << 13;
    prev ^= prev >> 17;
    prev ^= prev << 5;
    g_rand_prev = prev;
    prev = (prev & 0x7FFFFFFF) % (parseInt(b)-parseInt(a)+1);
    return (Math.round(parseInt(a) + prev));
}

function random_repl(str)
{
    var regex = /\[(\d+)-(\d+)\]([a-z])/g;
    var res;
    var str2 = str;
    while (res = regex.exec(str))
    {
	my_console_log(res);
	g_rand_repl[res[3]] = my_random(res[1], res[2]);
	str2 = str2.replace(res[0], ""+g_rand_repl[res[3]]);
	my_console_log(str2);
    }
    regex = /\[([a-z])\]/g;
    while (res = regex.exec(str))
    {
	my_console_log(res);
	if (g_rand_repl[res[1]] != null)
	{
	    str2 = str2.replace(res[0], ""+g_rand_repl[res[1]]);
	    my_console_log(str2);
	}
	else
	    return (null);
    }

    if (str2 == "default") return (str2);
    // check if any non digital, non dot, non slash char, except previous line
    regex = /[^\d\.\/]/g;
    if (regex.exec(str2))
	return (null);
    
    return (str2);
}

function show_host(root, h)
{
    if (!h['id']) err("hosts", "id");
    if (!h['type']) err("hosts id "+h['id'], "type");
    if (!h['name']) err("hosts id "+h['id'], "name");
    if (!h['geometry']) err("hosts id "+h['id'], "geometry");
    if (!h['img']) err("hosts id "+h['id'], "img");

    var tab = h['geometry'].split(/[^0-9]+/);
    if (tab.length != 4) err("hosts id "+h['id'], "geometry parsing");
    h['w'] = parseInt(tab[0]);
    h['h'] = parseInt(tab[1]);
    h['x'] = parseInt(tab[2]);
    h['y'] = parseInt(tab[3]);
    
    var newelem = document.createElement('div');
    newelem.className = 'host_div';
    newelem.style.position = "absolute";
    newelem.style.width = h['w']+'px';
    newelem.style.height = h['h']+'px';
    newelem.style.top = h['y'] + 'px';
    newelem.style.left = h['x'] + 'px';
    newelem.style.backgroundImage = 'url(img/'+h['img']+')';
    root.appendChild(newelem);

    // label + routes
    var tab = h['labelpos'].split(',');
    if (tab.length != 2) err("host id "+h['id'], "labelpos parsing");
    h['lx'] = parseInt(tab[0]);
    h['ly'] = parseInt(tab[1]);

    var newelem = document.createElement('div');
    newelem.className = 'host_info_div';
    newelem.style.position = "absolute";
    newelem.style.top = (h['y']+h['ly'])+'px';
    newelem.style.left = (h['x']+h['lx'])+'px';
    var label = '<table><tr><td>'+h['type']+' '+h['id']+': <i>'+h['name']+'</id></td></tr>';
    var str = '';
    routes.forEach(r => {if (h['id'] == r['hid']) { str += '<tr><td>'+get_route_info(r)+'</td></tr>\n'; r['h'] = h;}});
    if (str != '') label += '<tr><td>Routes :</td></tr>\n'+str;
    label += '</table>';
    newelem.innerHTML = label;
    root.appendChild(newelem);
    
}



function get_route_info(r)
{
    if (!r['rid']) err("route", "rid");
    if (!r['hid']) err("route id "+r['rid'], "hid");
    if (!r['route']) err("route id "+r['rid'], "route");
    if (!r['route_edit']) err("route id "+r['rid'], "route_edit");
    if (!r['gate']) err("route id "+r['rid'], "gate");
    if (!r['gate_edit']) err("route id "+r['rid'], "gate_edit");

    if ((r['route'] = random_repl(r['route'])) == null) err("route id "+r['rid'], "route ip random syntax");
    if ((r['gate'] = random_repl(r['gate'])) == null) err("route id "+r['rid'], "gate random syntax");
    
    if (r['route_edit'] == 'true') route_active = ''; else route_active = 'disabled';
    if (r['gate_edit'] == 'true') gate_active = ''; else gate_active = 'disabled';
    var routestr = '<input size=15 type=text id=route_'+r['rid']+' value="'+r['route']+'" '+route_active+'> =&gt; <input size=15 type=text id=gate_'+r['rid']+' value="'+r['gate']+'" '+gate_active+'>';
//    my_console_log("add label route : ##"+routestr);
    return (routestr);
}



function show_ifs(root, itf)
{
    if (!itf['if']) err("ifs", "if");
    if (!itf['hid']) err("ifs "+itf['if'], "hid");
    if (!itf['ip']) err("ifs "+itf['if'], "ip");
    if (!itf['mask']) err("ifs "+itf['if'], "mask");
    if (!itf['ip_edit']) err("ifs "+itf['if'], "ip_edit");
    if (!itf['mask_edit']) err("ifs "+itf['if'], "mask_edit");
    if (!itf['type']) err("ifs "+itf['if'], "type");
    if (!itf['pos']) err("ifs "+itf['if'], "pos");

    if ((itf['ip'] = random_repl(itf['ip'])) == null) err("ifs "+itf['if'], "ip random syntax");
    if ((itf['mask'] = random_repl(itf['mask'])) == null) err("ifs "+itf['if'], "mask random syntax");
    
    hosts.forEach(h => {if (itf['hid'] == h['id']) itf['h'] = h});

    var tab = itf['pos'].split(',');
    if (tab.length != 2) err("ifs id "+itf['if'], "pos parsing");
    itf['dx'] = parseInt(tab[0]);
    itf['dy'] = parseInt(tab[1]);

    if (itf['type'] == 'std')
    {
	var newelem = document.createElement('div');
	newelem.className = 'itf_div';
	newelem.style.position = "absolute";
	newelem.style.top = (itf['h']['y']+itf['dy'])+'px';
	newelem.style.left = (itf['h']['x']+itf['dx'])+'px';
	if (itf['ip_edit'] == 'true') ip_active = ''; else ip_active = 'disabled';
	if (itf['mask_edit'] == 'true') mask_active = ''; else mask_active = 'disabled';
	newelem.innerHTML = 'Interface '+itf['if']+'<br />IP : <input size=15 type=text id=ip_'+itf['if']+' value="'+itf['ip']+'" '+ip_active+'><br />Mask : <input size=15 type=text id=mask_'+itf['if']+' value="'+itf['mask']+'" '+mask_active+'>';
	root.appendChild(newelem);
    }
}





function draw_links(root, l)
{
    if (!l['if1'] || !l['if2']) err("links", "id");

    ifs.forEach(i => {if (i['if'] == l['if1']) l['e1'] = i});
    ifs.forEach(i => {if (i['if'] == l['if2']) l['e2'] = i});

    hosts.forEach(h => {if (h['id'] == l['e1']['hid']) l['h1'] = h});
    hosts.forEach(h => {if (h['id'] == l['e2']['hid']) l['h2'] = h});
    
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('id', 'link_'+l['if1']+'_'+l['if2']);
    aLine.id = 'link_'+l['if1']+'_'+l['if2'];
    aLine.setAttribute('x1', ""+(parseInt(l['h1']['x'])+parseInt(l['h1']['w'])/2));
    aLine.setAttribute('y1', ""+(parseInt(l['h1']['y'])+parseInt(l['h1']['h'])/2));
    aLine.setAttribute('x2', ""+(parseInt(l['h2']['x'])+parseInt(l['h2']['w'])/2));
    aLine.setAttribute('y2', ""+(parseInt(l['h2']['y'])+parseInt(l['h2']['h'])/2));
    aLine.setAttribute('stroke', "black");
    aLine.setAttribute('stroke-width', 3);
    (document.getElementById('sl')).appendChild(aLine);
}


function prep_goals(g)
{
    if (!g['id']) err("goals", "id");
    if (!g['type']) err("goals "+g['id'], "type");
    if (g['type'] == 'reach')
    {
	if (!g['id1']) err("goals "+g['id'], "id1");
	if (!g['id2']) err("goals "+g['id'], "id2");
	hosts.forEach(h => {if (h['id'] == g['id1']) g['h1'] = h});
	hosts.forEach(h => {if (h['id'] == g['id2']) g['h2'] = h});
    }
    if (g['type'] == 'reach_if')
    {
	if (!g['if_id1']) err("goals "+g['id'], "if_id1");
	if (!g['if_id2']) err("goals "+g['id'], "if_id2");
	ifs.forEach(itf => {if (itf['if'] == g['if_id1']) { g['h1'] = itf['h']; g['if1'] = itf;}});
	ifs.forEach(itf => {if (itf['if'] == g['if_id2']) { g['h2'] = itf['h']; g['if2'] = itf;}});
    }
}


function next_eval()
{
    if (g_eval_lvls.length >= 3)
	return ('end.html');
    var lvl;
    do {
	lvl = Math.round(6 + 4*Math.random());
    } while (g_eval_lvls.includes(lvl))
    g_eval_lvls.push(lvl);
    localStorage.setItem("g_my_eval", JSON.stringify(g_eval_lvls));
    return ('level'+lvl+'.html');
}


function my_download(filename, text)
{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function dl_config()
{
    var infos = { 'routes':{}, 'ifs':{} };
    routes.forEach(elem => { infos['routes'][elem['rid']] = {};
			     if (elem['route_edit'] == 'true') infos['routes'][elem['rid']]['route'] = document.getElementById('route_'+elem['rid']).value;
			     if (elem['gate_edit'] == 'true') infos['routes'][elem['rid']]['gate'] = document.getElementById('gate_'+elem['rid']).value;
			   });
    ifs.forEach(elem => { infos['ifs'][elem['if']] = {};
			  if (elem['ip_edit'] == 'true') infos['ifs'][elem['if']]['ip'] = document.getElementById('ip_'+elem['if']).value;
			  if (elem['mask_edit'] == 'true') infos['ifs'][elem['if']]['mask'] = document.getElementById('mask_'+elem['if']).value;
			});
    my_download('level'+level+'.json', JSON.stringify(infos));
}


function show_goals(g)
{
    g_sim_logs += '******* Goal ID '+g['id']+' ********\n';
    var div = document.getElementById("goals_id");
    div.innerHTML += 'Goal '+g['id']+' : ';
    if (g['type'] == 'reach')
    {
	var obj = sim_goal(g);
	div.innerHTML += '<i>'+g['h1']['name']+'</i> need to communicate with <i>'+g['h2']['name']+'</i> - Status : '+obj.text;
    }
    if (g['type'] == 'reach_if')
    {
	var obj = sim_goal(g);
	div.innerHTML += 'Interface <i>'+g['if1']['if']+'</i> need to communicate with interface <i>'+g['if2']['if']+'</i> - Status : '+obj.text;
    }
    div.innerHTML += '<br />\n';
    return (obj.status);
}


function all_goals()
{
    if (g_my_login != '')
	g_sim_logs = '** generated for login "'+g_my_login+'" **\n';
    else
	g_sim_logs = '** evaluation mode round '+g_eval_lvls.length+'**\n';
    document.getElementById("goals_id").innerHTML = '<h2>Level '+level+' : </h2>\n';
    var nb = 0;
    goals.forEach(elem => nb += show_goals(elem));
    document.getElementById("goals_id").innerHTML += '<input type=button value="Check again" onclick="all_goals();"> <input type=button value="Get my config" onclick="dl_config();">';
    if (nb == goals.length)
    {
	if (g_my_login != '')
	{
	    if (level < 10)
		document.getElementById("goals_id").innerHTML += " <input type=button value='Next level' onclick='window.location=\"level"+(level+1)+".html\";'>";
	    else
		document.getElementById("goals_id").innerHTML += " <input type=button value='Complete !' onclick='window.location=\"end.html\";'>";
	}
	else
	{   // defense case
	    document.getElementById("goals_id").innerHTML += " <input type=button value='Next' onclick='window.location=next_eval();'>";
	}		
    }
    document.getElementById("logs_id").innerHTML = g_sim_logs.replace(/\n/g, '<br />');
}


function load_board()
{
    if (!(g_my_login = localStorage.getItem("g_my_login")))
	g_my_login = ''; // will means evaluation & full random
    g_rand_prev = level + hash_login(g_my_login); // initialize replayable pseudo random generator
    if (g_my_login == '')
	g_eval_lvls = JSON.parse(localStorage.getItem("g_my_eval"));
    
    var root = document.getElementById("root_id");

    hosts.forEach(elem => show_host(root, elem));

    ifs.forEach(elem => show_ifs(root, elem));
    
    links.forEach(elem => draw_links(root, elem));

    goals.forEach(elem => prep_goals(elem));
    all_goals();
    // only for very first time : don't show any log
    document.getElementById("logs_id").innerHTML = 'Logs will be displayed here';
}
