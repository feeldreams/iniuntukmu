vketik1=kalimat.innerHTML;kalimat.innerHTML = "";var aa=0,vketik1;
function mulaiketik1(){
  if(aa<vketik1.length){
    kalimat.innerHTML += vketik1.charAt(aa);aa++;
    setTimeout(mulaiketik1,100);
  }
  if(aa==vketik1.length){setTimeout(befanim,1500);setTimeout(gantikalimat2,1800);}
}

  vketik2=kalimatb.innerHTML;kalimatb.innerHTML = "";
  vketik3=kalimatc.innerHTML;kalimatc.innerHTML = "";
  vketik4=kalimatd.innerHTML;kalimatd.innerHTML = "";
  vketik5=kalimate.innerHTML;kalimate.innerHTML = "";
  vketik6=kalimatf.innerHTML;kalimatf.innerHTML = "";
  vketik7=kalimatg.innerHTML;kalimatg.innerHTML = "";
  vketik8=kalimath.innerHTML;kalimath.innerHTML = "";
  vketik9=kalimati.innerHTML;kalimati.innerHTML = "";
  vketik10=kalimatj.innerHTML;kalimatj.innerHTML = "";
  
  function gantikalimat2(){setTimeout(anim,100);kalimat.innerHTML = "";kalimatb.innerHTML=vketik2;setTimeout(befanim,1800);setTimeout(gantikalimat3,2100);}
  function gantikalimat3(){fthilang();ftganti=1;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimatb.innerHTML = "";kalimatc.innerHTML=vketik3;inikuis=1;setTimeout(tombol,700);}
  function gantikalimat4(){fthilang();ftganti=2;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimatc.innerHTML = "";kalimatd.innerHTML=vketik4;setTimeout(befanim,2300);setTimeout(gantikalimat5,2600);}
  function gantikalimat5(){fthilang();ftganti=1;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimatd.innerHTML = "";kalimate.innerHTML=vketik5;document.querySelector(".kolomrange").style="display:flex";inikuis=2;setTimeout(tombol,700);}
  function gantikalimat6(){fthilang();ftganti=2;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimate.innerHTML = "";kalimatf.innerHTML=vketik6 + rangeval.textContent + "! &#10084;";inikuis=3;tombol();}
  function gantikalimat7(){fthilang();ftganti=1;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimatf.innerHTML = "";kalimatg.innerHTML=vketik7;inikuis=4;setTimeout(tombol,700);}
  function gantikalimat8(){fthilang();ftganti=2;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimatg.innerHTML = "";kalimath.innerHTML=vketik8;setTimeout(befanim,2000);setTimeout(gantikalimat9,2300);}
  function gantikalimat9(){fthilang();ftganti=1;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimath.innerHTML = "";kalimati.innerHTML=vketik9;mulaict();}
  function gantikalimat10(){fthilang();ftganti=0;ftfungsi=1;setTimeout(ftmuncul,300);setTimeout(anim,100);kalimati.innerHTML = "";kalimatj.innerHTML=vketik10;}
  
  function befanim(){
    kalimat.style="opacity:0;transition:all .3 ease;";
    kalimatb.style="opacity:0;transition:all .3 ease;";
    kalimatc.style="opacity:0;transition:all .3 ease;";
    kalimatd.style="opacity:0;transition:all .3 ease;";
    kalimate.style="opacity:0;transition:all .3 ease;";
    kalimatf.style="opacity:0;transition:all .3 ease;";
    kalimatg.style="opacity:0;transition:all .3 ease;";
    kalimath.style="opacity:0;transition:all .3 ease;";
    kalimati.style="opacity:0;transition:all .3 ease;";
    kalimatj.style="opacity:0;transition:all .3 ease;";
  } 
  function anim() {
    kalimat.style="";
    kalimatb.style="";
    kalimatc.style="";
    kalimatd.style="";
    kalimate.style="";
    kalimatf.style="";
    kalimatg.style="";
    kalimath.style="";
    kalimati.style="";
    kalimatj.style="";
  }
  
  async function ditolak(){
  	Tombol.style="transition:all .3s ease;opacity:0";await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});tombol();
   }
   
   function mulaict(){
    var timeleft = 3;
    var downloadTimer = setInterval(function(){
    timeleft--;document.getElementById("ctimer").textContent = timeleft;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
      if(timeleft==0){
       befanim();setTimeout(gantikalimat10,400);
      }
    },1000);
  }
  
  vketikakhir=haloakhir.innerHTML;haloakhir.innerHTML="";var aaa=0,vketikakhir;
  function mulaiketikakhir(){
  if(aaa<vketikakhir.length){halo.innerHTML += vketikakhir.charAt(aaa);aaa++;setTimeout(mulaiketikakhir,100);}
  if(aaa==vketikakhir.length){bq.style = "";inikuis=50;setTimeout(tombol,1500);}
  }

  function aksistiker(){
  	if(ftfungsi==1){
  	bq.style = "position:relative;";
      wallpaper.style="transform: scale(3);";
      fthilang();ftganti=3;setTimeout(ftmuncul,300);
  	halo.innerHTML="";halo.style="font-family:var(--gaya-font2);font-size:25px !important;";
      mulaiketikakhir();
      pesanwhatsapp = "Hai, Aku sayang sama kamu " + rangeval.textContent + ". %0A%0A" + "Aku juga kangen banget sama kamu ><";
      ftfungsi=0;
      }
  }
