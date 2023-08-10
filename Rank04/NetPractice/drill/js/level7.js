
var level = 7;

var hosts = [
    {'id':'A', 'type':'client', 'name':'dev.non-real.net', 'geometry':'200x220+900+200', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'C', 'type':'client', 'name':'accounting.non-real.net', 'geometry':'200x220+900+700', 'img':'host.png', 'labelpos':'180,100'},
    {'id':'R1', 'type':'router', 'name':'tech.non-real.net', 'geometry':'200x200+400+200', 'img':'router.png', 'labelpos':'-280,50'},
    {'id':'R2', 'type':'router', 'name':'adm.non-real.net', 'geometry':'200x200+400+700', 'img':'router.png', 'labelpos':'-30,170'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
    {'hid':'A', 'rid':'Ar1', 'route':'0.0.0.0/0', 'gate':'0.0.0.0', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'C', 'rid':'Cr1', 'route':'0.0.0.0/0', 'gate':'0.0.0.0', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R1', 'rid':'R1r1', 'route':'0.0.0.0/0', 'gate':'0.0.0.0', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R2', 'rid':'R2r1', 'route':'0.0.0.0/0', 'gate':'0.0.0.0', 'route_edit':'true', 'gate_edit':'true'}
];


var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'[90-120]a.198.14.2', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'C1', 'hid':'C', 'ip':'[a].198.14.1', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'20,-50'},
    {'if':'R11', 'hid':'R1', 'ip':'[a].198.14.1', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'190,10'},
    {'if':'R12', 'hid':'R1', 'ip':'[a].198.14.254', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'80,160'},
    {'if':'R21', 'hid':'R2', 'ip':'[a].198.14.149', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'R22', 'hid':'R2', 'ip':'[a].198.14.252', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'190,90'}
];


var links = [
    {'if1':'R11', 'if2':'A1'},
    {'if1':'R12', 'if2':'R21'},
    {'if1':'R22', 'if2':'C1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'A', 'id2':'C'}
];
