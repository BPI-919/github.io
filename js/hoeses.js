
/******************************************
* Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
* Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
* Last updated Nov 9th, 05' by DD. This notice must stay intact for use
******************************************/
  
  //Configure below to change URL path to the snow image
  var snowsrc = "img/hopehely.png";
  // Configure below to change number of snow to render
  var no = 16;
  // Configure time in sec when snow should disappear (-1 = no specific date):
  var hidesnowtime = -1;
  // Configure time in sec when snow should appear (-1 = no specific date):
  var unhidesnowtime = -1;
  // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
  var snowdistance = "pageheight";

///////////Stop Config//////////////////////////////////

  var ie4up = (document.all) ? 1 : 0;
  var ns6up = (document.getElementById&&!document.all) ? 1 : 0;

	function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
	}

  var dx, xp, yp;    // coordinate and position variables
  var am, stx, sty;  // amplitude and step variables
  var i, doc_width = 800, doc_height = 600; 
  
  if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight;
  } else if (ie4up) {
    doc_width = iecompattest().clientWidth;
    doc_height = iecompattest().clientHeight;
  }

  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  
  for (i = 0; i < no; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = 66 + Math.random()*(doc_width-180);  // set position variables
    yp[i] = Math.random()*(doc_height-66);
    am[i] = Math.random()*10;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 2.5 + Math.random();     // set step variables
		if (ie4up||ns6up) {
      if (i == 0) {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "'><\/div>");
      } else {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + "'><\/div>");
      }
    }
  }

  function snowIE_NS6() {  // IE and NS6 main animation function
    doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
		doc_height = (window.innerHeight && snowdistance == "windowheight")? window.innerHeight : (ie4up && snowdistance == "windowheight")?  iecompattest().clientHeight : (ie4up && !window.opera && snowdistance == "pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;
    for (i = 0; i < no; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-66) {
        xp[i] = 66 + Math.random()*(doc_width-am[i]-180);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 2.5 + Math.random();
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top=yp[i]+"px";
      document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";  
    }
    setTimeout("snowIE_NS6()", 10);
  }

	function hidesnow(){
		for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden"
	}
	
  function unhidesnow(){
		for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="visible"
	}

  function time(){
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    const time = hour * 3600 + min * 60 + sec;

    return time;
  }

if (ie4up||ns6up){
    snowIE_NS6();
		if (hidesnowtime >= 0 && (hidesnowtime != unhidesnowtime)) {
      setTimeout("hidesnow()", (hidesnowtime - time()) * 1000);
    }
    if (unhidesnowtime >= 0 && (hidesnowtime != unhidesnowtime)) {
      setTimeout("unhidesnow()", (unhidesnowtime - time()) * 1000);
    }
}
