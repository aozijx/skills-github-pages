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