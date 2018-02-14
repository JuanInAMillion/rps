var p=[
    '<img src="resources/images/rock.png"><br>Rock',
    '<img src="resources/images/scissors.png"><br>Scissors',
    '<img src="resources/images/paper.png"><br>Paper',
    ['Win','&#10004;'],
    ['lose','&#9760;']];

function g(n){
    document.getElementById('g').innerHTML=p[n];
    var cp=[0,1,2]
    cp.sort(function(a,b){
        return Math.random()-0.5});

    r=Math.floor(3*(Math.random()));
    document.getElementById('i').innerHTML=p[cp[r]];
    r=cp[r];

    if(r===n){
        w(1);
        <!--return-->
        $('#i').fadeTo("fast", 1.0);
        $('#g').fadeTo("fast",1.0);

    }
    else if((r===0 && n===1) || (r===1 && n==2) || (r==2 && n===0)){
        w(2);
        $('#g').fadeTo( "fast" , 0.2);
        $('#i').fadeTo("fast",1.0);
        }
    else{
        w(0);
        $('#i').fadeTo( "fast" , 0.2);
        $('#g').fadeTo("fast",1.0);
        }

}
function w(w){
pf=document.getElementById('game');
pftr=pf.getElementsByTagName('tr');
pftd=pf.getElementsByTagName('td');
    for(b=0;b<3;b++){
        pftd[b].innerHTML='&nbsp;'
        } w===1?pftd[w].innerHTML='Tie':pftd[w].innerHTML='Win'
}
