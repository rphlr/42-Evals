
var level = 9;

var hosts = [
    {'id':'A', 'type':'client', 'name':'meson', 'geometry':'200x220+100+800', 'img':'host.png', 'labelpos':'-50,200'},
    {'id':'B', 'type':'client', 'name':'ion', 'geometry':'200x220+100+200', 'img':'host.png', 'labelpos':'180,30'},
    {'id':'C', 'type':'client', 'name':'cation', 'geometry':'200x220+1000+800', 'img':'host.png', 'labelpos':'100,190'},
    {'id':'D', 'type':'client', 'name':'gluon', 'geometry':'200x220+600+1300', 'img':'host.png', 'labelpos':'180,80'},
    {'id':'R1', 'type':'router', 'name':'proton', 'geometry':'200x200+500+500', 'img':'router.png', 'labelpos':'-150,150'},
    {'id':'R2', 'type':'router', 'name':'boson', 'geometry':'200x200+600+900', 'img':'router.png', 'labelpos':'-200,100'},
    {'id':'I', 'type':'internet', 'name':'Internet', 'geometry':'200x240+800+200', 'img':'internet.png', 'labelpos':'100,200'},
    {'id':'S', 'type':'switch', 'name':'neutron', 'geometry':'150x150+200+500', 'img':'switch.png', 'labelpos':'-80,110'}
];

// routes are processed in order, first match only is used => default must be last - KEEP routes before interfaces for random reference
var routes = [
    {'hid':'A', 'rid':'Ar1', 'route':'0.0.0.0/0', 'gate':'[11-126]e.198.[1-254]f.1', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'B', 'rid':'Br1', 'route':'8.8.8.8/16', 'gate':'[e].199.[f].1', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'C', 'rid':'Cr1', 'route':'0.0.0.0/0', 'gate':'10.0.0.254', 'route_edit':'false', 'gate_edit':'true'},
    {'hid':'D', 'rid':'Dr1', 'route':'10.0.0.0/8', 'gate':'[11-126]a.[1-254]b.[1-254]c.[1-254]d', 'route_edit':'true', 'gate_edit':'false'},
    {'hid':'R1', 'rid':'R1r1', 'route':'10.0.0.0/8', 'gate':'[11-126]j.[1-254]k.14.253', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R1', 'rid':'R1r2', 'route':'192.168.24.12/26', 'gate':'[j].[k].15.253', 'route_edit':'true', 'gate_edit':'true'},
    {'hid':'R1', 'rid':'R1r3', 'route':'0.0.0.0/0', 'gate':'163.172.250.1', 'route_edit':'false', 'gate_edit':'false'},
    {'hid':'R2', 'rid':'R2r1', 'route':'0.0.0.0/0', 'gate':'[j].[k].16.254', 'route_edit':'false', 'gate_edit':'true'},
    {'hid':'I', 'rid':'Ir1', 'route':'[e].198.[f].0/22', 'gate':'163.172.250.12', 'route_edit':'true', 'gate_edit':'false'},
    {'hid':'I', 'rid':'Ir2', 'route':'10.0.0.0/27', 'gate':'163.172.250.12', 'route_edit':'true', 'gate_edit':'false'},
    {'hid':'I', 'rid':'Ir3', 'route':'default', 'gate':'163.172.250.12', 'route_edit':'true', 'gate_edit':'false'}
];


var ifs = [
    {'if':'A1', 'hid':'A', 'ip':'192.168.[1-254]g.2', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'B1', 'hid':'B', 'ip':'192.168.[1-254]h.42', 'mask':'255.255.0.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'100,200'},
    {'if':'C1', 'hid':'C', 'ip':'10.0.0.1', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'20,-50'},
    {'if':'D1', 'hid':'D', 'ip':'[j].[k].19.131', 'mask':'255.255.255.192', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'0,-50'},
    {'if':'R11', 'hid':'R1', 'ip':'192.168.[1-254]i.1', 'mask':'255.255.255.128', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'-150,0'},
    {'if':'R12', 'hid':'R1', 'ip':'163.172.250.12', 'mask':'255.255.255.240', 'ip_edit':'false', 'mask_edit':'false', 'type':'std', 'pos':'190,10'},
    {'if':'R13', 'hid':'R1', 'ip':'[j].[k].17.254', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'130,140'},
    {'if':'R21', 'hid':'R2', 'ip':'[j].[k].18.253', 'mask':'255.255.255.252', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'0,-50'},
    {'if':'R22', 'hid':'R2', 'ip':'10.0.0.254', 'mask':'255.255.255.0', 'ip_edit':'true', 'mask_edit':'true', 'type':'std', 'pos':'190,80'},
    {'if':'R23', 'hid':'R2', 'ip':'8.8.8.8', 'mask':'/18', 'ip_edit':'true', 'mask_edit':'false', 'type':'std', 'pos':'30,180'},
    {'if':'S1', 'hid':'S', 'ip':'0.0.0.0', 'mask':'/32', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'},
    {'if':'I1', 'hid':'I', 'ip':'163.172.250.1', 'mask':'/28', 'ip_edit':'false', 'mask_edit':'false', 'pos':'0,0', 'type':'hidden'}
];


var links = [
    {'if1':'I1', 'if2':'R12'},
    {'if1':'R11', 'if2':'S1'},
    {'if1':'S1', 'if2':'A1'},
    {'if1':'S1', 'if2':'B1'},
    {'if1':'R13', 'if2':'R21'},
    {'if1':'R22', 'if2':'C1'},
    {'if1':'R23', 'if2':'D1'}
];

var goals = [
    {'id':'1', 'type':'reach', 'id1':'A', 'id2':'B'},
    {'id':'2', 'type':'reach', 'id1':'C', 'id2':'D'},
    {'id':'3', 'type':'reach', 'id1':'A', 'id2':'I'},
    {'id':'4', 'type':'reach', 'id1':'A', 'id2':'D'},
    {'id':'5', 'type':'reach', 'id1':'B', 'id2':'C'},
    {'id':'6', 'type':'reach', 'id1':'C', 'id2':'I'}
];
