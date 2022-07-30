// var $ = sdq_iframe.$;
    var $iframe = $("iframe");
    console.log($iframe);
    var _funEach = function(t, e) {
        var n, r = this, o = function(t, n) {
            return e.call(n[t], t, n[t])
        };
        if ("function" != typeof e)
            return r;
        if (t = t || [],
        r._isArray(t))
            for (n = 0; n < t.length && !o(n, t); n++)
                ;
        else
            for (n in t)
                if (o(n, t))
                    break;
        return r
    }
    

    var _isArray = function(e) {
        var n, r = this, o = r._isTypeof(e);
        return !(!e || "object" != typeof e || e === window) && (n = "length"in e && e.length,
        "array" === o || 0 === n || "number" == typeof n && n > 0 && n - 1 in e)
    }

    var _isTypeof = function(t) {
        return null === t ? String(t) : "object" == typeof t || "function" == typeof t ? function() {
            var e = Object.prototype.toString.call(t).match(/\s(.+)\]$/) || []
              , n = "Function|Array|Date|RegExp|Object|Error|Symbol";
            return e = e[1] || "Object",
            new RegExp("\\b(" + n + ")\\b").test(e) ? e.toLowerCase() : "object"
        }() : typeof t
    }


    _funEach($iframe, function (i, item) {
    var $iframe = $("iframe");
    // console.log($iframe);
        var
            id = "iframe"
            , i = i + 1
            ;
        $(item)[0].scrolling = "no";
        $(item)[0].width = "100%";
        $(item)[0].frameBorder = "no";
        $(item)[0].framespacing = 0;
        //输入你希望根据页面高度自动调整高度的iframe的名称的列表
        //用逗号把每个iframe的ID分隔. 例如: ["myframe1", "myframe2"]，可以只有一个窗体，则不用逗号。
        //定义iframe的ID
        var iframeids = ["" + id + i + ""];  //console.log(id+i);   // 检查iframe id属性与自适应设置的数组内容是否为同id
        //如果用户的浏览器不支持iframe是否将iframe隐藏 yes 表示隐藏，no表示不隐藏
        var iframehide = "yes";
        $(item)[0].allowfullscreen = true;
        $(item)[0].id = id + i;
        function dyniframesize() {
            setTimeout(function(){
            var dyniframe = new Array()
            for (i = 0; i < iframeids.length; i++) {
                if (document.getElementById) {
                    //自动调整iframe高度
                    dyniframe[dyniframe.length] = document.getElementById(iframeids[i]);
                    if (dyniframe[i] && !window.opera) {
                        dyniframe[i].style.display = "block";
                        if (dyniframe[i].contentDocument && dyniframe[i].contentDocument.body.offsetHeight) //如果用户的浏览器是NetScape
                            dyniframe[i].height = dyniframe[i].contentDocument.body.offsetHeight + 100;
                        else if (dyniframe[i].Document && dyniframe[i].Document.body.scrollHeight) //如果用户的浏览器是IE
                            dyniframe[i].height = dyniframe[i].Document.body.scrollHeight + 100;
                    }
                }
                //根据设定的参数来处理不支持iframe的浏览器的显示问题
                if ((document.all || document.getElementById) && iframehide == "no") {
                    var tempobj = document.all ? document.all[iframeids[i]] : document.getElementById(iframeids[i]);
                    tempobj.style.display = "block";
                }
            }
            },5000);
        }

        if (window.addEventListener) {
            window.addEventListener("load", dyniframesize, false);
        }
        else if (window.attachEvent) {
            window.attachEvent("onload", dyniframesize);
        }
        else {
            window.onload = dyniframesize;
        }
    });
