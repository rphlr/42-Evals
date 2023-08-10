
var level = 8;

var hosts = [
    {'id':'C', 'type':'client', 'name':'office.non-real.com', 'geometry':'200x220+600+900', 'img':'host.png', 'labelpos':'180,100'},
    {'id':'D', 'type':'client', 'name':'home.non-real.com', 'geometry':'200x220+100+900', 'img':'host.png', 'labelpos':'180,100'},
    {'id':'R1', 'type':'router', 'name':'gate.non-real.com', 'geometry':'200x200+400+200', 'img':'router.png', 'labelpos':'-270,20'},
    {'id':'R2', 'type':'router', 'name':'transit.my-isp.org', 'geometry':'200x200+400+600', 'img':'router.png', 'labelpos':'-30,170'},
    {'id':'I', 'type':'internet', 'name':'Internet', 'geometry':'200x240+900+175', 'img':'internet.png', 'labelpos':'-50,200'},
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference and keep routes in host order
var routes = [
    {'hid':'C', 'rid':'Cr1', 'route':'0.0.0.0/0', 'gate':'10.0.0.254', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'D', 'rid':'Dr1', 'route':'default', 'gate':'8.8.8.8', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R1', 'rid':'R1r2', 'route':'192.168.0.0/26', 'gate':'10.0.0.2', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R1', 'rid':'R1r3', 'route':'0.0.0.0/0', 'gate':'163.[1-254]a.250.1', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'R2', 'rid':'R2r1', 'route':'10.0.0.0/8', 'gate':'[128-170]b.[1-254]c.[1-254]d.62', 'route_edit':'true', 'gate_edit':'false'},
    {'hid':'I', 'rid':'Ir1', 'route':'[b].[c].[d].0/26', 'gate':'163.[a].250.254', 'route_edit':'false', 'gate_edit':'true'}
];


var ifs = [
    {'if':'C1', 'hid':'C', 'ip':'192.168.0.1', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'20,-50'},
    {'if':'D1', 'hid':'D', 'ip':'8.9.10.11', 'mask':'255.255.255.240', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'0,-50'},
    {'if':'R12', 'hid':'R1', 'ip':'163.[a].250.12', 'mask':'255.255.255.240', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'190,20'},
    {'if':'R13', 'hid':'R1', 'ip':'10.0.0.1', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'20,160'},
    {'if':'R21', 'hid':'R2', 'ip':'10.0.0.2', 'mask':'255.255.0.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'R22', 'hid':'R2', 'ip':'192.168.0.254', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'190,90'},
    {'if':'R23', 'hid':'R2', 'ip':'8.8.8.8', 'mask':'/18', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'-150,90'},
    {'if':'I1', 'hid':'I', 'ip':'163.[a].250.1', 'mask':'/28', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'}
];


var links = [
    {'if1':'I1', 'if2':'R12'},
    {'if1':'R13', 'if2':'R21'},
    {'if1':'R22', 'if2':'C1'},
    {'if1':'R23', 'if2':'D1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'C', 'id2':'D'},
    {'id':'2', 'type':'reach', 'id1':'C', 'id2':'I'},
    {'id':'3', 'type':'reach', 'id1':'D', 'id2':'I'}
];
