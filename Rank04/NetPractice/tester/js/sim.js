

var visited_host = [];

var private_subnets = [
    {'hid':'__none__', 'rid':'private_class_A', 'route':'10.0.0.0/8', 'gate':'0.0.0.0', 'route_edit':'false', 'gate_edit':'false', 'h':{'type':'internet'}},
    {'hid':'__none__', 'rid':'private_class_B', 'route':'172.16.0.0/12', 'gate':'0.0.0.0', 'route_edit':'false', 'gate_edit':'false', 'h':{'type':'internet'}},
    {'hid':'__none__', 'rid':'private_class_C', 'route':'192.168.0.0/16', 'gate':'0.0.0.0', 'route_edit':'false', 'gate_edit':'false', 'h':{'type':'internet'}}
];

// simulate network


function ip_to_int(s)
{
    var tab = s.split('.');
    if (tab.length != 4) return (null);
    if (parseInt(tab[0]) < 0 || parseInt(tab[0]) > 223 || parseInt(tab[1]) < 0 || parseInt(tab[1]) > 255 ||
	parseInt(tab[2]) < 0 || parseInt(tab[2]) > 255 || parseInt(tab[3]) < 0 || parseInt(tab[3]) > 255) return (null);
    if (parseInt(tab[0]) == 127) { g_sim_logs += "loopback address detected on outside interface\n"; return (null); }   // maybe not the best option to deal with 127/8 loopback addresses...
    return ( ( (parseInt(tab[0]) << 24) | ((parseInt(tab[1])) << 16) | ((parseInt(tab[2])) << 8) | (parseInt(tab[3])) ) >>> 0);
}

function mask_to_int(s)
{
    if (s.length == 0) return (null);
    if (s[0] == '/')
    {
	var cidr = parseInt(s.substring(1));
	if (cidr < 0 || cidr > 32) return (null);
	return ( ((1 << cidr)-1) << (32-cidr));
    }
    var tab = s.split('.');
    if (tab.length != 4) return (null);
    if (parseInt(tab[0]) < 0 || parseInt(tab[0]) > 255 || parseInt(tab[1]) < 0 || parseInt(tab[1]) > 255 ||
	parseInt(tab[2]) < 0 || parseInt(tab[2]) > 255 || parseInt(tab[3]) < 0 || parseInt(tab[3]) > 255) return (null);
    if (parseInt(tab[0]) != 255 && (parseInt(tab[1]) != 0 || parseInt(tab[2]) != 0 || parseInt(tab[3]) != 0)) return (null);
    if (parseInt(tab[0]) == 255 && parseInt(tab[1]) != 255 && (parseInt(tab[2]) != 0 || parseInt(tab[3]) != 0)) return (null);
    if (parseInt(tab[0]) == 255 && parseInt(tab[1]) == 255 && parseInt(tab[2]) != 255 && parseInt(tab[3]) != 0) return (null);
    // magic trick to check if we have continuity of 1 then 0
    var mask = ( ( (parseInt(tab[0]) << 24) | ((parseInt(tab[1])) << 16) | ((parseInt(tab[2])) << 8) | (parseInt(tab[3])) ) >>> 0);
    if (mask == 0) return (0);
    if ( ( ((~mask)+1) & (~mask) ) == 0)
	return (mask);
    return (null);
}



// mask on interface
function get_if_mask_str(itf)
{
    if (itf['mask_edit'] == 'true')
	return (document.getElementById('mask_'+itf['if']).value);
    return (itf['mask']);
}
function get_if_mask(itf)
{
    return (mask_to_int(get_if_mask_str(itf)));
}

// ip on interface
function get_if_ip_str(itf)
{
    if (itf['ip_edit'] == 'true')
	return (document.getElementById('ip_'+itf['if']).value);
    return (itf['ip']);
}
function get_if_ip(itf)
{
    var the_ip = ip_to_int(get_if_ip_str(itf));
    // check if ip is not the network or broadcast address
    var the_mask = get_if_mask(itf);
    if ( (the_ip & (~the_mask)) == 0 ||
	 (the_ip & (~the_mask)) == (~the_mask) )
	return (null);
    return (the_ip);
}


// route in routes
function get_route_route_str(r)
{
    if (r['route_edit'] == 'true')
	return (document.getElementById('route_'+r['rid']).value);
    return (r['route']);
}

// gate in routes
function get_route_gate_str(r)
{
    if (r['gate_edit'] == 'true')
	return (document.getElementById('gate_'+r['rid']).value);
    return (r['gate']);
}
function get_route_gate(r)
{
    return (ip_to_int(get_route_gate_str(r)));
}



function ip_match_if(ip, itf)
{
    var iip, imask;
    if ((iip = get_if_ip(itf)) === null) { g_sim_logs += 'on interface '+itf['if']+': invalid IP address\n'; return (0); }
    if ((imask = get_if_mask(itf)) === null) { g_sim_logs += 'on interface '+itf['if']+': invalid netmask\n'; return (0); }
//    my_console_log("## "+iip+" & "+imask+" == "+ip+" & "+imask);
    if (iip == ip) { g_sim_logs += "duplicate IP ("+get_if_ip_str(itf)+")\n"; return (0); } // ip_match_if is called only on output, not on arrival
    if ((iip & imask) == (ip & imask))
    {
	// if ip match the interface network, check that the ip is not the network addr or broadcast ?
	return (1);
    }
    return (0);
}


function ip_match_route(ip, r)
{
    var str, rip, rmask;
    str = get_route_route_str(r);
    if (str == 'default') str = '0.0.0.0/0';
//    my_console_log("ip_match_route route :"+JSON.stringify(r));
    if (r['h']['type'] == "internet" && str == '0.0.0.0/0')
    { g_sim_logs += 'invalid default route on internet '+r['hid']+'\n'; return (0); }
    var tab = str.split('/');
//    my_console_log("ip_match_route check : "+str+" againt ip "+ip);
    if (tab.length != 2)
    { g_sim_logs += 'invalid route on host '+r['hid']+'\n'; return (0); }
    if ((rip = ip_to_int(tab[0])) === null)
    { g_sim_logs += 'invalid route on host '+r['hid']+'\n'; return (0); }
    if ((rmask = mask_to_int('/'+tab[1])) === null)
    { g_sim_logs += 'invalid route on host '+r['hid']+'\n'; return (0); }
    if ((rip & rmask) == (ip & rmask)) return (1);
    return (0);
}




function rec_route(ip_dest, local_target, input_itf, h)   // return array of dest itf
{
    var i, nbif, nb_routes, ret, j;
    var itf_ip;
    
    if (input_itf != null)
	my_console_log(" ** to "+ip_dest+" / host "+h['id']+" input itf "+input_itf['if']+" / to match local target "+local_target);
    else
	my_console_log(" ** to "+ip_dest+" / host "+h['id']);

    // loop detection here
    if (visited_host.includes(h)) { g_sim_logs += "on "+h['id']+' : loop detected\n'; return ([]); }
    visited_host.push(h);

    // if switch : rec_route to all links
    if (h['type'] == 'switch')
    {
	g_sim_logs += 'on switch '+h['id']+': pass to all connections\n';
	ret = [];
	links.forEach(l => {if (l['e1']['hid'] == h['id']) ret = ret.concat(rec_route(ip_dest, local_target, l['e2'], l['h2']));
			    else if (l['e2']['hid'] == h['id']) ret = ret.concat(rec_route(ip_dest, local_target, l['e1'], l['h1']))});
	return (ret);
    }
    
    // on a host, is my current gate ip == the ip of the input itf ?
    if (input_itf != null)
    {
	if ((itf_ip = get_if_ip(input_itf)) === null) { g_sim_logs += 'on '+h['id']+': invalid IP on input interface '+input_itf['if']+'\n'; return ([]); }
	if (itf_ip != local_target) { g_sim_logs += 'on '+h['id']+' : packet not for me\n'; return ([]); }
    }

    // accepted on host
    g_sim_logs += 'on '+h['id']+' : packet accepted\n';

    // internet does no route private addresses, so "internet interface" reject private subnets
    if (h['type'] == 'internet')
    {
	if (ip_match_route(ip_dest, private_subnets[0]) || ip_match_route(ip_dest, private_subnets[1]) || ip_match_route(ip_dest, private_subnets[2]))
	{ g_sim_logs += 'private subnets not routed over internet\n'; return ([]); }
    }
    
   // arrived ?   check not only input itf, in case another itf is the target;  do not check if input_itf is null (departure host)
    if (input_itf != null)
    {
	ret = [];
	ifs.forEach(itf => {if (itf['hid'] == h['id'] && (itf_ip = get_if_ip(itf)) !== null && ip_dest === itf_ip) ret.push(itf);});
	if (ret.length > 0) { g_sim_logs += 'on '+h['id']+': destination IP reached\n'; my_console_log("  destination reached !"); return (ret); } // keep multiple : means that 2 interfaces have the same ip
    }

    // ip_dest match an interface ?
    my_console_log('on '+h['id']+': check '+ip_dest+" against all interfaces");
    nbif = 0; ret = [];
    for (i = 0; i < ifs.length; i++)
    {
	if (ifs[i]['hid'] == h['id'])
	{
	    my_console_log("   chk with itf "+ifs[i]['if']);
	    if (ip_match_if(ip_dest, ifs[i]))
	    {
		my_console_log("   match itf "+ifs[i]['if']);
		nbif ++;
		g_sim_logs += 'on '+h['id']+': send to '+ifs[i]['if']+'\n';
		links.forEach(l => {if (l['if1'] == ifs[i]['if']) ret = ret.concat(rec_route(ip_dest, ip_dest, l['e2'], l['h2']));
				    else if (l['if2'] == ifs[i]['if']) ret = ret.concat(rec_route(ip_dest, ip_dest, l['e1'], l['h1']))});
	    }
	}
    }
     // force fail if multiple ifs on same subnet
    if (nbif > 1) { g_sim_logs += 'on '+h['id']+': error on destination ip - multiple interface match\n'; return ([]); }
    if (nbif == 1) return (ret);

    // else nbif == 0, no interface match, explore routes
    my_console_log("  no itf for ip destination, go through gate");
    g_sim_logs += 'on '+h['id']+': destination does not match any interface. pass through routing table\n';

    ret = [];
    nb_routes = 0;
    for (j = 0; j < routes.length; j++)
    {
	if (routes[j]['hid'] == h['id'])
	{
	    if (ip_match_route(ip_dest, routes[j]))
	    {
		g_sim_logs += 'on '+h['id']+' : route match '+get_route_route_str(routes[j])+'\n';
		nb_routes ++;
		var ip_gate = get_route_gate(routes[j]);
		if (ip_gate === null) { g_sim_logs += "on "+h['id']+": invalid gate IP, route "+get_route_route_str(routes[j])+"\n"; return ([]);}
		nbif = 0;
		for (i = 0; i < ifs.length; i++)
		{
		    if (ifs[i]['hid'] == h['id'])
		    {
			if (ip_match_if(ip_gate, ifs[i]))
			{
			    my_console_log("   gate ip match itf "+ifs[i]['if']);
			    g_sim_logs += 'on '+h['id']+': send to gateway '+get_route_gate_str(routes[j])+' through interface '+ifs[i]['if']+'\n';
			    nbif ++;
			    links.forEach(l => {if (l['if1'] == ifs[i]['if']) ret = ret.concat(rec_route(ip_dest, ip_gate, l['e2'], l['h2']));
						else if (l['if2'] == ifs[i]['if']) ret = ret.concat(rec_route(ip_dest, ip_gate, l['e1'], l['h1']))});
			}
		    }
		}
		if (nbif > 1) { g_sim_logs += 'on '+h['id']+' : error on gate ip - multiple interface match\n'; return ([]); }
	    }
	}
	if (nb_routes > 0)  // only first route is explored.
	{
	    if (nbif == 0) g_sim_logs += 'on '+h['id']+' : route match but no interface for gateway '+get_route_gate_str(routes[j])+'\n';
	    return (ret);
	}
    }
    // no match, fail
    g_sim_logs += 'on '+h['id']+': destination does not match any route\n';
    return ([]);
}



function sim_reach(g)
{
    my_console_log("check reach : "+g['id1']+" -> "+g['id2']);
    var ret = [];
    var i;
    var itf_ip;
    for (i = 0; i < ifs.length; i++)
    {
	if (g['id2'] == ifs[i]['hid'])
	{
	    visited_host = [];
	    if ((itf_ip = get_if_ip(ifs[i])) === null)
		g_sim_logs += "on interface "+ifs[i]['if']+": invalid IP\n";
	    else
	    {
		g_sim_logs +="forward way : "+g['id1']+" -> "+g['id2']+" ("+get_if_ip_str(ifs[i])+")\n";
		ret = ret.concat(rec_route(itf_ip, 0, null, g['h1']));
	    }
	    if (ret.length > 0)
		break;     // if one interface matches, that's enough - if ret > 1 it's because another host matches
	}
    }
    if (ret.length <= 0) return ({text:'KO - No forward way, try again ...', status:0});
    if (ret.length > 1) return ({text:'KO - Multiple destination hosts match ... ', status:0});
    if (ret[0]['hid'] != g['id2']) return ({text:'KO - Correct IP reached but on wrong host, try again ...', status:0});
    
    // now reverse way

    my_console_log("check reach : "+g['id2']+" -> "+g['id1']);
    ret = [];
    for (i = 0; i < ifs.length; i++)
    {
	if (g['id1'] == ifs[i]['hid'])
	{
	    visited_host = [];
	    if ((itf_ip = get_if_ip(ifs[i])) === null)
                g_sim_logs += "on interface "+ifs[i]['if']+": invalid IP\n";
            else
            {
                g_sim_logs +="reverse way : "+g['id2']+" -> "+g['id1']+" ("+get_if_ip_str(ifs[i])+")\n";
                ret = ret.concat(rec_route(itf_ip, 0, null, g['h2']));
            }
            if (ret.length > 0)
                break;     // if one interface matches, that's enough - if ret > 1 it's because another host matches
	}
    }
    if (ret.length <= 0) return ({text:'KO - No reverse way, try again ...', status:0});
    if (ret.length > 1) return ({text:'KO - Multiple origin hosts match ... ', status:0});
    if (ret[0]['hid'] != g['id1']) return ({text:'KO - Correct IP reached but on wrong host, try again ...', status:0});
    
    return ({text:'OK - Congratulations !!', status:1});
}


function sim_reach_if(g)
{
    my_console_log("check reach interface : "+g['if_id1']+" -> "+g['if_id2']);
    var ret = [];
    var i;
    var itf_ip;
    for (i = 0; i < ifs.length; i++)
    {
	if (g['if_id2'] == ifs[i]['if'])
	{
	    visited_host = [];
	    if ((itf_ip = get_if_ip(ifs[i])) === null)
		g_sim_logs += "on inerface "+ifs[i]['if']+": invalid IP\n";
	    else
	    {
		g_sim_logs +="forward way : "+g['if_id1']+" -> "+g['if_id2']+" ("+get_if_ip_str(ifs[i])+")\n";
		ret = ret.concat(rec_route(itf_ip, 0, null, g['h1']));
	    }
	    if (ret.length > 0)
		break;     // if one interface matches, that's enough - if ret > 1 it's because another host matches
	}
    }
    if (ret.length <= 0) return ({text:'KO - No forward way, try again ...', status:0});
    if (ret.length > 1) return ({text:'KO - Multiple destination hosts match ... ', status:0});
    if (ret[0]['if'] != g['if_id2']) return ({text:'KO - Correct IP reached but wrong interface, try again ...', status:0});
    
    // now reverse way

    my_console_log("check reach interface : "+g['if_id2']+" -> "+g['if_id1']);
    ret = [];
    for (i = 0; i < ifs.length; i++)
    {
	if (g['if_id1'] == ifs[i]['if'])
	{
	    visited_host = [];
	    if ((itf_ip = get_if_ip(ifs[i])) === null)
                g_sim_logs += "on interface "+ifs[i]['if']+": invalid IP\n";
            else
            {
                g_sim_logs +="reverse way : "+g['if_id2']+" -> "+g['if_id1']+" ("+get_if_ip_str(ifs[i])+")\n";
                ret = ret.concat(rec_route(itf_ip, 0, null, g['h2']));
            }
            if (ret.length > 0)
                break;     // if one interface matches, that's enough - if ret > 1 it's because another host matches
	}
    }
    if (ret.length <= 0) return ({text:'KO - No reverse way, try again ...', status:0});
    if (ret.length > 1) return ({text:'KO - Multiple origin hosts match ... ', status:0});
    if (ret[0]['if'] != g['if_id1']) return ({text:'KO - Correct IP reached but wrong interface, try again ...', status:0});
    
    return ({text:'OK - Congratulations !!', status:1});
}



function sim_goal(g)
{
    if (g['type'] == 'reach')
	return (sim_reach(g));
    if (g['type'] == 'reach_if')
	return (sim_reach_if(g));
}
