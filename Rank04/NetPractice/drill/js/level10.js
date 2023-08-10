
var level = 10;

var hosts = [
    {'id':'H1', 'type':'client', 'name':'Host one', 'geometry':'200x220+900+800', 'img':'host.png', 'labelpos':'0,200'},
    {'id':'H2', 'type':'client', 'name':'Host two', 'geometry':'200x220+800+200', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'H3', 'type':'client', 'name':'Host three', 'geometry':'200x220+600+1200', 'img':'host.png', 'labelpos':'180,100'},
    {'id':'H4', 'type':'client', 'name':'Host four', 'geometry':'200x220+100+1200', 'img':'host.png', 'labelpos':'180,100'},
    {'id':'R1', 'type':'router', 'name':'Router one', 'geometry':'200x200+400+500', 'img':'router.png', 'labelpos':'-150,150'},
    {'id':'R2', 'type':'router', 'name':'Router two', 'geometry':'200x200+400+900', 'img':'router.png', 'labelpos':'-30,170'},
    {'id':'I', 'type':'internet', 'name':'Internet', 'geometry':'200x240+100+200', 'img':'internet.png', 'labelpos':'-50,200'},
    {'id':'S1', 'type':'switch', 'name':'Switch one', 'geometry':'150x150+800+500', 'img':'switch.png', 'labelpos':'80,110'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
    {'hid':'H1', 'rid':'H1r1', 'route':'0.0.0.0/0', 'gate':'[128-170]a.[1-254]b.[1-254]c.1', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'H2', 'rid':'H2r1', 'route':'default', 'gate':'[a].[b].[c].1', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'H3', 'rid':'H3r1', 'route':'0.0.0.0/0', 'gate':'10.0.0.254', 'route_edit':'false', 'gate_edit':'true'},
    {'hid':'H4', 'rid':'H4r1', 'route':'default', 'gate':'[a].[b].[c].129', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'R1', 'rid':'R1r1', 'route':'10.0.0.0/8', 'gate':'[a].[b].[c].253', 'route_edit':'true', 'gate_edit':'false'},
    {'hid':'R1', 'rid':'R1r2', 'route':'[a].[b].[c].128/26', 'gate':'[a].[b].[c].253', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'R1', 'rid':'R1r3', 'route':'0.0.0.0/0', 'gate':'163.172.250.1', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'R2', 'rid':'R2r1', 'route':'0.0.0.0/0', 'gate':'[a].[b].[c].254', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'I', 'rid':'Ir1', 'route':'[a].[b].[c].0/31', 'gate':'163.172.250.12', 'route_edit':'true', 'gate_edit':'false'}
];


var ifs = [
    {'if':'H11', 'hid':'H1', 'ip':'[a].[b].[c].2', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'H21', 'hid':'H2', 'ip':'192.168.42.42', 'mask':'255.255.0.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'100,200'},
    {'if':'H31', 'hid':'H3', 'ip':'192.168.0.1', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'20,-50'},
    {'if':'H41', 'hid':'H4', 'ip':'[a].[b].[c].131', 'mask':'255.255.255.192', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'0,-50'},
    {'if':'R11', 'hid':'R1', 'ip':'[a].[b].[c].1', 'mask':'255.255.255.128', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'190,10'},
    {'if':'R12', 'hid':'R1', 'ip':'163.172.250.12', 'mask':'255.255.255.240', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'-150,0'},
    {'if':'R13', 'hid':'R1', 'ip':'[a].[b].[c].254', 'mask':'255.255.255.0', 'ip_edit':'false', 'mask_edit':'true', 'type':'std', 'pos':'130,140'},
    {'if':'R21', 'hid':'R2', 'ip':'[a].[b].[c].253', 'mask':'255.255.255.252', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'0,-50'},
    {'if':'R22', 'hid':'R2', 'ip':'10.0.0.254', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'190,90'},
    {'if':'R23', 'hid':'R2', 'ip':'8.8.8.8', 'mask':'/18', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'-150,90'},
    {'if':'S11', 'hid':'S1', 'ip':'0.0.0.0', 'mask':'/32', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'},
    {'if':'I1', 'hid':'I', 'ip':'163.172.250.1', 'mask':'/28', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'}
];


var links = [
    {'if1':'I1', 'if2':'R12'},
    {'if1':'R11', 'if2':'S11'},
    {'if1':'S11', 'if2':'H11'},
    {'if1':'S11', 'if2':'H21'},
    {'if1':'R13', 'if2':'R21'},
    {'if1':'R22', 'if2':'H31'},
    {'if1':'R23', 'if2':'H41'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'H1', 'id2':'H2'},
    {'id':'2', 'type':'reach', 'id1':'H3', 'id2':'H4'},
    {'id':'3', 'type':'reach', 'id1':'H1', 'id2':'I'},
    {'id':'4', 'type':'reach', 'id1':'H1', 'id2':'H4'},
    {'id':'5', 'type':'reach', 'id1':'H2', 'id2':'H3'},
    {'id':'6', 'type':'reach', 'id1':'H3', 'id2':'I'},
    {'id':'7', 'type':'reach', 'id1':'H4', 'id2':'I'}
];
