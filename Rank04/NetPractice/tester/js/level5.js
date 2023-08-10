
var level = 5;

var hosts = [
    {'id':'A', 'type':'client', 'name':'Machine A', 'geometry':'200x220+900+800', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'B', 'type':'client', 'name':'Machine B', 'geometry':'200x220+800+200', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'R', 'type':'router', 'name':'The Mighty Router', 'geometry':'200x200+400+500', 'img':'router.png', 'labelpos':'-200,50'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
    {'hid':'A', 'rid':'Ar1', 'route':'10..0.0.0/8', 'gate':'192.168.0.254', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'B', 'rid':'Br1', 'route':'default', 'gate':'192.168.0.254', 'route_edit':'false', 'gate_edit':'true'}
];


var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'104.198.14.2', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'B1', 'hid':'B', 'ip':'192.168.42.42', 'mask':'/[27-30]g', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'100,200'},
    {'if':'R1', 'hid':'R', 'ip':'[15-99]a.[1-254]c.[1-254]e.126', 'mask':'255.255.255.128', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'0,170'},
    {'if':'R2', 'hid':'R', 'ip':'[130-170]b.[1-254]d.[1-254]f.254', 'mask':'255.255.192.0', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'190,0'}
];


var links = [
    {'if1':'R1', 'if2':'A1'},
    {'if1':'R2', 'if2':'B1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'A', 'id2':'R'},
    {'id':'2', 'type':'reach', 'id1':'B', 'id2':'R'},
    {'id':'3', 'type':'reach', 'id1':'A', 'id2':'B'}
];
