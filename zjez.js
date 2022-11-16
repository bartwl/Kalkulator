var l=1;
function zjez()
{
   if(l==1)
       {
            document.getElementById('je').style="background:url('e.jpg'); background-size:100%; background-repeat: no-repeat; background-position: center";
            document.getElementById('j1').value='wyczyść';
            document.getElementById('j2').value='Funkcje Naukowe';
            document.getElementById('j3').value='losowa(1-x)';
            document.getElementById('j4').value='Radiany na Stopnie';
            document.getElementById('j5').value='Stopnie na Radiany';
            document.getElementById('j6').value='Pamięć';
            document.getElementById('j7').innerHTML='Stworzone przez Bartłomiej Wlach';
            l++;
       }
    else
        {
            document.getElementById('je').style="background:url('p.png'); background-size:100%; background-repeat: no-repeat; background-position: center";
            document.getElementById('j1').value='Clear All';
            document.getElementById('j2').value='Scientific Function';
            document.getElementById('j3').value='random(1-x)';
            document.getElementById('j4').value='Rad to Deg';
            document.getElementById('j5').value='Deg to Rad';
            document.getElementById('j6').value='Memory';
            document.getElementById('j7').innerHTML='Created by Bartłomiej Wlach';
            l--;
        }
}