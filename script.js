
let a =Math.round(Math.random()*10);
let b =Math.round(Math.random()*10);
let c =Math.round(Math.random()*10);

    document.querySelector('#a').innerText = a;
    document.querySelector('#b').innerText = b;
    document.querySelector('#c').innerText = c;

function check()
{
    let ans = eval(a*b+c);
    let userAns =document.querySelector('#ans').value;
    userAns = parseInt(userAns);

    if(ans === userAns)
    {
        document.querySelector('#link').innerHTML =`<h3>Go to the
        <a href='welcome.html' style='text-decoration:underline; color:blue'"> Home Page <a/></h4>`;
    }
    else{
        document.querySelector('#link').innerHTML ="<p style='color:red;text-align:center; font-size:20px;'>Invalid Captcha</p>"
    }


}