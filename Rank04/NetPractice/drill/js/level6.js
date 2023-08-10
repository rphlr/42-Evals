
var level = 6;

var hosts = [
    {'id':'A', 'type':'client', 'name':'webserv.non-real.com', 'geometry':'200x220+900+800', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'R', 'type':'router', 'name':'gate.non-real.com', 'geometry':'200x200+400+500', 'img':'router.png', 'labelpos':'-150,150'},
    {'id':'I', 'type':'internet', 'name':'Internet', 'geometry':'200x240+100+200', 'img':'internet.png', 'labelpos':'-50,200'},
    {'id':'S', 'type':'switch', 'name':'sw-1.non-real.com', 'geometry':'150x150+800+500', 'img':'switch.png', 'labelpos':'80,110'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
    {'hid':'A', 'rid':'Ar1', 'route':'0.0.0.0/0', 'gate':'[20-120]a.[1-255]b.[1-255]c.1', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R', 'rid':'Rr1', 'route':'10.0.0.0/8', 'gate':'163.172.250.1', 'route_edit':'true', 'gate_edit':'false'},
    {'hid':'I', 'rid':'Ir1', 'route':'[a].[b].[c].0/31', 'gate':'163.172.250.12', 'route_edit':'true', 'gate_edit':'false'}
];


var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'[a].[b].[c].227', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'R1', 'hid':'R', 'ip':'[a].[b].[c].254', 'mask':'255.255.255.128', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'190,10'},
    {'if':'R2', 'hid':'R', 'ip':'163.172.250.12', 'mask':'255.255.255.240', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'-150,0'},
    {'if':'S1', 'hid':'S', 'ip':'0.0.0.0', 'mask':'/32', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'},
    {'if':'Somewhere on the Net', 'hid':'I', 'ip':'8.8.8.8', 'mask':'/16', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,-50', 'type':'std'},
    {'if':'I1', 'hid':'I', 'ip':'163.172.250.1', 'mask':'/28', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'}
];


var links = [
    {'if1':'I1', 'if2':'R2'},
    {'if1':'R1', 'if2':'S1'},
    {'if1':'S1', 'if2':'A1'}
];

var goals = [
    {'id':'1', 'type':'reach_if', 'if_id1':'A1', 'if_id2':'Somewhere on the Net'}
];
