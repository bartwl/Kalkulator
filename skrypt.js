var randomdanger=0;
var licznik=1;
var idpamieci=1;
var licznik_ustawien=1;
var licznikfn=1;
var blokpamiecilicznik=1;

function funkcjenaukowe()
{
    if(licznikfn%2==0)
    {
        document.getElementById('blok').style.display='block'; 
    }
    else
    {
        document.getElementById('blok').style.display='none';
    }
    licznikfn++;
}

function xsilnia(wyrazenie)
{
    var w = wyrazenie;
    var i = 1;
    var silnia = 1;
    while (i <= w)
        {
            silnia *= i++;
        }
    document.getElementById('wyswietlacz').value=silnia;
}

function xrandom(wyrazenie)
{
    var jezyk = document.getElementById('jezyk').value;
    if(randomdanger<1&&jezyk=='English')
        {
            alert('Funkcja nie zapewnia kryptograficznie bezpiecznych liczb losowych.')
        }
    if(randomdanger<1&&jezyk=='Polish')
        {
            alert('This function does not provide cryptographically safe random numbers.')
        }
    var w = wyrazenie;
    var random = Math.floor(Math.random()*w+1);
    document.getElementById('wyswietlacz').value=random;
    randomdanger++;
}

function rad_to_deg(rad)
{
    var wynik = rad * (180/Math.PI);
    document.getElementById('wyswietlacz').value=wynik;
}

function deg_to_rad(deg) 
{
    var wynik = deg * (Math.PI / 180);
    document.getElementById('wyswietlacz').value=wynik;
}

function blokpamieci()
{
    if(blokpamiecilicznik%2==0)
        {
            document.getElementById('blokpamieci').style.display='block';
        }
    else
        {
            document.getElementById('blokpamieci').style.display='none';
        }
    blokpamiecilicznik++;
}

function PamiecMPlus(wyrazenie)
{
    var wyrazenie = wyrazenie;
    if(idpamieci==1)
       {
            document.getElementById('pamiec').style.display='block';
       }
    document.getElementById('pamiec').innerHTML+='<span id="'+idpamieci+'">'+idpamieci+') '+wyrazenie+' = '+eval(wyrazenie)+'</span><br>';
    idpamieci++;
}

function PamiecMClear(wyrazenie)
{
    var wyrazenie = wyrazenie;
    document.getElementById('pamiec').innerHTML=' ';
    idpamieci=1;
    document.getElementById('pamiec').style.display='none';
}

function ustawienia()
{
    if(licznik_ustawien%2==0)
    {
        document.getElementById('ustawienia').style.display='block'; 
    }
    else
    {
        document.getElementById('ustawienia').style.display='none';
    }
    licznik_ustawien++;
}

function zmianatrybu()
{
    var tryb = document.getElementById('tryb').value;
    if(tryb=='Light')
        {
            document.body.style.background="#f2dff7";
            document.getElementById('trybtlo').style.backgroundImage="radial-gradient(black,#555,#555)";
            document.getElementById('tryb').style.background="url('dark.png')";
            document.getElementById('tryb').style.backgroundSize="100%";
            document.getElementById('tryb').value='Dark';
        }
    if(tryb=='Dark')
        {
            document.body.style.background="#141414";
            document.getElementById('trybtlo').style.backgroundImage="radial-gradient(#f0c743,#555,#555)";
            document.getElementById('tryb').style.background="url('light.png')";
            document.getElementById('tryb').style.backgroundSize="100%";
            document.getElementById('tryb').value='Light';
        }
}

function zmianajezyka()
{
    var jezyk = document.getElementById('jezyk').value;
    if(jezyk=='Polish')
        {
            document.getElementById('ca').value='wyczyść';
            document.getElementById('znakinaukoweprzycisk').value='Funkcje Naukowe';
            document.getElementById('pamiecprzycisk').value='Pamięć';
            document.getElementById('random').value='losowa(1-x)';
            document.getElementById('rtd').value='Radiany na Stopnie';
            document.getElementById('dtr').value='Stopnie na Radiany';
            document.getElementById('jezyk').value='English';
            document.getElementById('footer').innerHTML=' ';
            document.getElementById('footer').innerHTML='Stworzone przez Bartłomiej Wlach';
            document.getElementById('jezyk').style.background="url('english.png')";
            document.getElementById('jezyk').style.backgroundSize="100%";
        }
    if(jezyk=='English')
        {
            document.getElementById('ca').value='Clear All';
            document.getElementById('znakinaukoweprzycisk').value='Scientific Functions';
            document.getElementById('pamiecprzycisk').value='Memory';
            document.getElementById('random').value='random(1-x)';
            document.getElementById('rtd').value='Rad to Deg';
            document.getElementById('dtr').value='Deg to Rad';
            document.getElementById('jezyk').value='Polish';
            document.getElementById('footer').innerHTML=' ';
            document.getElementById('footer').innerHTML='Created by Bartłomiej Wlach';
            document.getElementById('jezyk').style.background="url('polish.png')";
            document.getElementById('jezyk').style.backgroundSize="100%";
        }
}