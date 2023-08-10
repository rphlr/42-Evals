
var level = 1;

var hosts = [
    {'id':'A', 'type':'client', 'name':'my PC', 'geometry':'200x220+250+500', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'B', 'type':'client', 'name':'my little brother\'s computer', 'geometry':'200x220+250+100', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'C', 'type':'client', 'name':'my Mac', 'geometry':'200x220+700+500', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'D', 'type':'client', 'name':'my little sister\'s computer', 'geometry':'200x220+700+100', 'img':'host.png', 'labelpos':'180,30'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
];

var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'104.93.23.[260-399]a', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'-90,-50'},
    {'if':'B1', 'hid':'B', 'ip':'104.[94-99]b.23.12', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'110,200'},
    {'if':'C1', 'hid':'C', 'ip':'211.191.[1-254]c.75', 'mask':'255.255.0.0', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'-90,-50'},
    {'if':'D1', 'hid':'D', 'ip':'211.190.[260-399]d.42', 'mask':'255.255.0.0', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'110,200'}
];


var links = [
    {'if1':'A1', 'if2':'B1'},
    {'if1':'C1', 'if2':'D1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'A', 'id2':'B'},
    {'id':'2', 'type':'reach', 'id1':'C', 'id2':'D'}
];
