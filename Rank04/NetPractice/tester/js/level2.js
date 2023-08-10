
var level = 2;

var hosts = [
    {'id':'A', 'type':'client', 'name':'Computer A', 'geometry':'200x220+200+500', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'B', 'type':'client', 'name':'Computer B', 'geometry':'200x220+200+100', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'C', 'type':'client', 'name':'Computer C', 'geometry':'200x220+600+500', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'D', 'type':'client', 'name':'Computer D', 'geometry':'200x220+600+100', 'img':'host.png', 'labelpos':'180,30'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
];

var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'192.168.[14-150]a.1', 'mask':'255.255.255.224', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'-90,-50'},
    {'if':'B1', 'hid':'B', 'ip':'192.168.[a].222', 'mask':'255.255.255.32', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'110,200'},
    {'if':'C1', 'hid':'C', 'ip':'127.0.0.1', 'mask':'255.255.255.252', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'-90,-50'},
    {'if':'D1', 'hid':'D', 'ip':'127.0.0.4', 'mask':'/30', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'110,200'}
];


var links = [
    {'if1':'A1', 'if2':'B1'},
    {'if1':'C1', 'if2':'D1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'B', 'id2':'A'},
    {'id':'1', 'type':'reach', 'id1':'D', 'id2':'C'}
];
