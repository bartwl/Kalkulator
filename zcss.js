var b=0,s=0;
function zcss()
{
    if(b==0)
        {    
            s1='l';
            b++;
        }
    else 
        {
            s1='d';
            b--;
        }
    if(s==0)
        {    
            s2='yp';
        }
    else 
        {
            s2='bg';
        }
    document.getElementById("cstyle").setAttribute("href", 'styl_'+s1+'_'+s2+'.css');
}
function zback()
{
    if(b==0)
        {    
            s1='d';
        }
    else 
        {
            s1='l';
        }
    if(s==0)
        {    
            s2='bg';
            s++;
        }
    else 
        {
            s2='yp';
            s--;
        }
    document.getElementById("cstyle").setAttribute("href", 'styl_'+s1+'_'+s2+'.css');
}