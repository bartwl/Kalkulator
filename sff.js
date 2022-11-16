function x(e)
{
    var i=1, si=1;
    while(i <= e)
        {
            si *= i++;
        }
    document.getElementById('w').value = si;
}
function r(w)
{
    var r = Math.floor(Math.random()*w+1);
    document.getElementById('w').value=r;
}
function rtd(r)
{
    var w = r * (180/Math.PI);
    document.getElementById('w').value=w;
}
function dtr(d) 
{
    var w = d * (Math.PI/180);
    document.getElementById('w').value=w;
}