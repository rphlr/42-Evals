
var level = 3;

var hosts = [
    {'id':'A', 'type':'client', 'name':'Host A', 'geometry':'200x220+700+800', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'B', 'type':'client', 'name':'Host B', 'geometry':'200x220+600+200', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'C', 'type':'client', 'name':'Host C', 'geometry':'200x200+200+500', 'img':'host.png', 'labelpos':'-150,150'},
    {'id':'S', 'type':'switch', 'name':'Switch-1', 'geometry':'150x150+600+500', 'img':'switch.png', 'labelpos':'80,110'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
];


var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'104.198.[1-254]a.125', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'B1', 'hid':'B', 'ip':'127.168.42.42', 'mask':'255.255.0.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'100,200'},
    {'if':'C1', 'hid':'C', 'ip':'104.198.[a].[260-299]b', 'mask':'255.255.255.128', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'190,10'},
    {'if':'S1', 'hid':'S', 'ip':'0.0.0.0', 'mask':'/32', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'}
];


var links = [
    {'if1':'C1', 'if2':'S1'},
    {'if1':'S1', 'if2':'A1'},
    {'if1':'S1', 'if2':'B1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'A', 'id2':'B'},
    {'id':'2', 'type':'reach', 'id1':'A', 'id2':'C'},
    {'id':'3', 'type':'reach', 'id1':'B', 'id2':'C'}
];
