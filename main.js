var WIDTH=1600,
    preheader="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
    header="<svg id='mandala' version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\""+WIDTH+"px\" height=\""+WIDTH+"px\" viewBox=\"0 0 "+WIDTH+" "+WIDTH+"\" enable-background=\"new 0 0 "+WIDTH+" "+WIDTH+"\" xml:space=\"preserve\">\n",
    footer="</svg>",
    REP=Math.floor(Math.random()*6)+2,
    colored=false,
    color="ffffff",
    d1=[],
    d2=[],
    d3=[],
    d4=[],
    d5=[],
    RAD=WIDTH/2,
    container=document.getElementById("container"),
    mandala="";

function generate(){
    document.getElementById('container').innerHTML = ''
    mandala=header;
    for(i=0; i<REP; ++i)
    {

  d1[i]=Math.random()*RAD;
	d2[i]=Math.random()*RAD;
	d3[i]=Math.random()*RAD;
	d4[i]=Math.random()*RAD;
  d5[i]=Math.random()*RAD;
    }



    for(i=0; i<REP; ++i)
    {
	     var curang=0,
	     ang=Math.PI/(1<<(Math.floor(Math.random()*3)+2));

  if(colored)
	{
	    color=Math.floor(Math.random()*16777216).toString(16);
	}
	while(curang<2*Math.PI)
	{
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(curang))+","+(RAD+d1[i]*Math.sin(curang))+" C "+(RAD+d2[i]*Math.cos(curang))+","+(RAD+d2[i]*Math.sin(curang))+" "+(RAD+d3[i]*Math.cos(curang+ang))+","+(RAD+d3[i]*Math.sin(curang+ang))+" "+(RAD+d4[i]*Math.cos(curang+ang))+" "+(RAD+d4[i]*Math.sin(curang+ang))+" Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"4\" /> class=\"path\"\n");
	    curang+=ang;
	    mandala+=("<path d=\"M "+(RAD+d1[i]*Math.cos(curang+ang))+","+(RAD+d1[i]*Math.sin(curang+ang))+" C "+(RAD+d2[i]*Math.cos(curang+ang))+","+(RAD+d2[i]*Math.sin(curang+ang))+" "+(RAD+d3[i]*Math.cos(curang))+","+(RAD+d3[i]*Math.sin(curang))+" "+(RAD+d4[i]*Math.cos(curang))+" "+(RAD+d4[i]*Math.sin(curang))+"  Z\" stroke=\"black\" fill=\"#"+color+"\" stroke-width=\"4\" />\n");
	    curang+=ang;


	}
    }



    mandala+=footer;

    var a=document.getElementById("download");
    url = window.URL.createObjectURL(new Blob([preheader+mandala], {type: 'image/svg'}));
    new Vivus('container', { duration: 500, type: 'oneByOne', file: url  },
    function (obj) {
     obj.el.classList.add('finished');
   });

    a.download = "mandala.svg";
}

function toggleColor()
{
  colored=true;
    color="ffffff";
    generate();
}

function onlystroke()
{
  colored=false;
    color="ffffff";
    generate();
}
generate();
