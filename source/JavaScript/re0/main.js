// MD5在线链接
{/* <script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script> */}
    let isF12Blocked = true; // 初始状态：禁用 F12
    // 创建右上角按钮
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "启用防护";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.backgroundColor = "#28a745";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontFamily = "Arial, sans-serif";
    toggleButton.style.fontSize = "14px";
    toggleButton.style.zIndex = "10000";
    document.body.appendChild(toggleButton);
    // 添加按钮点击事件
    toggleButton.addEventListener("click", () => {
      isF12Blocked = !isF12Blocked; // 切换开关状态
      // 更新按钮的显示内容和样式
      if (isF12Blocked) {
        toggleButton.textContent = "启用防护";
        toggleButton.style.backgroundColor = "#28a745"; // 绿色
      } else {
        toggleButton.textContent = "禁用防护";
        toggleButton.style.backgroundColor = "#dc3545"; // 红色
      }
    });
    // 检测 F12 按键
    document.addEventListener("keydown", function (event) {
      if (event.key === "F12") {
        if (isF12Blocked) {
          event.preventDefault(); // 禁用 F12 默认行为
          console.log("F12 被禁用");
          // 创建提示框逻辑
          const warningDiv = document.createElement("div");
          warningDiv.id = "f12-warning";
          warningDiv.textContent = "扒源码，被我逮到了吧!👻";

          warningDiv.style.position = "fixed";
          warningDiv.style.top = "20px";
          warningDiv.style.left = "-300px";
          warningDiv.style.backgroundColor = "#ff4444";
          warningDiv.style.color = "white";
          warningDiv.style.padding = "10px 20px";
          warningDiv.style.borderRadius = "5px";
          warningDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          warningDiv.style.fontFamily = "Arial, sans-serif";
          warningDiv.style.fontSize = "14px";
          warningDiv.style.zIndex = "9999";
          warningDiv.style.transition = "left 0.5s ease";

          document.body.appendChild(warningDiv);

          setTimeout(() => {
            warningDiv.style.left = "20px";
          }, 50);

          setTimeout(() => {
            warningDiv.style.left = "-300px";
            setTimeout(() => warningDiv.remove(), 500);
          }, 3000);
        } else {
          console.log("F12 防护已禁用");
        }
      }
    });


//刷新不中断播放https://yeelz.com/post/564.html
ap = null
    Object.defineProperty(document.querySelector('meting-js'),"aplayer",{
        set: function(aplayer) {
            ap=aplayer
            ready();
        }
    });
    isRecover = false;
    function ready(){
        ap.on('canplay', function () {
            if(!isRecover){
                if(localStorage.getItem("musicIndex") != null){
                    musicIndex = localStorage.getItem("musicIndex");
                    musicTime = localStorage.getItem("musicTime");
                    if(ap.list.index != musicIndex){
                        ap.list.switch(musicIndex);
                    }else{
                        ap.seek(musicTime);
                        ap.play();
                        localStorage.clear();
                        isRecover = true;
                    }
                }else{
                    isRecover = true;
                }
            }
        });
    }
    window.onbeforeunload = function(event) {
        if(!ap.audio.paused){
            musicIndex = ap.list.index;
            musicTime = ap.audio.currentTime;
            localStorage.setItem("musicIndex",musicIndex);
            localStorage.setItem("musicTime",musicTime);
        }
    };


var now = new Date();
  function createtime() {
    now.setTime(now.getTime() + 1000);// 每秒更新
    var start = new Date("2025-01-07 00:00:00");// 设置开始时间,使用 ISO 格式
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17);// 计算距离，速度为17千米/秒
    var unit = (dis / 149600000).toFixed(6);// 计算天文单位
    var grt = new Date("2025-01-07 00:00:00");// 网站诞生的时间
    let currentTimeHtml = "";
    var days = Math.floor((now - grt) / (1000 * 60 * 60 * 24));// 计算天数
    var hours = Math.floor(((now - grt) / (1000 * 60 * 60)) % 24);// 计算小时数
    var minutes = Math.floor(((now - grt) / (1000 * 60)) % 60);// 计算分钟数
    var seconds = Math.floor((now - grt) / 1000 % 60);// 计算秒数
    (currentTimeHtml =
      hours < 18 && hours >= 9
        ? `<img class='boardsign' src='source/image/crydog.gif' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然苟活了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
        : `<img class='boardsign' src='' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然苟活了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
      document.getElementById("workboard") &&
      (document.getElementById("workboard").innerHTML = currentTimeHtml);
  }
  setInterval(createtime, 1000);// 每秒更新一次


window.onscroll = function() {
  var navbar = document.querySelector('nav');
  var scrollY = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  // 动态计算透明度，确保透明度在 0 和 0.5 之间
  var opacity = Math.min(0.8, Math.max(0, scrollY / windowHeight));

  // 防止在滚动到顶部时背景色依然是黑色
  if (scrollY === 0) {
    opacity = 0;  // 当滚动到顶部时透明度为 0
  }

  // 设置背景颜色的透明度
  navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
};

