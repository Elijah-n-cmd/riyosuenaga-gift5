var livew;

function includeJS(jsPath){
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", jsPath);
  document.getElementsByTagName("head")[0].appendChild(script);
}

includeJS('/include/js/');

function logout(){
    var win = window.opener ? window.opener : window.dialogArguments, c;
    if(win != undefined){
       opener.window.location = "/logout";
       window.close();
    } else {
       window.location = "/logout";
    }
}

function d2p_toolbar_logout(){
       window.location = "/logout";
}

function d2p_toolbar_login(){
       window.location = "/member/pageSelect";
}

function d2p_toolbar_site_join() {
       window.location = "/join.html";
}

function openGuestJoin() {
       window.open('/join.html','JoinPage','width=1200,height=800,location=yes,resizable=yes,scrollbars=yes,status=yes,menubar=yes,toolbar=yes');
       //openNewWindow('/join.html','JoinPage','width=1000,height=800,resizable=yes,scrollbars=yes');
}

function openFiveMinFreechat(){
       window.open('/promo/2013/chat5minFree/index.html','FiveMinFree','width=1200,height=800,location=yes,resizable=yes,scrollbars=yes,status=yes,menubar=yes,toolbar=yes');
       //openNewWindow('/promo/2013/chat5minFree/index.html','FiveMinFree','width=1000,height=800,resizable=yes,scrollbars=yes');
}

function setCookie(name, value, expires, path, cookie_domain, secure) {
  expires = (expires) ? expires.toGMTString() : '';
  path = (path) ? path : '/';
  cookie_domain = (cookie_domain) ? cookie_domain : domain;
  var curCookie = name + "=" + escape(value) +
  ((expires) ? "; expires=" + expires : "") +
  ((path) ? "; path=" + path : "") +
  ((domain) ? "; domain=" + cookie_domain : "") +
  ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}

function setCookieCommon(name, value, expires, path, cookie_domain, secure) {
  if (expires instanceof Date) {
    expires = expires.toGMTString();
  }

  path = path || '/';
  cookie_domain = cookie_domain || '';

  var curCookie = name + "=" + escape(value) +
    (expires ? "; expires=" + expires : "") +
    (path ? "; path=" + path : "") +
    (cookie_domain ? "; domain=" + cookie_domain : "") +
    (secure ? "; secure" : "");

  document.cookie = curCookie;
}

function deleteCookie ( cookie_name, valid_domain ){
  var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
  console.log(domain_string);
  document.cookie = cookie_name + "=; max-age=0; path=/" + domain_string ;
}

function copyright(teston) {
    copyright=new Date();
    update=copyright.getFullYear();
    if( teston ) {
	document.write("<a href=\"#\"onClick=\"MM_openBrWindow('/chat?hd=1&test=1','hd','scrollbars=yes,resizable=yes,width=1273,height=548')\">");
	document.write("&copy; ");
	document.write("</a>");
        document.write("2002-"+ update + " Dxlive.com All rights reserved.");
    }  else  {
        //document.write("&copy; 2002-"+ update + " Dxlive.com All rights reserved.");
	document.write("&copy; 2002 DXLIVE.COM ALL RIGHTS RESERVED.");
    }

}

function getCookie(cookieName){
  var search = cookieName + '=';
  if (document.cookie.length>0) {
    offset = document.cookie.indexOf(search);
    if (offset != -1){
      offset += search.length;
      end     = document.cookie.indexOf(';',offset);
      if(end == -1)
        end = document.cookie.length;
      return unescape(document.cookie.substring(offset,end));
    }
  }
  return null;
}

function openMemo(contact) {
  if (contact==null || contact == 'undefined') {
    var obj = getElementFromName('contact_name');
    if (obj) {
        contact = getElementFromName('contact_name').value;
    } else {
        contact = '';
    }
  }
  if (contact!='') {
    if (isPerformer()) {
        openNewWindow('/contact/memo/' + contact,'contact'+contact,'width=400,height=732,resizable=yes,scrollbars=yes');
    } else {
        openNewWindow('/contact/memo/' + contact,'contact'+contact,'width=400,height=520,resizable=yes,scrollbars=yes');
    }
  } else {
    openNewWindow('/contact/','contact','width=900,height=600,resizable=yes,scrollbars=yes');
  }
}

function openProfile(uname) {
  //openNewWindow('/preview/'+uname, 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=800,height=950');
  window.open('/preview/'+uname, '_blank');
}

function openProfile1P(uname) {
  //openNewWindow('/preview/'+uname+'?NetiFL=1', 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=800,height=950');
  window.open('/preview/'+uname+'?NetiFL=1', '_blank');
}

function openFcProfile(uname) {
  openNewWindow('/fanclub/'+uname, 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=800,height=950');
}

function openPR(uname) {
  openNewWindow('/video/pr/'+uname, 'pr'+uname, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=855,height=605');
}

function showFcUpdateInfo() {
  if (fc_contents) {
    document.getElementById('fc_diary_info').innerHTML= fc_contents.diary;
    document.getElementById('fc_image_info').innerHTML= fc_contents.image;
    document.getElementById('fc_video_info').innerHTML= fc_contents.video;
    last_update = new Array();
    last_update = fc_contents.last_update.split("-");
    document.getElementById('fc_last_update').innerHTML= last_update[0]+'年'+last_update[1]+'月'+last_update[2]+'日';
  }
}

function setChatMode(mode) {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/member/setChatMode/" + mode;
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        res = xmlhttp.responseText;
      }
    }
    xmlhttp.send(null);
    setCookie('vm',mode);
    setTimeout("xmlHttpGet('/member/account', 'status');",1500);
}

function setChatMode_vctp(mode) {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/member/setChatMode/" + mode;
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        res = xmlhttp.responseText;
      }
    }
    xmlhttp.send(null);
    setCookie('vm',mode);
    //setTimeout("xmlHttpGet('/member/account', 'status');",1500);
}

function setChatType(mode) {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/member/setChatLayout/" + mode;
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        res = xmlhttp.responseText;
      }
    }

    xmlhttp.send(null);
    setCookie('ct',mode);
    setTimeout("xmlHttpGet('/member/account', 'status');",1500);
}

//Moved to home so all users can use it without logging in.
function setThumbSize()
{
	var setSize;
	var id_big='thsbtn_on';
	var large=getCookie('thumbsize');

	if(!large){
        moviethumb=18;
        setSize=0;
	} else {
  	  if(large==1){
		moviethumb=18;
		setSize=0;
	  } else {
		moviethumb=15;
		setSize=1;
	  }
	}

	setCookie('thumbsize',setSize,'','/','.dxlive.com');
	if(setSize==1){
		if(document.layers){
			document.layers[id_big].textContent='大';
		}else if(document.all){
			document.all[id_big].innerText='大';
		}else if(document.getElementById){
			document.getElementById(id_big).textContent='大';
		}
	}else{
		if(document.layers){
			document.layers[id_big].textContent='小';
		}else if(document.all){document.all[id_big].innerText='小';}else

		if(document.getElementById){document.getElementById(id_big).textContent='小';}
	}
	//if( isUser() || isVIP())
    //{
        xmlHttpGet('/video/getTube','videohere');
    //}
    //else
    //{
    //    xmlHttpGet('/video/getTube//1','videohere');
    //}
	setTimeout("categoryView(global_tab_cat);",100);
}

function setPageMode(mode) {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/member/setPageMode/" + mode;
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        res = xmlhttp.responseText;
      }
    }

    xmlhttp.send(null);
    setCookie('mp',mode);
	$(document).ready(function() {
		//alert(mode);
		//first take away class and uncheck the radio, using a's class
		$('a.pageChecker').parent().removeClass('pageChecked');
		$('a.pageChecker').children('input').attr('checked', false);

		//then add class and check the radio by var mode, which corresponds each a's #
		$('a#'+mode).parent().addClass('pageChecked');
		$('a#'+mode).children('input').attr('checked', true);
	});
    //setTimeout("xmlHttpGet('/member/account', 'status');",50);
}

function openPreview(uname) {

  //openNewWindow('/preview/'+uname, 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=800,height=950');
  window.open('/preview/'+uname, '_blank');
}

function redirectToPreview(uname) {
	  window.open('/preview/'+uname, '_self');
}

function openPreviewCCG(uname) {
  window.open('http://www.caribbeancomgirl.com/preview/'+uname, '_blank');
}

function openViewerProfileSelf(uname, origin) {
  if(!origin){
    var origin = 'default';
  }
  var xmlhttp = getXmlhttp();
  var url = "";
  url = "/footprint/"+origin+"/"+uname;
  xmlhttp.open('POST', url, true);
  xmlhttp.onreadystatechange = function()
  {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      res = xmlhttp.responseText;
    }
  }
  xmlhttp.send(null);
  window.location.href = '/profile/member/'+uname;
}

function openViewerProfile(uname, origin) {
  if(!origin){
    var origin = 'default';
  }

  var xmlhttp = getXmlhttp();
  var url = "";
  url = "/footprint/"+origin+"/"+uname;
  xmlhttp.open('POST', url, true);
  xmlhttp.onreadystatechange = function()
  {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      res = xmlhttp.responseText;
    }
  }
  xmlhttp.send(null);
	openNewWindow('/profile/member/'+uname, 'profile', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=382,height=601');
}



function openViewersChatSame(performer, stype, fromSite, replace) {
      if (stype != 115 && stype != 120) {
        var chatmode = getCookie('vm');
        if (chatmode=='ROM') {
            stype = 120;
        } else if(chatmode=='PUBLIC'){
            stype = 115;
	}
      }
      window.close();

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = jp_url+'/chat/';
        }
    }

      if(fromSite){
        chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?2ndchat=1&replace=1', performer, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=780,height=700');
      } else {
        chatw = window.open(chatDomain+performer+'/'+stype+'?2ndchat=1&replace=1', performer, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=780,height=700');
      }
      chatw.focus();
}



function openViewersChatTrack(performer, stype, fromSite, notMax) {
    //if (isUser() || isVIP()) {
      if (stype != 115 && stype != 120) {
        var chatmode = getCookie('vm');
        if (chatmode=='ROM') {
            stype = 120;
        } else if(chatmode=='PUBLIC'){
            stype = 115;
        }
      }

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = jp_url+'/chat/';
        }
    }

      if(notMax){
        if(fromSite){
          chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?notMax=1&2ndchat=1', performer, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=780,height=700');
        } else {
          chatw = window.open(chatDomain+performer+'/'+stype+'?notMax=1&2ndchat=1', performer, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=780,height=700');
        }
      } else {
        if(fromSite){
          chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?2ndchat=1', performer, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=780,height=700');
        } else {
          chatw = window.open(chatDomain+performer+'/'+stype+'?2ndchat=1', performer, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=780,height=700');
        }
      }
      chatw.focus();
    //} else {
    //    openProfile(performer);
    //}
}



function openViewersChatHDrom(performer, stype, fromSite) {
      if (stype != 115 && stype != 120) {
        var chatmode = getCookie('vm');
        if (chatmode=='ROM') {
            stype = 120;
        } else if(chatmode=='PUBLIC') {
            stype = 115;
        }
      }

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = jp_url+'/chat/';
        }
    }

      if(fromSite){
        var chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?hdrom2=1', performer, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
      } else {
        var chatw = window.open(chatDomain+performer+'/'+stype+'?hdrom2=1', performer, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
      }
      chatw.focus();
}



//Use stype = 110 in templates if you want to use viewer category choice.

//jchen just changed preview template from 110 to 115. If you want 110 talk to me please.

function openViewersChatHD(performer, stype, fromSite) {
/* var hasFlash = false;
    try {
      hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
      hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }

	var isMacSafari = false;
	var UA = navigator.userAgent;
	if( UA.indexOf('Mac') >=0 && UA.indexOf('Safari') >=0 && UA.indexOf('Version/10') >=0 && UA.indexOf('iPad') == -1 && UA.indexOf('iPhone') == -1 && UA.indexOf('Chrome') == -1) {
        isMacSafari = true;
	}

    console.log(hasFlash);
*/
//    if(!hasFlash && !isMacSafari){
//      chatw = window.open("http://www.dxlive.com/chatmobile/"+performer, performer);
//	} else {
      if (stype != 115 && stype != 120) {
        var chatmode = getCookie('vm');
        if (chatmode=='ROM') {
            stype = 120;
        } else if(chatmode=='PUBLIC'){
            stype = 115;
        }
      }

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = jp_url+'/chat/';
        }
    }

      if(fromSite){
        var chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=1010,height=720');
      } else {
        var chatw = window.open(chatDomain+performer+'/'+stype, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=1010,height=720');
      }
//	}
  chatw.focus();
}



function openViewersChat(performer, stype, fromSite, notMax) {
/*    var hasFlash = false;
    try {
      hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
      hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }

	var isMacSafari = false;
	var UA = navigator.userAgent;
	if( UA.indexOf('Mac') >=0 && UA.indexOf('Safari') >=0 && UA.indexOf('Version/10') >=0 && UA.indexOf('iPad') == -1 && UA.indexOf('iPhone') == -1 && UA.indexOf('Chrome') == -1) {
        isMacSafari = true;
	}
*/
/*	var hasFlash = detectFlashPlayer();
	if (hasFlash == 'FlashEnabled') {
		//ssl_url stays https://
	} else {
		ssl_url = 'http://www.dxlive.com';
	}
*/
    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = ssl_url+'/chat/';
        }
    }

//	if(!hasFlash && !isMacSafari){
//	  chatw = window.open("//www.dxlive.com/chatmobile/"+performer, performer);
//	} else {
      /*
      if(stype != 115 && stype != 120){
	    var chatmode = getCookie('vm');
        if (chatmode=='ROM') {
          stype = 120;
        } else if(chatmode=='PUBLIC'){
          stype = 115;
        }
  	  }
      */
      // RM 5546 DX (PC VW): Modification of Entering Mode
      stype = 115;

      if(notMax){
        if(fromSite){
          chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?notMax=1', performer, 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=1010,height=720');
        } else {
          chatw = window.open(chatDomain+performer+'/'+stype+'?notMax=1', performer, 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=1010,height=720');
        }
      } else {
	    if(fromSite){
	      var chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=1010,height=720');
	    } else {
          var chatw = window.open(chatDomain+performer+'/'+stype, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=1010,height=720');
  	    }
	  }
//	}
    chatw.focus();
}

function openViewersChatFree(performer, stype, fromSite, notMax) {
/*    var hasFlash = false;
    try {
      hasFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
    } catch(exception) {
      hasFlash = ('undefined' != typeof navigator.mimeTypes['application/x-shockwave-flash']);
    }

	var isMacSafari = false;
	var UA = navigator.userAgent;
	if( UA.indexOf('Mac') >=0 && UA.indexOf('Safari') >=0 && UA.indexOf('Version/10') >=0 && UA.indexOf('iPad') == -1 && UA.indexOf('iPhone') == -1 && UA.indexOf('Chrome') == -1) {
        isMacSafari = true;
	}
*/
//    if(!hasFlash && !isMacSafari){
//		chatw = window.open("//www.dxlive.com/chatmobile/"+performer, performer);
      //chatw = window.open("http://m.dxlive.com/chat/"+performer+"/115", performer+"mobileFreeC");
//    } else {

    /*
    if(stype != 115 && stype != 120){
        var chatmode = getCookie('vm');
        if (chatmode=='ROM') {
            stype = 120;
        } else if(chatmode=='PUBLIC'){
            stype = 115;
        }
    }
    */
    // RM 5546 DX (PC VW): Modification of Entering Mode
    stype = 115;
    var chatPopupWidth = 1010;
    if (window.screen.width >= 1024){
        chatPopupWidth = 1200;
    }

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = ssl_url+'/chat/';
        }
    }

    if(notMax){
        if(fromSite){
            chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?notMax=1&freeChatClicked=1', performer+'_chatFree', 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width='+chatPopupWidth+',height=720');//width=1100,height=800
        } else {
            chatw = window.open(chatDomain+performer+'/'+stype+'?notMax=1&freeChatClicked=1', performer+'_chatFree', 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width='+chatPopupWidth+',height=720');//width=1100,height=800
        }
    } else {
        if(fromSite){
            var chatw = window.open(chatDomain+performer+'/'+stype+'/'+fromSite+'?freeChatClicked=1', performer+'_chatFree', 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width='+chatPopupWidth+',height=720');//width=1100,height=800
        } else {
            var chatw = window.open(chatDomain+performer+'/'+stype+'?freeChatClicked=1', performer+'_chatFree', 'resizable=yes,status=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width='+chatPopupWidth+',height=720');//width=1100,height=800
        }
    }
 //   }
    console.log("openViewersChatFree");
    chatw.focus();
}

function reloadChatWindow(performer) {

    var chatmode = getCookie('vm');
    if (chatmode=='ROM') {
        var stype = 120;
    } else if(chatmode=='PUBLIC'){
        var stype = 115;
    }

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = jp_url+'/chat/';
        }
    }

    window.location.href = chatDomain+performer+'/'+stype+'?reload=1';
}

function openViewerHelp(vctp_site) {

    var search = getQueryVariable('vctp_site');

    if (search != '' || vctp_site == 1) {

        openNewWindow('/vctp/beginner/index.html', 'help', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');

    } else {

      if(isVIP()){

        openNewWindow('/member/howto_chat_new_vip.html','help', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');

      } else if(isUser()){

        openNewWindow('/member/howto_chat_new.html','help', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');

      }else{

        openNewWindow('/howto_guest01.html','help', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');
      }

    }

}



function openPerformerHelp() {

    if (is910Performer()) {

        openNewWindow('/performer910/first_time_chat_login.html', 'help', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');

    } else {

        openNewWindow('/performer/hajimete2.html#1', 'help', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');

    }

}



function openViewerVchat (uid, stype) {

  if (stype != 115 && stype != 120)

     stype = 115;

  openNewWindow('/chat/'+uid+'/'+stype, 'Chat'+uid, 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=800,height=540');

}



function openPerformerVchat() {

  openNewWindow('/chat?as2_pf=1','vchat','resizable=yes,width=800,height=500');

}



function checkUncheckAll(theElement) {

  var theForm = theElement.form;

	var z = 0;

	for(z=0; z<theForm.length; z++){

  	if(theForm[z].type == 'checkbox' && theForm[z].name != 'checkall'){

			theForm[z].checked = theElement.checked;

		}

  }

}



function getSessionType(user_name) {

	/*if(user_arr && user_arr!=null) {

		var user = user_arr[user_name];

		if(user!=null) {

			return user.session_type;

		}

	}*/

    var new_var = "performers.online."+user_name;

    var online = eval(new_var);

    if (online != null) {

        return online.session;

    }



	return 0;

}

function showLoading(){
  try{
    document.getElementById('loading').style.display = 'block';
    document.getElementById('clearSearchName').style.display = 'none';
  } catch(e){
  }
}

function hideLoading(){
  try{
    document.getElementById('loading').style.display = 'none';
    document.getElementById('clearSearchName').style.display = 'block';
  } catch(e){
  }
}

function xmlHttpGet(strURL, elementId) {
  var xmlhttp = false;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest(); //Mozilla/Safari/IE7/Chrome/Opera
  } else if (window.ActiveXObject) { //IE6/IE5
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  if(!xmlhttp) return;
	strURL += (strURL.indexOf('?')>0?'&t=':'?t=') + Math.random();
    xmlhttp.open('GET', strURL, true);
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var obj = getElementFromName(elementId);
      if(obj) obj.innerHTML= xmlhttp.responseText;
			fixPNGImages(elementId);
			-1!==strURL.indexOf("moviethumbs")&&void 0!==window.__chrome27issue&&(xmlhttp.onload=function(){__chrome27issue('thumbshere')});
    }
  }
  xmlhttp.send(null);
  return;
}



function xmlHttpPost(strURL, params, elementId) {
  var xmlhttp = false;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest(); //Mozilla/Safari
  } else if (window.ActiveXObject) { //IE
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  if(!xmlhttp) return;
        strURL += (strURL.indexOf('?')>0?'&_rand=':'?_rand') + Math.random();
  xmlhttp.open('POST', strURL, true);
  xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var obj = getElementFromName(elementId);
      if(obj) obj.innerHTML= xmlhttp.responseText;
        if(elementId){
          fixPNGImages(elementId);
        }
    }
  }
  xmlhttp.send(params);
  return;
}



function getXmlhttp(){

  var xmlhttp;



  if(window.XMLHttpRequest) {

 		try {

			xmlhttp = new XMLHttpRequest();

  	} catch(e) {

			xmlhttp = false;

  	}

  } else if(window.ActiveXObject) {

    try {

      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

    } catch(e) {

       try {

       		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

       } catch(e) {

       		xmlhttp = false;

       }

		}

  }

  return xmlhttp;

}



function getElementFromName(nm){

  // IE5+, Mozilla, Opera

  if(document.getElementById) return document.getElementById(nm);

  if(document.all) return eval('document.all.' + nm); // IE4

  if(document.layers){ // NN4

    var s='';

    for(var i=1; i<arguments.length; i++)

      s+='document.layers.'+arguments[i]+'.';

    return eval(s+'document.layers.'+nm);

  }

  return null;

}



function openNewWindow(theURL,winName,features) {

	var w = window.open(theURL,winName,features);

	//w.focus();

}



var userName = '';

var userId = '';

var userType = '';

var c = getCookie('NetiA');

if(c) {

	var arr = c.split(':');

	userName = arr[0];

}

c = getCookie('vauth');

if(c) {

  var arr = c.split(':');

  userName = arr[0];

  userId = arr[1];

  userType = arr[2];

  siteId = arr[3];

  nightFlag = arr[4];

}

var s2s_query = window.location.search.substring(1);
var s2s_vars = s2s_query.split('&');
for(var i = 0; i < s2s_vars.length; i++) {
    var s2s_pair = s2s_vars[i].split('=');
    if(decodeURIComponent(s2s_pair[0]) == 's2s_id') {
        includeJS('/include/s2sCookie?'+s2s_query);
    }
}

function isGuest() {/*Addition 042816 designer*/
  return (typeof window.userType === 'undefined' ||  window.userType ==="")?true:false;
}

function isVIP() {

	return (userType==206 || userType==215 || userType==220)?true:false;

}

function isUser() {

  return (userType==205 || userType==207 || userType==208 || userType==215 || userType==220)?true:false;

}

function isPerformer() {

	return (userType==210)?true:false;

}

function isRegularUser() {

        return (userType==205)?true:false;

}

function isFreeUser() {

        return (userType==207 || userType==208)?true:false;

}

function isAdmin() {

        return (userType==215 || userType==220)?true:false;

}

function is910Performer() {

	return (nightFlag==1)?true:false;

}



function show_pf_online(pfname){



  var session_type = getSessionType(pfname);

  if(session_type > 0)

     return session_type;

  else

     return false;



}



// ---------------------------------------------------------------------------------

// Function for web and flash

// ---------------------------------------------------------------------------------

function change_message(v_message) {
    //commented out for new AS3 chat.
    //var v_message = $('#message').val();
    //alert("v_message is "+v_message);
    //var v_message = unescape(v_message);
    if( !v_message) v_message = $('#message').val();
	if( !v_message) v_message = "";
    //alert("v_message 2 is "+v_message);
    $.ajax({
            type: "POST",
            url: "/performer/thumbnail_message/true",
            data: "message="+v_message,
            dataType: "text",
            success : function(data, dataType){
              if(data == 'success'){
                alert("サムネイルメッセージが更新されました\n"+v_message);
              } else {
                alert(data);
              }
            },
            error: function(){
              alert("Error:");
            }
        });
}

function change_message_as3(v_message) {
    //commented out for new AS3 chat.
    //var v_message = $('#message').val();
        //alert("v_message is "+unescape(v_message));
        var v_message = unescape(v_message);
    if( !v_message) v_message = $('#message').val();
        //alert("v_message is "+v_message);
        if( !v_message) v_message = "";
        //alert("v_message 2 is "+v_message);

    $.ajax({
            type: "POST",
            url: "/performer/thumbnail_message/true",
            data: "message="+v_message,
            dataType: "text",
            success : function(data, dataType){
              if(data == 'success'){
		//Ferdy is gonna control the alerts in flash.
                //alert("サムネイルメッセージが更新されました\n"+v_message);
              } else {
                //alert(data);
              }
            },
            error: function(){
              //alert("Error:");
            }
        });
}


function openSendMail(uname) {
    console.log('common openSendMail');
    if (typeof over_limit_flag === 'undefined' )
    {
        console.log('over_limit_flag undefined');
        over_limit_flag = 0;
    }

    if (typeof spent === 'undefined' )
    {
        console.log('spent undefined');
        spent = 1.2;
    }

   if(over_limit_flag){
        var r=confirm("一日の送信制限を越えましたので、送信には1ポイントがかかりますが宜しいでしょうか？");
        if (r==true){
   			//
        } else {
          return false;
        }
    }

    if(spent >= 1.2){
        openNewWindow('/mailbox/compose/?toidlist='+uname , 'mailbox' , '');
        return true;
    } else {
      var r = confirm("90日以内に1.2ポイント以上消費された方が無料で送信可能です。送信には1ポイントかかりますが宜しいでしょうか？");
      if (r == true) {
        openNewWindow('/mailbox/compose/?toidlist='+uname , 'mailbox' , '');
      } else {
        return false;
      }
    }
    openNewWindow('/mailbox/compose/?toidlist='+uname , 'mailbox' , '');

}



function openMailbox() {

  // openMailbox()

  openNewWindow('/mailbox/', 'mailbox' , 'resizable=yes, toolbar=yes, scrollbars=yes, menubar=yes, width=800, height=600');

}





function closeCurrentWindow(sec) {

  //case: viewer's connection to flash server has closed via logout button

  //js call: closeCurrentWindow(.1)  (parameter is delay before closing window)

  if(livew){

    livew.close();

  }

  if (sec == '' || sec == null)

  	sec = 0.1;

  window.setTimeout('window.close()',sec*100);
  //window.setTimeout('window.location.reload()',sec*100);

}



function setBan(channel) {

  //case: perf has kicked a viewer

  //js call: setBan(channel)  (parameter 'channel' is the performer ID)

}



function setBlock(uid, flag){

    var xmlhttp = getXmlhttp();

    var url = "";



    url = "/contact/setBlock/"+uid+"/"+flag+"/"+Math.random();

    xmlhttp.open('GET', url, true);

    xmlhttp.onreadystatechange = function(){

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

            res = xmlhttp.responseText;

            if(res == "success")

                alert("メール受信を拒否しました");

            else if(res == "no_user")

                alert("連絡先が見つかりません");

            else if(res == "already")

                alert("既に拒否されています");

			else if(res == 'staff')
                  alert("運営側からのメールは受信拒否できませんので、ご了承下さい。");
            else
                alert("拒否できませんでした。");


        }

    }



    xmlhttp.send(null);

}



function addFavorite(uname,reload){//edited for guest behavior designer 060116
  if(isUser()||isVIP()){
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/favorite/add/"+uname+"/"+Math.random();
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        res = xmlhttp.responseText;
        if (res=='success' || res=='208_success') {
          if(reload==1) {
            //alert(uname+'ちゃんをお気に入りに追加しました','お気に入りに追加',function(){window.location.reload(true);});
            alert(uname+'ちゃんをお気に入りに追加しました');
            window.location.reload(true);
          } else {
            alert(uname+'ちゃんをお気に入りに追加しました','お気に入りに追加');
          }
        } else if (res=='208_limit_error') {
          alert('お気に入り登録数が上限に達しております。\nお気に入りリストを編集してから再度お試し下さい。\n通常会員様なら無制限でご登録頂けます。','お気に入りに追加');
        } else if (res=='limit_error') {
          alert('お気に入り登録数が上限に達しております。\nお気に入りリストを編集してから再度お試し下さい。','お気に入りに追加');
        } else if (res=='already') {
          alert(uname+'ちゃんはお気に入りに追加されています','お気に入りに追加');
        } else if (res=='208fail') {
          alert('こちらは正規会員様限定の\nサービスとなっております','お気に入りに追加');
        } else {
          alert('追加できませんでした','お気に入りに追加');
        }
      }
    }
    xmlhttp.send(null);
  } else {
    if( typeof xmlHttpGetCallback  === 'function' && typeof $.colorbox ==='function' ) {
      xmlHttpGetCallback('/i/message/chunk.tabGuest.html', function(d) {
        $.colorbox({
          html: d,
          iframe: false,
          closeButton: false,
          innerWidth: 400,
          innerHeight: 276
         });
      });
    } else {
      alert('【お気に入りに追加】\nこちらは正規会員様限定の\nサービスとなっております');
    }
  }
}


function deleteFavorite(uname, reload){
	if(confirm(uname+'さんをお気に入りから削除してよろしいですか？')){
    	var xmlhttp = getXmlhttp();
    	var url = "";
    	url = "/favorite/delete/"+uname+"/"+Math.random();
    	xmlhttp.open('GET', url, true);
    	xmlhttp.onreadystatechange = function(){
        	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            	res = xmlhttp.responseText;
            	if (res=='success') {
                	//alert('削除しました');
                	if(reload==1) {
                        window.location.reload(true);
                    }
            	} else {
                	alert('削除できませんでした');
            	}
            	//xmlHttpGet('/favorite', 'favoritehere');
				//updthumbmyp(12);
        	}
    	}
    	xmlhttp.send(null);
	}
}



function setLoginNoticeFlag(uname,flag){

    var xmlhttp = getXmlhttp();

    var url = "";

    var method = 'loginOn';

    if (flag==false) {

        method = 'loginOff';

    }

    url = "/favorite/"+method+"/"+uname+"/"+Math.random();

    xmlhttp.open('GET', url, true);

    xmlhttp.onreadystatechange = function(){

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

            res = xmlhttp.responseText;

        }

    }

    xmlhttp.send(null);

}

////////////////////////////////////////



function page_reload(){



if(!opener.window.userId)

   window.opener.location.reload();



// if(document.referrer != '' || document.referrer)

//   alert(document.referrer);

// else

//   alert(document.referrer+"no referrer"+userId);



}



function fixPNGImages(areaID) {

	var arVersion = navigator.appVersion.split("MSIE");

	var version = parseFloat(arVersion[1]);

	if ((version >= 5.5) && (document.body.filters)) {

		var pngAreaObj=document.getElementById(areaID);

		var pnglist=pngAreaObj.getElementsByTagName("img");



		for(var i=0; i<pnglist.length; i++){

			var img = pnglist[i];

			var imgName = img.src.toUpperCase();

			if (imgName.substring(imgName.length-3, imgName.length) == "PNG") {

				var imgID = (img.id) ? "id='" + img.id + "' " : "";

				var imgClass = (img.className) ? "class='" + img.className + "' " : "";

				var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";

				var imgStyle = "display:inline-block;" + img.style.cssText;

				if (img.align == "left") imgStyle = "float:left;" + imgStyle;

				if (img.align == "right") imgStyle = "float:right;" + imgStyle;

				if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;

				var strNewHTML = "<span " + imgID + imgClass + imgTitle

					+ " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"

					+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"

					+ "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";

				img.outerHTML = strNewHTML;

				i = i-1;

			}

		}

  }

}



function ajax_request(strURL, tpl) {

  var xmlhttp = false;

  if (window.XMLHttpRequest) {

    xmlhttp = new XMLHttpRequest(); //Mozilla/Safari

  } else if (window.ActiveXObject) { //IE

    try {

      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

    } catch(e) {

      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

  }

  if(!xmlhttp) return;

        strURL += (strURL.indexOf('?')>0?'&_rand=':'?_rand') + Math.random();

  xmlhttp.open('GET', strURL, true);

  xmlhttp.onreadystatechange = function() {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

       flag = xmlhttp.responseText;

       if(flag=='1'){

          alert("追加されました");

          if(isVIP()){

            xmlHttpGet('/search/performer/favorite/vip/?tpl='+tpl, 'favoritehere');

          } else {

            xmlHttpGet('/search/performer/favorite/viewer/?tpl='+tpl, 'favoritehere');

          }

       }

       else if(flag=='3'){

          alert("削除されました");

          if(isVIP()){

            xmlHttpGet('/search/performer/favorite/vip/?tpl='+tpl, 'favoritehere');

          } else {

            xmlHttpGet('/search/performer/favorite/viewer/?tpl='+tpl, 'favoritehere');

          }

       }else if(flag=='3000'){

          alert('お気に入り登録数が上限に達しております。お気に入りリストを編集してから再度お試し下さい。');

       }

       else

          alert("エラーで追加できませんでした");

    }

  }

  xmlhttp.send(null);

  return;

}





function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}



function MM_preloadImages() { //v3.0

  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();

    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)

    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}

}



function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_nbGroup(event, grpName) { //v6.0

  var i,img,nbArr,args=MM_nbGroup.arguments;

  if (event == "init" && args.length > 2) {

    if ((img = MM_findObj(args[2])) != null && !img.MM_init) {

      img.MM_init = true; img.MM_up = args[3]; img.MM_dn = img.src;

      if ((nbArr = document[grpName]) == null) nbArr = document[grpName] = new Array();

      nbArr[nbArr.length] = img;

      for (i=4; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {

        if (!img.MM_up) img.MM_up = img.src;

        img.src = img.MM_dn = args[i+1];

        nbArr[nbArr.length] = img;

    } }

  } else if (event == "over") {

    document.MM_nbOver = nbArr = new Array();

    for (i=1; i < args.length-1; i+=3) if ((img = MM_findObj(args[i])) != null) {

      if (!img.MM_up) img.MM_up = img.src;

      img.src = (img.MM_dn && args[i+2]) ? args[i+2] : ((args[i+1])? args[i+1] : img.MM_up);

      nbArr[nbArr.length] = img;

    }

  } else if (event == "out" ) {

    for (i=0; i < document.MM_nbOver.length; i++) {

      img = document.MM_nbOver[i]; img.src = (img.MM_dn) ? img.MM_dn : img.MM_up; }

  } else if (event == "down") {

    nbArr = document[grpName];

    if (nbArr)

      for (i=0; i < nbArr.length; i++) { img=nbArr[i]; img.src = img.MM_up; img.MM_dn = 0; }

    document[grpName] = nbArr = new Array();

    for (i=2; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {

      if (!img.MM_up) img.MM_up = img.src;

      img.src = img.MM_dn = (args[i+1])? args[i+1] : img.MM_up;

      nbArr[nbArr.length] = img;

  } }

}



function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}



function MM_openBrWindow(theURL,winName,features) { //v2.0

  window.open(theURL,winName,features);

}



function checkAll(theElement) {



  var theForm = theElement.form;

  for(i=0; i<theForm.length;i++){

    if(theForm[i].type == 'checkbox' && theForm[i].name != 'checkall'){

      theForm[i].checked = theElement.checked;

    }

  }

}



function mailValidation(email) {

  if (!email.match(/.+\@.+\.+/)) {

    alert('メールアドレスを確認してください');

    return false;

  } else {

    return true;

  }

}



/*function openJoinPage(goodsId)
{
    openNewWindow(join_url + "?goods_id=" + goodsId + "&username="+userName,'join',"toolbar=yes,scrollbars=yes,location=yes,menubar=yes,resizable=yes");
}

function openD2Pshooter(packageID)
{
    openNewWindow(d2p_url + "shooter?package_id=" + packageID,"d2p","toolbar=yes,scrollbars=yes,location=yes,menubar=yes,resizable=yes");
}*/

function openJoinPage(goodsId)
{
    var joinPage_url = join_url + "?goods_id=" + goodsId + "&username="+userName;
    //alert(joinPage_url);
    openNewWindow(joinPage_url,'join',"toolbar=yes,scrollbars=yes,location=yes,menubar=yes,resizable=yes");
}

//RM 1435
function openD2PPurchase(packageID, source_page, NetiFL) {
  /** 
   *  sp list: 1 -> regular
   *  23 -> preview page
   *  66 freechat preview player
  */
  const whitelist = [1, 23, 66]; // Define the acceptable values for source_page
  var sp = 1; //guest area preview 
  // Check if source_page is in the whitelist
  if (whitelist.includes(parseInt(source_page, 10))) {
    sp = parseInt(source_page, 10);
  }

  var ga_val = getCookie('_ga');
  //alert('ga val:'+ga_val);
  if(ga_val){
      var ga_len = ga_val.length;
      var ga_cid = ga_val.substr(6,ga_len);
  }

  // RM6450 added s2s_id to shooter_url below also.
  var s2s_id = getCookie('s2s_id');

  //alert('ga cid:'+ga_cid);
  var ga_tid = 'UA-41327480-1'; //PROD TID
  var dh = 'dxlive.com';

  var shooter_url = d2p_url + "/shooter?package_id=" + packageID + 
                    "&from_site_id=20000607&source_page=" + sp + 
                    "&do_confirm=1&s2s_id=" + s2s_id;
  if (NetiFL) {
    shooter_url += "&netiFl=1";
  }
  // RM 3169 PC - AFF Cookie Promo code
  var aff_promo_code =  $.cookie("affPromoCode");
  if (aff_promo_code) {
    shooter_url = shooter_url + "&affi_promo="+aff_promo_code;
  }
  
  shooter_url = shooter_url + "&ga_tid="+ga_tid+"&ga_cid="+ga_cid+"&dh="+dh;
  shooter_url = shooter_url + "&gtm=" + gtmID;
  console.log(shooter_url);
  openNewWindow(shooter_url,"d2p","toolbar=yes,scrollbars=yes,location=yes,menubar=yes,resizable=yes");
}


 

function openD2Pshooter(packageID, NetiFl, oneClick, legacyOpenD2PshooterFlag) {
  /*
   * RM5889
   * bypassing all the code for _injectPromotionMessage,
   * calling directly original openD2Pshooter
   */
  if(legacyOpenD2PshooterFlag) {
    console.log('legacyOpenD2PshooterFlag:', legacyOpenD2PshooterFlag);
    legacyOpenD2Pshooter(packageID, NetiFl, oneClick)
    return true
  }

  /*
   * RM5889
   * [ ] define if conditions
   *  - if promotion function is already exposed in global scope
   *    since it is loaded asynchronous
   *  - promotion cookie == false ('1' means it is already shown)
   *  - flash warning : do this only when flash warning is NOT needed
   *  - guest userType == '' : this from 608 - 626 in common.js
   *  - has ever logged in == false : RM8935 gaCusDim is not 'member/performer' if you've ever logged in
   */
  if( window._injectPromotionMessage
      && getCookie('display_guestpromo_message_oct2017') == '1'
      && detectFlashPlayer() == 'FlashEnabled'
      && userType == ''
      && getCookie('gaCusDim') != '1'
      && (getCookie('gaCusDim') != 'member' && getCookie('gaCusDim') != 'performer')
    ) {
    console.log('_injectPromotionMessage');
    _injectPromotionMessage()
  } else {
    console.log('legacyOpenD2Pshooter');
    legacyOpenD2Pshooter(packageID, NetiFl, oneClick)
  }
  function legacyOpenD2Pshooter(packageID, NetiFl, oneClick) {
    // this is old original openD2Pshooter
    // once injectPotmotionMessage no longer needed,
    // remove everything else but the contents of this function
    // then good old original openD2Pshooter will be restored


    // I do not know what to do with this if block
    /*if(packageID == '20005467' || packageID == '20005427' || packageID == '20005517'){
        var answer = confirm("$50プランは ポイント増量 対象外です。\n このまま$50プランを購入しますか？");
    } else {
      var answer = 'true';
    } */
    var answer = 'true';
    if(answer){

    var sp = 1;
    if(oneClick)
      sp = 24;
    //alert('neti is '+NetiFl+', sp is '+sp);
    var ga_val = getCookie('_ga');
      //alert('ga val:'+ga_val);
    if(ga_val){
        var ga_len = ga_val.length;
        var ga_cid = ga_val.substr(6,ga_len);
    }

    // RM6450 added s2s_id to shooter_url below also.
    var s2s_id = getCookie('s2s_id');

    //alert('ga cid:'+ga_cid);
    var ga_tid = 'UA-41327480-1'; //PROD TID
    var dh = 'dxlive.com';
    //var d2p_url = 'https://secure.d2pass.com';
    if(NetiFl){
      var shooter_url = d2p_url + "/shooter?package_id=" + packageID+"&from_site_id=20000607&source_page="+sp+"&do_confirm=1&netiFl=1&s2s_id="+s2s_id;
    } else {
      var shooter_url = d2p_url + "/shooter?package_id=" + packageID+"&from_site_id=20000607&source_page="+sp+"&do_confirm=1&s2s_id="+s2s_id;
    }

      // RM 3169 PC - AFF Cookie Promo code
    var aff_promo_code =  $.cookie("affPromoCode");
    if (aff_promo_code) {
        shooter_url = shooter_url + "&affi_promo="+aff_promo_code;
        // RM 5780
        //deleteCookie("affPromoCode");
    }

      //&ga_tid="+ga_tid+"&ga_cid="+ga_cid+"&dh="+dh;
    //alert('ip is '+client_ip);
    //38.98.23.154, '10.50.11.216'
      //To filter out office IP & QA robots for GA
  var blockedIP = new Array(
        '38.98.23.154',
        '61.213.159.4',
        '61.213.159.5',
        '61.213.159.6',
        '61.213.159.7',
        '61.213.159.8',
        '61.14.184.155'
    );
    var bFlag = true;
    for(var i=0; i<blockedIP.length; i++)
    {
        if( client_ip == blockedIP[i])
            bFlag = false;
    }
    if( bFlag)
    shooter_url = shooter_url + "&ga_tid="+ga_tid+"&ga_cid="+ga_cid+"&dh="+dh;
    console.log(shooter_url);
    openNewWindow(shooter_url,"d2p","toolbar=yes,scrollbars=yes,location=yes,menubar=yes,resizable=yes");
  }
   // RM5889
  window._trackGuestRetension ? window._trackGuestRetension() : null
  }

}

/* RM13347  PC & Mob VW: crypto shooter in common.js
    Crypto shooter links;
    STG: https://crypto.d2pass.com.stg.d2p/purchase/%package_id%
    PRD: https://crypto.d2pass.com/purchase/%package_id%
*/
function openCryptoShooter(packageID)
{
    if (!packageID) {
      console.log('openCryptoShooter : no packageID');
      return false;
    }

    if (location.hostname.match(/dxlive.com/)) {
      var shooter_url = "https://crypto.d2pass.com/purchase/" + packageID; // prod
    } else {
      var shooter_url = "https://crypto.d2pass.com.stg.d2p/purchase/" + packageID; // stg
    }

    console.log(shooter_url);
    openNewWindow(shooter_url,"d2pCrypto","toolbar=yes,scrollbars=yes,location=yes,menubar=yes,resizable=yes");
}


function joinEvent()

{

        //document.event_form.goods_id.value= goodsId;

    if (userName!='') {

      document.event_form.Name.value= userName;

    }

    document.event_form.submit();

    return false;

}



function onoff(perf) {

    var busy = performers.busy;

    var free = performers.free;

    //alert(performers);



     if (busy.indexOf(perf) != -1){

        document.writeln('<div class="recentWidth onlineBG"><div class="statusBar"><img src="/img/icons/chat.gif"></div>');

    //} else if (girls.perf && girls.perf.session == 110){

    } else if (free.indexOf(perf) != -1){

        document.writeln('<div class="recentWidth sessionBG"><div class="statusBar"><img src="/img/icons/session.gif"></div>');

        return true;

    } else {

        document.writeln('<div class="recentWidth offlineBG"><div class="statusBar"><img src="/img/icons/offline.gif"></div>');

    }



    return false;

}



function getQueryVariable(variable) {

  var query = window.location.search.substring(1);

  var vars = query.split("&");

  for (var i=0;i<vars.length;i++) {

    var pair = vars[i].split("=");

    if (pair[0] == variable) {

      return pair[1];

    }

  }

  return '';

}





function liveviewer() {

      livew = window.open('/livesession.html', 'livesession', 'resizable=no,toolbar=no,scrollbars=no,personalbar=no,menubar=no,location=no,status=no,width=568,height=273,top=0,left=0');

    //w.focus();

}



function closeLiveviewer(){

  //Doing this so we dont get javascript error when checking for livew.

  if(livew){

    livew.close();

  }

}





function showD2PToolbar() {



    netia = getCookie('NetiA');

    ml = '';



    if(netia)

    {

        cForm = netia.split(":");

        check = /.+@.+\..+/;



        if (cForm[0].match(check))

        {

            d2ptoolbar_url = "/d2ptb";

        }

        else

        {

            d2ptoolbar_url = "http://images.d2pass.com/images/toolbar/utf/black.html";

        }



        document.write('<center><div class="d2_toolbar"><TABLE cellSpacing=0 cellPadding=0 width="100%" border=0 ><TBODY><TR><TD height=23>');

        document.write('<IFRAME src="' + d2ptoolbar_url );

        document.write('" frameBorder=0 width="100%" scrolling=no height=23></IFRAME></TD></TR></TBODY></TABLE></div></center>');



    }



}



var CCGURL = "http://www.caribbeancomgirl.com";

var EXURL = "http://www.kanjukulive.com";



function openProfileCCG(uname) {

  openNewWindow(CCGURL+'/profile/'+uname+'?fromSite=1000048', 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=1,personalbar=no,menubar=no,width=910,height=540');

}



function openProfileCCGMember(uname) {

  openNewWindow(CCGURL+'/profile/'+uname+'?action=login&fromSite=1000048', 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=1,personalbar=no,menubar=no,width=910,height=540');

}





function openViewerVchatCCG(uid, stype) {

  openNewWindow('/redirect/ccgChat/'+uid+'/'+stype, 'Chat'+uid, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=820,height=640');

}



function openViewerVchatCCGSame(uid, stype) {

  window.close();

  openNewWindow('/redirect/ccgChat/'+uid+'/'+stype+'/1', 'Chat'+uid, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=820,height=640');

}



function openSendMailCCG(uname){

  openNewWindow(CCGURL+'/mailbox/compose/?to='+uname, 'compose'+uname,'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=910,height=540');

}



function openPreviewEX(uname) {

  openNewWindow(EXURL+'/preview/'+uname+'.html?fromSite=1000048', 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=1,personalbar=no,menubar=no,width=740,height=760');

}



//Profile doesnt have fromSite... use preview for EX

function openProfileEX(uname) {

  openNewWindow(EXURL+'/profile/'+uname+'.html?fromSite=1000048', 'profile'+uname, 'resizable=yes,toolbar=no,scrollbars=1,personalbar=no,menubar=no,width=775,height=700');

}





function openPreviewEXMember(uname) {

  openNewWindow(EXURL+'/preview/'+uname+'.html?fromSite=1000048&fo=WlBsYn362L5a2l5s2k36JjV9GL5TW9x6I6fKIngjGkm', 'preview'+uname, 'resizable=yes,toolbar=no,scrollbars=1,personalbar=no,menubar=no,width=740,height=760');

}



function openProfileEXMember(uname) {

  openNewWindow(EXURL+'/profile/'+uname+'.html?fromSite=1000048&fo=WlBsYn362L5a2l5s2k36JjV9GL5TW9x6I6fKIngjGkm', 'profile'+uname, 'resizable=yes,toolbar=no,scrollbars=1,personalbar=no,menubar=no,width=775,height=700');

}





function openViewerVchatEX(uid, stype) {

  openNewWindow(EXURL+'/app/member/chat.php?uid='+uid+'&stype='+stype+'&fromsite=1000048', 'Chat'+uid, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=820,height=640');

}



function openViewerHDVchatEX(uid, stype) {

  openNewWindow(EXURL+'/app/member/chat.php?hd=1&uid='+uid+'&stype='+stype+'&fromSite=1000048', 'Chat'+uid, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=820,height=640');

}



function openViewerVchatEXSame(uid, stype) {

  window.close();

  openNewWindow('/redirect/exChat/'+uid+'/'+stype+'/1', 'Chat'+uid, 'resizable=yes,toolbar=no,scrollbars=no,personalbar=no,menubar=no,width=820,height=640');

}



function resizeChatWindow2(size){
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if(size == 'small'){
    window.resizeTo(780,387);
  } else if(size == 'medium'){
    if(is_chrome)
        window.resizeTo(941,661); //941*553
    else
        window.resizeTo(941,661); //941*553

  } else if(size == 'full'){
    window.moveTo(0,0);
    window.resizeTo(screen.width, screen.height);
  }
}

function resizeChatWindow(size, en){
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if(size == 'small'){
    window.resizeTo(780,387);
  } else if(size == 'medium'){
    if(is_chrome){
        window.resizeTo(941,661); //941*553
    }else{
        if(en == 1){
           window.resizeTo(940,661);
        }else{
           window.resizeTo(941,661);
        }
    }
  } else if(size == 'full'){
    window.moveTo(0,0);
    window.resizeTo(screen.width, screen.height);
  }
}


function openCompliance() {

    openNewWindow("/cert.html", 'compliance', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');

}

function openFaq(errorCode){
   if(errorCode == '1044' || errorCode == '1045'){
      openNewWindow("/faq04.html#q6_answer", 'BanKick', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
   }else{
      openNewWindow("/faq04.html#", 'BanKick', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
   }
}

function noDisplay(flag)
{
	var hours = 24;
	var domain = ".dxlive.com";
    var cookies = document.cookie;
	var cname = "noDisplay";
	//alert( "all cookies: " + document.cookie);

	if( flag) { cname = "noDisplay2"; hours = 2160; } //90 days

    var find = cookies.indexOf("vauth=");

    if( find != -1)
    {
		//alert( "finding...");

        var start = find + 6;

        var end  = cookies.indexOf(";", start);

        if( end == -1) end = cookies.length;

        var value = cookies.substring( start, end);

        value = unescape(value);

        //alert("Value is " + value);
		//Get username:userid:usertype

		var vals = value.split(':');

		var uname = vals[0];

		var uid = vals[1];

		var utype = vals[2];

		//alert("name=" + uname + " id=" + uid + " type=" + utype);
		//Set nodisplay cookie
		document.cookie = cname + "=un:" + escape(uname) + "&uid:" + escape(uid) + "&ut:" + escape(utype) + "; expires=" + new Date((new Date()).getTime() + hours*3600000) + "; path=" + "/" + "; domain=" + escape(domain);

		//"; secure=" + false;
		return true;
    }
    else
    {
        //alert("No cookie!");
		return false;
    }
}

function openInquiry(errorCode) {
    if (isUser() || isVIP()) {
        openNewWindow("https://service.d2pass.com/dxmember/inquiry/?error_num="+errorCode, 'inquiry', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
    } else {
        openNewWindow("https://service.d2pass.com/dxperformer/inquiry/?error_num="+errorCode, 'inquiry', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
    }
}

function openIdSysHelp() {
  if (is910Performer()) {
        openNewWindow("/PF/event/sp/idcheck/index_910.html", 'sysHelp', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
    } else {
        openNewWindow("/PF/event/sp/idcheck/index_reg.html", 'sysHelp', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
    }
}

function openFavorite() {
   openNewWindow('/member/favorite', 'favorite', 'resizable=yes,toolbar=no,scrollbars=yes,personalbar=no,menubar=no');
}

function get200pfBonus() {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/member/promo/200pfs";
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        res = xmlhttp.responseText;
        alert(res);
        window.location.reload(true);
      }
    }

    xmlhttp.send(null);
}

function openFreechat(performer, fromSite) {
  if(fromSite){
    var chatw = window.open(jp_url + '/chat/free/'+performer+'/'+fromSite, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
  } else {
    var chatw = window.open(jp_url + '/chat/free/'+performer, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
  }
  chatw.focus();
}

function openViewersChatPlus(performer, stype) {
        if(stype != 115 && stype != 120){
          var chatmode = getCookie('vm');
          if (chatmode=='ROM') {
            stype = 120;
          } else if(chatmode=='PUBLIC'){
            stype = 115;
          }
        }

    var hasFlash = detectFlashPlayer();
    var chatDomain = jp_url;
    if (hasFlash == 'FlashEnabled') {
        chatDomain = ssl_url+'/chat/';
    } else {
        var usingIpad = detectIpad();
        if(usingIpad) {
            chatDomain = 'http://m.dxlive.com/chat/';
        } else {
            chatDomain = jp_url+'/chat/';
        }
    }

        setCookie('paidrequest','1','','/','dxlive.com');
        var chatw = window.open(chatDomain+performer+'/'+stype, performer, 'resizable=yes,status=no,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
        chatw.focus();
}

function time_out_link(user_type){
        if(user_type == 208){
          var joinw = window.open('/join.html', 'join208', 'resizable=yes,status=no,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
        } else {
			previewFlashGuest();
//          var joinw = window.open('https://secure.d2pass.com/shooter?package_id=20010997&from_site_id=20000607', 'join', 'resizable=yes,status=no,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
          var joinw = window.open('http://www.dxlive.com/promo/FREE/newfreejoin/index.html', 'join', 'resizable=yes,status=no,toolbar=no,scrollbars=yes,personalbar=no,menubar=no,width=1010,height=700');
        }
        joinw.focus();
//20010997
}

function openFlashPlayerURL() {
  openNewWindow("http://get.adobe.com/jp/flashplayer/", 'AdobeFlashPlayer', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
  window.close();
}

function setCommentStatus(user_comment_id, new_status) {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/performer/setCommentStatus/"+user_comment_id+"/"+new_status;
    xmlhttp.open('POST', url, true);
    xmlhttp.onreadystatechange = function()
    {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
        res = xmlhttp.responseText;
      }
    }
    xmlhttp.send(null);
//    window.location.reload();
}

function openTrial(){
  window.open('http://trial.dxlive.com/trialForm','JoinPage','width=1200,height=800,location=yes,resizable=yes,scrollbars=yes,status=yes,menubar=yes,toolbar=yes');
}

function openDxStudio() {
        openNewWindow("/dxstudio/", 'DXSTUDIO', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function openVideo(){
    var random_number = Math.random();
    window.location = "/video/?t="+random_number;
}

function openHanamaru(){
    var random_number = Math.random();
    window.location = "/hanamaru?t="+random_number;
}

function openRecommended(){
    var random_number = Math.random();
    window.location = "/recommended?t="+random_number;
}



function openRecordingAgreement() {
    openNewWindow("/dxstudio/contract", 'RecCompliance', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function openGiftPage(performername) {
    //openNewWindow("/member/present/present_rule.html?giftsendto="+performername, 'giftpage', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
    openNewWindow("/gift?giftsendto="+performername, 'giftpage', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function openGiftPageFrmChat(performername) { //RM#5292 remotetoy popup
    openNewWindow("/gift/6903?giftsendto="+performername, 'giftpage', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function openAppointment(pfname){
    //window.open("/appointment/"+pfname);
    window.open("/member/appointment_vw.html?toName="+pfname);
}

/************************************************************/
//oneClick functions
/* oc_ = one click = one click purchase related*/

try {
    if(typeof window.jQuery === 'undefined'){//checking if jQuery is present, and sending ga event to see where it might happen
      throw 'error:no jQuery';
    } else if(typeof window.siteId !== 'undefined' && window.siteId > 20000000 && window.isUser) {//siteId > 20000000 = D2P

      oc_checkOneClickUI();
    }
} catch (e) {
    setTimeout(function(){//wait for ga to be defined
        if(typeof window.ga !== 'undefined'){
            /*ga('send', {
              'hitType': 'event',
              'eventCategory': 'error',
              'eventAction': 'oneClickPurchase',
              'eventLabel': 'no jQuery at:' + location.href,
              'nonInteraction': true
            });*/
        }
    },1000);//1000ms should be enough?
}

function oc_checkOneClickUI(){
  if(document.getElementById('gl_acct_oc')){//checking if gl_acct_oc already in place,,,and if not, wait, and repeat it..
   // console.log('gl_acct_oc');
    clearTimeout(window.__oneClickUICheck);
    oc_initOneClickUI();
  } else {
   // console.log('else');
    window.__oneClickUICheck = window.setTimeout(window.oc_checkOneClickUI, 100);
  }
}
function oc_initOneClickUI(){//here comes actual code
    /*each panel containing UI, loading, success, and error*/
    window.$gl_acct_oc_panelUI = $('#gl_acct_oc_panelUI');
    window.$gl_acct_oc_panelLoading = $('#gl_acct_oc_panelLoading');
    window.$gl_acct_oc_panelSuccess = $('#gl_acct_oc_panelSuccess');
    window.$gl_acct_oc_panelError = $('#gl_acct_oc_panelError');

    /*ok button*/
    window.$gl_acct_oc_ok = $('.gl_acct_oc_ok');
    window.$gl_acct_oc_ok.on('click',function(){
      oc_resetUI();
    });
    /* option purchase btn related */
    window.$gl_acc_ocOptions = $('#gl_acc_ocOptions');
    window.$gl_acc_ocOptions.on('change',function(){
      if(window.$gl_acc_ocOptions[0].selectedIndex === 0 ){
        oc_hidePurchaseBtn();
      } else {
        oc_showPurchaseBtn();
      }

    });
    window.$gl_acc_ocOptionsHolder = $('#gl_acc_ocOptionsHolder');
    window.$gl_acc_ocPurchaseBtnHolder = $('#gl_acc_ocPurchaseBtnHolder');

    window.$gl_acc_ocPurchaseBtn = $('#gl_acc_ocPurchaseBtn');
    window.$gl_acc_ocPurchaseBtn.on('click',function(){
      //console.log(window.$gl_acc_ocOptions.val());//value of selected option
      //console.log(window.$gl_acc_ocOptions.find(':selected').data('packageId'));//value of selected option

      if(window.$gl_acc_ocChkBox.is(':checked')){//one click purchase on
          //alert('on click is on, value is '+window.$gl_acc_ocOptions.val()+', this is where it should call api...but for now calling design dev function to show concept');
          //oc_testing();
          oneClickPurchase(window.$gl_acc_ocOptions.val());
          //adding purchased point and USD beforehead
          document.getElementById('gl_acct_oc_purchasedPT').innerHTML = window.$gl_acc_ocOptions.val();
          document.getElementById('gl_acct_oc_purchasedUSD').innerHTML =  window.$gl_acc_ocOptions.find(':selected').data('usd');
      } else {//normal purchase
          //alert('on click is off, value is '+window.$gl_acc_ocOptions.find(':selected').data('packageId')+', calling normal openD2Pshooter');
          openD2Pshooter(window.$gl_acc_ocOptions.find(':selected').data('packageId'),'',1);
      }

    });

    /*checkbox related*/
    window.$gl_acc_ocChkBoxCover = $('#gl_acc_ocChkBoxCover');//check box button, covering actual check box
    window.$gl_acc_ocChkBox = $('#gl_acc_ocChkBox');//check box

    window.$gl_acc_ocChkBoxCover.on('mouseenter',function(){
      //console.log(this);
      $(this).parent('.gl_acc_ocChk').css('background-color','#ffff66');
    });
    window.$gl_acc_ocChkBoxCover.on('mouseout',function(){
      $(this).parent('.gl_acc_ocChk').attr('style','');
    });
    window.$gl_acc_ocChkBoxCover.on('click',function(){
        oc_toggleCheckbox();
    });
    /*help text related*/
	/*
    window.$gl_acc_ocChkHelp = $('#gl_acc_ocChkHelp');//help (?) icon
    window.$gl_acc_ocChkTxt = $('#gl_acc_ocChkTxt');//help contents

    window._gl_acc_ocChkHelpAnimationLock = false;
    window.$gl_acc_ocChkHelp.on('mouseenter',function(){//hover and show help text
        //console.log('mouseenter');
        clearTimeout(window.__gl_acc_helpTimeout);
        if(window._gl_acc_ocChkHelpAnimationLock === false && window.$gl_acc_ocChkHelp.hasClass('on')===false){
            window._gl_acc_ocChkHelpAnimationLock = true;
            window.$gl_acc_ocChkTxt.css({
              width:'21px',
              height:'16px',
              overflow:'hidden',
              opacity:0
            })
            .animate({
              width:164,
              height:134,
              opacity:1
            },400,function(){
              window.$gl_acc_ocChkHelp.addClass('on');
              window._gl_acc_ocChkHelpAnimationLock = false;
            });
        }
        //window.$gl_acc_ocChkHelp.addClass('on');

    });
    window.$gl_acc_ocChkHelp.on('click',function(){//click and hide help text
      if(window._gl_acc_ocChkHelpAnimationLock === false && window.$gl_acc_ocChkHelp.hasClass('on')){
        oc_hideHelpText();
      }
    });

    window.$gl_acc_ocChkTxt.on('mouseenter',function(){
      clearTimeout(window.__gl_acc_helpTimeout);
    });
    window.$gl_acc_ocChkTxt.children('p').children('a').on('mouseenter',function(){
      clearTimeout(window.__gl_acc_helpTimeout);
    });
    window.$gl_acc_ocChkTxt.on('mouseout',function(){

      if(window._gl_acc_ocChkHelpAnimationLock === false && window.$gl_acc_ocChkHelp.hasClass('on')){
        window.__gl_acc_helpTimeout = setTimeout(oc_hideHelpText,800);
      }
    });
    window.$gl_acc_ocChkHelp.on('mouseout',function(){

      if( window._gl_acc_ocChkHelpAnimationLock === false && window.$gl_acc_ocChkHelp.hasClass('on') &&  window.$gl_acc_ocChkTxt.is(":hover") === false ){
          window.__gl_acc_helpTimeout = setTimeout(oc_hideHelpText,800);
      }

    });
	*/
    /*window.$gl_acc_ocChkHelp.on('mouseout',function(){

      if(window._gl_acc_ocChkHelpAnimationLock === false && window.$gl_acc_ocChkHelp.hasClass('on')){
        setTimeout(oc_hideHelpText,500);
      }
    });*/

    /*local(?) functions*/
    function oc_hidePurchaseBtn() {
      window.$gl_acc_ocOptionsHolder.animate({'padding-top':6},300);
      window.$gl_acc_ocPurchaseBtnHolder.animate({'height':0},300);
    }
    function oc_showPurchaseBtn() {
      window.$gl_acc_ocOptionsHolder.animate({'padding-top':0},300);
      window.$gl_acc_ocPurchaseBtnHolder.animate({'height':22},300);
    }
    function oc_toggleCheckbox() {
     if(window.$gl_acc_ocChkBox.is(':checked')) {//on
        window.$gl_acc_ocChkBoxCover.parent('div').removeClass('on');
        window.$gl_acc_ocChkBox.prop('checked', false);
        //alert('dev:checkbox un-checked');
        setOneclick();
     } else {//off
        window.$gl_acc_ocChkBoxCover.parent('div').addClass('on');
        window.$gl_acc_ocChkBox.prop('checked', true);
        //alert('dev:checkbox checked');
        setOneclick('4803');
     }
    }
	/*
    function oc_hideHelpText(){

            window._gl_acc_ocChkHelpAnimationLock = true;
            window.$gl_acc_ocChkTxt.animate({
              width:21,
              height:16,
              opacity:0
            },400,function(){
              window.$gl_acc_ocChkHelp.removeClass('on');
              window._gl_acc_ocChkHelpAnimationLock = false;
            });

    }
	*/
    function oc_resetOption() {
      window.$gl_acc_ocOptions.prop('selectedIndex',0);
    }
    function oc_showSuccess(){
      $('.gl_acct_ocPanel').removeClass('on');
      window.$gl_acct_oc_panelSuccess.addClass('on');
      //alert('success function might need to receive ammount purchased?:'+window.$gl_acc_ocOptions.val());
      //alert('balance is '+parseFloat(document.getElementById('balance').innerHTML));
      document.getElementById('balance').innerHTML = parseFloat(document.getElementById('balance').innerHTML) + parseFloat(window.$gl_acc_ocOptions.val());
      var nBalance = parseFloat(document.getElementById('balance').innerHTML);
      document.getElementById('balance').innerHTML = nBalance.toFixed(2);
    }
    function oc_showLoading (){
      $('.gl_acct_ocPanel').removeClass('on');
      window.$gl_acct_oc_panelLoading.addClass('on');
    }
    function oc_showError(){
      $('.gl_acct_ocPanel').removeClass('on');
      window.$gl_acct_oc_panelError.addClass('on');
    }
    function oc_resetUI(){
      $('.gl_acct_ocPanel').removeClass('on');
      oc_resetOption();
      oc_hidePurchaseBtn();
      window.$gl_acct_oc_panelUI.addClass('on');

    }
    function oc_testing() {
        oc_showLoading();
        setTimeout(function(){
          if(Math.floor(Math.random() * 1) + 1 === 1) {
            oc_showSuccess();
          } else {
            oc_showError();
          }
        },5000);
    }
    function oneClickPurchase(points)
    {
        //alert('points are '+points);
        oc_showLoading();
        var xmlhttp = getXmlhttp();
        var url = "/member/oneClick/"+points+"/"+Math.random();
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                res = xmlhttp.responseText;
                //alert('accept res is '+res);
                if (res=='success')
                {
                    oc_showSuccess();
                }
                else
                {
                    oc_showError();
                }
            }
        }
        xmlhttp.send(null);
    }
    function setOneclick(mode)
    {
        //alert('setOneclick mode:'+mode);
        var xmlhttp = getXmlhttp();
        var url = "";
        url = "/member/setOneclick/" + mode;
        xmlhttp.open('POST', url, true);
        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                res = xmlhttp.responseText;
                //alert('setOneClick:'+res);
            }
        }
        xmlhttp.send(null);
        //setCookie('mp',mode);
        //setTimeout("xmlHttpGet('/member/account', 'status');",1500);
    }
};

//End oneClick functions
/************************************************************/

function isMobileDevice()
{
  return( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function mobileToWebRedirect()
{
  if(!isMobileDevice())
    return;

  var PreferredSite = 'pc';
  var from = getQueryVariable('from');
  var pathname = window.location.pathname;
  var urlMobile = 'http://m.dxlive.com';
  var cookieName = 'DX2MobilePreferredSite';
  var domain = ".dxlive.com";
  if(pathname == 'home')
      pathname = '';

  var regex = /chat/g;
  if(regex.test(pathname)){
    var url_search = window.location.search;
    var url = urlMobile+pathname+url_search;
  } else {
    var url = urlMobile+pathname;
  }

  var d = new Date();
  var exdays = 7;
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();

  if(from == 'mobile'){
    document.cookie=cookieName+"="+PreferredSite  + "; " + expires + "; " + domain;
  }
  else{
    var PreferredSiteCurrent = getCookie(cookieName);

    if(!PreferredSiteCurrent){
        //var r = confirm("スマホ版を表示しますか？");

        //if(r == true)
          PreferredSite = "mobile";
        //else
          //PreferredSite = "pc";

      document.cookie=cookieName+"="+PreferredSite + "; " +expires + "; " + domain;

      //if(r == true)
        window.location = url;

    }
    else if(PreferredSiteCurrent == 'mobile'){
          window.location = url;
    }
  }
}


//=====================Heydouga flash=====================//

function openProfileHeydouga(uname) {
  openNewWindow('http://www.heydouga.com/profile.html?'+uname, 'preview'+uname, 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function openProfileBySite(uname,fromSite) {
   if(fromSite == "20002057")
      openNewWindow('http://www.heydouga.com/profile.html?'+uname, 'preview'+uname, 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
   else
      window.open('/preview/'+uname, '_blank');
}

function openComplianceBySite(fromSite) {
   if(fromSite == "20002057")
      openNewWindow('http://www.heydouga.com/2257.html', 'compliance', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
   else
      openNewWindow("/cert.html", 'compliance', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function openJoinBySite(fromSite) {
  if(fromSite == "20002057")
     openNewWindow('http://www.heydouga.com/chatpoint-card.html', 'JoinPage', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
  else
     openNewWindow('/join.html', 'JoinPage', 'toolbar=1,location=1,status=1,scrollbars=1,menubar=1,resizable=1');
}

function closeWindowBySite(sec, fromSite) {
  if (sec == '' || sec == null)
        sec = 0.1;

		window.setTimeout('window.close()',sec*100);
}






/*
 * new layout related functions
 * 04/25/2016 designer
 *
 */

if (!window.console || void 0 === window.console) window.console = {};
if (!window.console.log || void 0 === window.console.log) window.console.log = function () {};

/*
 * polyfil for bind method: only for IE8 or lower. we might not need it, but does not hurt...
 */
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
    // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}



/*
 * original xmlHttpGet did not have callback. Instead, it inserted responce into DOM as innerHTML
 * which is robust and sure way, but there is a case we want to do something after DOM was insterted and rendered.
 *
 */
//window.__xmlHttpGetCallbackCount = 1;
function xmlHttpGetCallback(strURL, callback) {
  //console.log(strURL, callback);
 // console.log(window.__xmlHttpGetCallbackCount);

  //console.log(callback);
  if(typeof callback === 'undefined' || (typeof callback ==='string' && typeof document.getElementById(callback) === 'undefined')  ){
    callback = function (data){
      console.log(data);
    };
  } else if (typeof callback ==='string' && typeof document.getElementById(callback) !== 'undefined'){
    callback = function (data) {
      document.getElementById(callback).innerHTML = data;
    }
  }
    var xmlhttp = false;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //Mozilla/Safari/IE7/Chrome/Opera
    } else if (window.ActiveXObject) { //IE6/IE5
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if (!xmlhttp) return;
    strURL += (strURL.indexOf('?') > 0 ? '&t=' : '?t=') + Math.random();
    xmlhttp.open('GET', strURL, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          //console.log(window.__xmlHttpGetCallbackCount);
          //console.log(xmlhttp.responseText);
         // window.__xmlHttpGetCallbackCount++;
          callback(xmlhttp.responseText);
        }
    }
    xmlhttp.send(null);
    return;
}

/*
 * mainly for iframe insersion
 * so that we can insert iframe AFTER onload eventm hence not blocking page
 *
 */
function insertHTML(string,trgtID){//simplest way for now
    if(document.getElementById(trgtID) !== null) {
        document.getElementById(trgtID).innerHTML = string;
        return true;
    } else {
        return false;
    }
};



/*
 * new layout one click purchase
 *
 */
function oneClickPurchaseUIInit () {

    //console.log('oneClickPurchaseUIInit');
    //console.log(this);
    var $oc_purchaseBtn = $('#app-nl-ocp-purchaseBtn')
        ,$oc_on = $('#app-ocpOn')
        ,$oc_off = $('#app-ocpOff')
        ,$oc_loading = $('#app-ocp-res-loading')
        ,$oc_success = $('#app-ocp-res-success')
        ,$oc_error = $('#app-ocp-res-error')
        ,$oc_okBtns = $('.app-ocp-OK')
        ,$oc_options = $('#app-nl-ocp-options')
        ,$oc_responses = $('#app-nl-ocp-responses')
        ;


    $oc_options.on('change',oc_updatePurchaseBtn);
    $oc_purchaseBtn.on('click',oc_doOCP);
    $oc_on.on('click',oc_doOn);
    $oc_off.on('click',oc_doOff);
    $oc_okBtns.on('click',oc_resetUI);


    /*private methods*/
    function oc_doOn(){
        if(!$oc_on.hasClass('active')) {
            $oc_on.addClass('active');
            $oc_off.removeClass('active');
            oc_setOneClick('4803');
        }
    }
    function oc_doOff(){
        if(!$oc_off.hasClass('active')) {
            $oc_off.addClass('active');
            $oc_on.removeClass('active');
            oc_setOneClick();
        }
    }
    function oc_updatePurchaseBtn() {
        //console.log('updatePurchaseBtn:');
        //console.log($options);
        if($oc_options[0].selectedIndex === 0 ){
            oc_hidePurchaseBtn();
          } else {
            oc_showPurchaseBtn();
        }

    }
    function oc_showPurchaseBtn() {
        //console.log(this);
         console.log();
        $oc_purchaseBtn.addClass('active');

        // RM13943 [GTM] set cross-domain tracking between DX and purchase form
        console.log('packageId = '+ $oc_options.find(':selected').data('packageId'));

        if ($oc_on.hasClass('active')){
          console.log("oneClick purchase");
          var purchaseLink = document.getElementById('app-nl-ocp-purchaseBtn');
          purchaseLink.setAttribute('href', "javascript:void(0);");

        } else {
          console.log("form purchase");
          var purchaseLink = document.getElementById('app-nl-ocp-purchaseBtn');
          var packageID = $oc_options.find(':selected').data('packageId');
          sp = 24;
          var ga_val = getCookie('_ga');
          if(ga_val){
              var ga_len = ga_val.length;
              var ga_cid = ga_val.substr(6,ga_len);
          }
          var s2s_id = getCookie('s2s_id');

          var ga_tid = 'UA-41327480-1';
          var dh = 'dxlive.com';
          var shooter_url = d2p_url + "/shooter?package_id=" + packageID+"&from_site_id=20000607&source_page="+sp+"&do_confirm=1&s2s_id="+s2s_id;

          var aff_promo_code =  $.cookie("affPromoCode");
          if (aff_promo_code) {
              shooter_url = shooter_url + "&affi_promo=" + aff_promo_code;
          }

          shooter_url = shooter_url + "&ga_tid=" + ga_tid + "&ga_cid=" + ga_cid + "&dh=" + dh;

          shooter_url = shooter_url + "&gtm=" + gtmID;

          console.log(purchaseLink);
          console.log(shooter_url);
          purchaseLink.setAttribute('href', shooter_url);
        }

    }
    function oc_hidePurchaseBtn() {
        console.log();
        $oc_purchaseBtn.removeClass('active');
    }
    function oc_doOCP() {
        if($(this).hasClass('active')) {

            if ($oc_on.hasClass('active')){

                document.getElementById('app-nl-ocp-messePt').innerHTML = $oc_options.val();
                document.getElementById('app-nl-ocp-messeUSD').innerHTML = $oc_options.find(':selected').data('usd');
                oc_oneClickPurchase($oc_options.val());

            } else {
                // RM13943 [GTM] set cross-domain tracking between DX and purchase form
                //openD2Pshooter($oc_options.find(':selected').data('packageId'),'',1);

            }

        }

    }
    function oc_showLoading(){
        $oc_responses.addClass('active');
        $oc_loading.addClass('active');


    }
    function oc_showSuccess(){
        $oc_loading.removeClass('active');
        $oc_success.addClass('active');
        document.getElementById('balance').innerHTML = parseFloat(document.getElementById('balance').innerHTML) + parseFloat($oc_options.val());
        var nBalance = parseFloat(document.getElementById('balance').innerHTML);
        document.getElementById('balance').innerHTML = nBalance.toFixed(2);

    }
    function oc_showError(){
        $oc_loading.removeClass('active');
        $oc_error.addClass('active');
    }
    function oc_resetUI(){
        console.log('oc_resetUI6');

        $oc_options.val('reset');

        $oc_loading.removeClass('active');
        $oc_success.removeClass('active');
        $oc_error.removeClass('active');

        $oc_purchaseBtn.removeClass('active');

    }
    function oc_oneClickPurchase(points) {
        //alert('points are '+points);
        oc_showLoading();
        var xmlhttp = getXmlhttp();
        var url = "/member/oneClick/"+points+"/"+Math.random();
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                res = xmlhttp.responseText;
                //alert('accept res is '+res);
                if (res=='success') {
                    oc_showSuccess();
                } else {
                    oc_showError();
                }
            }
        }
        xmlhttp.send(null);
    }
    function oc_setOneClick(mode){
        var xmlhttp = getXmlhttp();
        var url = "";
        url = "/member/setOneclick/" + mode;
        xmlhttp.open('POST', url, true);
        xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                res = xmlhttp.responseText;
                //alert('setOneClick:'+res);
            }
        }
        xmlhttp.send(null);
    }
}

function openURL(url) {
       window.open(url ,'PublicAnnounce','width=1200,height=800,location=yes,resizable=yes,scrollbars=yes,status=yes,menubar=yes,toolbar=yes');
}



function addFavoritePreview(uname,reload){//add favorite for preview, copied from common2.js
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/favorite/add/"+uname+"/"+Math.random();
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            res = xmlhttp.responseText;
            if (res=='success' || res=='208_success') {
              if(reload==1) {
                  //alert(uname+'ちゃんをお気に入りに追加しました','お気に入りに追加',function(){window.location.reload(true);});
                  alert(uname+'ちゃんをお気に入りに追加しました');
                  window.location.reload(true);
              } else {
                alert(uname+'ちゃんをお気に入りに追加しました','お気に入りに追加');
              }
            } else if (res=='208_limit_error') {
              alert('お気に入り登録数が上限に達しております。\nお気に入りリストを編集してから再度お試し下さい。\n通常会員様なら無制限でご登録頂けます。','お気に入りに追加');
            } else if (res=='limit_error') {
              alert('お気に入り登録数が上限に達しております。\nお気に入りリストを編集してから再度お試し下さい。','お気に入りに追加');
            } else if (res=='already') {
              alert(uname+'ちゃんはお気に入りに追加されています','お気に入りに追加');
            } else if (res=='208fail') {
              alert('こちらは正規会員様限定の\nサービスとなっております','お気に入りに追加');
            } else {
              alert('追加できませんでした','お気に入りに追加');
            }
        }
    }
    xmlhttp.send(null);
}

var addFavoriteHomeCount = 0;
var addFavoriteHomeSuccessCount = 0;
var alertShown = false;

function addFavoriteHome(uname,reload){//add favorite for preview, copied from common2.js
    addFavoriteHomeCount++;
    console.trace(); // shows call stack
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/favorite/add/"+uname+"/"+Math.random();
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            res = xmlhttp.responseText;
            if (res=='success' || res=='208_success') {
              addFavoriteHomeSuccessCount++;
              console.trace(); // shows call stack
              if(addFavoriteHomeSuccessCount >= addFavoriteHomeCount) {
                alert(addFavoriteHomeSuccessCount + '名をお気に入りに追加しました');
              }
              window.location.reload(true);
            } else if (res=='limit_error' || res=='208_limit_error') {
              if(addFavoriteHomeSuccessCount >= 1) {
                if (!alertShown) {
                  alertShown = true;
                  alert(addFavoriteHomeSuccessCount + '名をお気に入りに追加しました');
                }
              } else {
                if (!alertShown) {
                  alertShown = true;
                  alert('お気に入り登録数が上限に達しております。\nお気に入りリストを編集してから再度お試し下さい');
                }
              }

            } else {
              if (!alertShown) {
                alertShown = true;
                alert('追加できませんでした','お気に入りに追加');
              }
            }
        }
    }
    xmlhttp.send(null);
}


function deleteFavoritePreview(uname) {
    var xmlhttp = getXmlhttp();
    var url = "";
    url = "/favorite/delete/" + uname + "/" + Math.random();
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            res = xmlhttp.responseText;
            if (res == 'success') {
                alert(uname+'ちゃんをお気に入りから削除しました');
                window.location.reload(true);
            } else {
                alert('削除できませんでした');
            }
        }
    }
    xmlhttp.send(null);
}
//GA functions called in nl-thumbnails.html.
function homeThumbnail() //Not called anymore.
{
    ga('send',{'hitType':'event','eventCategory':'homeGuest','eventAction':'thumbs_click','eventLabel':'open preview page by clicking thumbnails | start chat in popup by clicking thumbnails','eventValue':0,'nonInteraction':true});
    //alert('function homeThumbnail called:thumbs_click');
}

function standbyThumb(eCat)
{
    ga('send',{'hitType':'event','eventCategory':eCat,'eventAction':'standbyThumb_click','eventLabel':'open preview page','eventValue':0,'nonInteraction':true});
}

function standbyText(eCat)
{
    ga('send',{'hitType':'event','eventCategory':eCat,'eventAction':'standbyText&Status_click','eventLabel':'open preview page','eventValue':0,'nonInteraction':true});
}

function sessThumb(eCat)
{
    eLabel = '';
    if( eCat == 'homeGuest')
        eLabel = 'open preview page';
    else
        eLabel = 'session start with popup';

    ga('send',{'hitType':'event','eventCategory':eCat,'eventAction':'InsessionThumb_click','eventLabel':eLabel,'eventValue':0,'nonInteraction':true});
}

function sessText(eCat)
{
    ga('send',{'hitType':'event','eventCategory':eCat,'eventAction':'InsessionText&Status_click','eventLabel':'open preview page','eventValue':0,'nonInteraction':true});
}

/* RM 5875 : Flash player detecting JS
  [ Adobe JP site ]
  http://www.adobe.com/jp/products/flashplayer/tech-specs.html
  https://helpx.adobe.com/jp/flash-player/kb/235703.html
  https://helpx.adobe.com/jp/flash-player/kb/archived-flash-player-versions.html
  [ Adobe EN site ]
  http://www.adobe.com/products/flashplayer/tech-specs.html
  http://get.adobe.com/flashplayer/about/
  https://helpx.adobe.com/flash-player/kb/archived-flash-player-versions.html
*/
function detectFlashPlayer() {

    // 1. check OS type
    //    iOS, Android, Any OS that can't have flash player -> JS function return "NonFlashOS"
    //    OS for Flash player :: Windows, MacOS, Linux, ChromeOS
    var result = '';
    var osName = '';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/windows phone/)) {
        osName = 'WindowsPhone';
    } else if (ua.match(/windows/)) {
        osName = 'Windows';
    } else if (ua.match(/ios|iphone|ipad|ipod/)) {
        osName = 'iOS';
    } else if (ua.match(/mac os|mac_powerpc|macintosh/)) {
        osName = 'MacOS';
    } else if (ua.match(/android/)) {
        osName = 'Android';
    } else if (ua.match(/linux/)) {
        osName = 'Linux';
    } else if (ua.match(/firefox/) && ua.match(/mobile|tablet/)) {
        osName = 'FirefoxOS';
    } else if (ua.match(/CrOS/)) {
        osName = 'ChromeOS';
    } else {
        osName = 'Unknown';
    }
    if ( ( osName != 'Windows')
      && ( osName != 'MacOS')
      && ( osName != 'Linux')
      && ( osName != 'ChromeOS') ) {
        result = 'NonFlashOS';
        return result;
    }

    // 2. detect flash player
    //    OS and Browser that can have flash player and can’t detect-> JS function return "FlashDisabled"
    //    flash detected-> JS function return "FlashEnabled"
    var hasFlash = false;
    try {
        // check whether Shockwave Flash is installed
        if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
            hasFlash = true;
        }
    }catch(e){
        // In the case of IE, an exception is caught, so it is determined by MIME
        if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined) {
            hasFlash = true;
        }
    }
    // Determine if FlashPlayer is available
    if (hasFlash) {
        result = 'FlashEnabled';
    } else {
        result = 'FlashDisabled';
    }

    return result;
}

function detectIpad() {
	// check for ipad using user agent.
    var result = '';
    var osName = '';
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/ipad/)) {
        return true;
    } else {
        return false;
    }
}

// Can not use jquery since some pages does not load jquery before this
for(var i = 0; i< document.getElementsByTagName("img").length; i++) {
  document.getElementsByTagName("img")[i].addEventListener('contextmenu', function(event) {
   event.preventDefault();
  }, true);
}

// RM13943 [GTM] set cross-domain tracking between DX and purchase form
// Set d2pshooter as LINK tag, GA code doesnt' work on JavaScript
window.addEventListener('load',function(){

      var elements = document.getElementsByName('package_id');
    var len = elements.length;

    for (var i = 0; i < len; i++){
            var purchaseLink = document.getElementById('link_' + elements.item(i).value);

            // RM14735 [PC][MOB] update shooter JS to accept source page IDs
            var package_source = elements.item(i).value;
            var arr_package_source = package_source.split('_');
            var packageID = arr_package_source[0];
            if (arr_package_source.length > 1 && arr_package_source[1]) {
                var sp = arr_package_source[1];
            } else {
                var sp = 1;
            }            

            var ga_val = getCookie('_ga');
          if(ga_val){
                  var ga_len = ga_val.length;
                  var ga_cid = ga_val.substr(6,ga_len);
          }

            var s2s_id = getCookie('s2s_id');

            var ga_tid = 'UA-41327480-1';
          var dh = 'dxlive.com';

              var shooter_url = d2p_url + "/shooter?package_id=" + packageID+"&from_site_id=20000607&source_page="+sp+"&do_confirm=1&s2s_id="+s2s_id;

            // RM15784 : Set affPromoCode only for guest
            if(isGuest()){
                var aff_promo_code =  $.cookie("affPromoCode");
                if (aff_promo_code) {
                    shooter_url = shooter_url + "&affi_promo=" + aff_promo_code;
                }
            }

            shooter_url = shooter_url + "&ga_tid=" + ga_tid + "&ga_cid=" + ga_cid + "&dh=" + dh;

            shooter_url = shooter_url + "&gtm=" + gtmID;

            console.log(shooter_url);
            purchaseLink.setAttribute('href', shooter_url);
            console.log(purchaseLink);
    }
})

