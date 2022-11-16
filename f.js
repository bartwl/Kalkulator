var l=1;
function f()
{
    if(l==1)
    {
        document.getElementById('b').style.display='block';
        l=2;
    }
    else
    {
        document.getElementById('b').style.display='none';
        l=1;
    }
}