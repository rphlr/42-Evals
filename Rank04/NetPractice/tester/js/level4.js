
var level = 4;

var hosts = [
    {'id':'A', 'type':'client', 'name':'A nice host', 'geometry':'200x220+800+800', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'B', 'type':'client', 'name':'Another host', 'geometry':'200x220+700+200', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'R', 'type':'router', 'name':'My_Gate', 'geometry':'200x200+300+500', 'img':'router.png', 'labelpos':'-160,120'},
    {'id':'S', 'type':'switch', 'name':'Switch-1', 'geometry':'150x150+700+500', 'img':'switch.png', 'labelpos':'80,110'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
];


var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'[60-125]a.[1-254]b.[110-119]c.132', 'mask':'255.255.255.240', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'B1', 'hid':'B', 'ip':'[a].[b].[120-129]d.193', 'mask':'255.255.0.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'100,200'},
    {'if':'R1', 'hid':'R', 'ip':'[a].[b].[c].91', 'mask':'/23', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'190,10'},
    {'if':'R2', 'hid':'R', 'ip':'[a].[b].[c].1', 'mask':'255.255.255.128', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'0,190'},
    {'if':'R3', 'hid':'R', 'ip':'[a].[b].[c].244', 'mask':'255.255.255.192', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'-170,0'},
    {'if':'S1', 'hid':'S', 'ip':'0.0.0.0', 'mask':'/32', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'}
];


var links = [
    {'if1':'R1', 'if2':'S1'},
    {'if1':'S1', 'if2':'A1'},
    {'if1':'S1', 'if2':'B1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'A', 'id2':'B'},
    {'id':'2', 'type':'reach', 'id1':'A', 'id2':'R'},
    {'id':'3', 'type':'reach', 'id1':'B', 'id2':'R'}
];
