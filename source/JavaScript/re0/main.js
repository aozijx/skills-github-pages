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


document.querySelectorAll('a').forEach(function(link) {
  link.setAttribute('target', '_blank');
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
        ? `<img class='boardsign' src='' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然苟活了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
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

  // 动态计算透明度，确保透明度在 0 和 x 之间
  var opacity = Math.min(0.9, Math.max(0, scrollY / windowHeight));

  // 防止在滚动到顶部时背景色依然是黑色
  if (scrollY === 0) {
    opacity = 0;  // 当滚动到顶部时透明度为 0
  }

  // 设置背景颜色的透明度
  navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
};

// spa页面跳转
// 缓存已加载的页面
const cache = {};
function loadPage(url) {
  // 显示加载动画
  document.body.classList.add('loading');
  document.querySelector('.loading-overlay').style.display = 'flex'; // 使加载动画立即显示
  if (cache[url]) {
    // 如果页面缓存了，直接替换内容
    document.getElementById('content').innerHTML = cache[url];
    history.pushState({ page: url }, '', url);
    hideLoadingAnimation(); // 隐藏加载动画
  } else {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
        cache[url] = html;  // 缓存页面内容
        history.pushState({ page: url }, '', url);
        hideLoadingAnimation(); // 隐藏加载动画
      })
      .catch(() => hideLoadingAnimation());
  }
}
// 隐藏加载动画
function hideLoadingAnimation() {
  document.querySelector('.loading-overlay').style.display = 'none'; // 隐藏加载动画
}
// 导航点击事件
document.querySelectorAll('#two-nav a').forEach(link =>
  link.addEventListener('click', e => {
    // 只在非锚点链接时执行 preventDefault
    if (link.getAttribute('href').startsWith('#')) {
      // 锚点链接，不阻止默认行为
      return;
    }
    e.preventDefault();
    loadPage(link.getAttribute('data-page') || link.getAttribute('href'));
  })
);
// 监听前进/后退按钮
window.addEventListener('popstate', e => e.state?.page && loadPage(e.state.page));
// 加载动画样式
const style = document.createElement('style');
style.innerHTML = `
  .loading-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .loading::before {
    content: "Loading...";
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #333;
  }
`;
document.head.appendChild(style);

// 创建全屏遮罩层
const loadingOverlay = document.createElement('div');
loadingOverlay.classList.add('loading-overlay');
loadingOverlay.innerText = "Loading...";
document.body.appendChild(loadingOverlay);



document.head.appendChild(style);
// 监听锚点链接点击事件
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1); // 获取锚点ID，去掉 # 符号
    if (targetId) {
      e.preventDefault(); // 阻止默认跳转行为
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // 使用 scrollIntoView 实现平滑滚动
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',  // 滚动到目标元素的顶部
        });
      }
    }
  });
});
// 设置页面滚动时的平滑效果
document.documentElement.style.scrollBehavior = 'smooth';
