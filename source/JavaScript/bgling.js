!function() {
    // 获取节点属性值，若无则返回默认值
    function get_attribute(node, attr, default_value) {
        return node.getAttribute(attr) || default_value;
    }

    // 根据标签名获取元素
    function get_by_tagname(name) {
        return document.getElementsByTagName(name);
    }

    // 获取配置参数
    function get_config_option() {
        var scripts = get_by_tagname("script"),
            script_len = scripts.length,
            script = scripts[script_len - 1]; // 当前加载的 script
        return {
            l: script_len, // 脚本数量，用于生成 id
            z: get_attribute(script, "zIndex", -1), // z-index
            o: get_attribute(script, "opacity", 0.5), // 透明度
            c: get_attribute(script, "color", "0,0,0"), // 颜色
            n: get_attribute(script, "count", 99) // 粒子数量
        };
    }

    // 设置 canvas 的宽高
    function set_canvas_size() {
        canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    // 绘制 canvas 内容
    function draw_canvas() {
        context.clearRect(0, 0, canvas_width, canvas_height); // 清空画布
        var e, i, d, x_dist, y_dist, dist;

        // 遍历并处理每个点
        random_points.forEach(function(r, idx) {
            // 移动点
            r.x += r.xa;
            r.y += r.ya;

            // 碰到边界则反向
            r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1;
            r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1;

            // 绘制一个宽高为 1 的点
            context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1);

            // 从下一个点开始连接
            for (i = idx + 1; i < all_array.length; i++) {
                e = all_array[i];

                // 当前点存在
                if (null !== e.x && null !== e.y) {
                    x_dist = r.x - e.x; // x 轴距离
                    y_dist = r.y - e.y; // y 轴距离
                    dist = x_dist * x_dist + y_dist * y_dist; // 总距离平方

                    // 如果距离小于最大距离
                    if (dist < e.max) {
                        if (e === current_point && dist >= e.max / 2) {
                            // 鼠标靠近时，粒子加速向远离鼠标的方向移动
                            r.x -= 0.03 * x_dist;
                            r.y -= 0.03 * y_dist;
                        }

                        // 计算透明度比例
                        d = (e.max - dist) / e.max;
                        context.beginPath();
                        context.lineWidth = d / 2; // 线宽
                        context.strokeStyle = "rgba(" + config.c + "," + (d + 0.2) + ")";
                        context.moveTo(r.x, r.y); // 起点
                        context.lineTo(e.x, e.y); // 终点
                        context.stroke();
                    }
                }
            }
        });

        // 调用下一帧绘制
        frame_func(draw_canvas);
    }

    // 创建 canvas 并添加到 body
    var the_canvas = document.createElement("canvas"), // 创建 canvas
        config = get_config_option(), // 获取配置
        canvas_id = "c_n" + config.l, // 设置 canvas id
        context = the_canvas.getContext("2d"), canvas_width, canvas_height,
        frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {
            window.setTimeout(func, 1000 / 45);
        },
        random = Math.random,
        current_point = { x: null, y: null, max: 20000 }, // 鼠标位置及范围
        all_array;

    the_canvas.id = canvas_id;
    the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
    get_by_tagname("body")[0].appendChild(the_canvas);

    // 初始化 canvas 尺寸
    set_canvas_size();
    window.onresize = set_canvas_size;

    // 存储当前鼠标位置
    window.onmousemove = function(e) {
        e = e || window.event;
        current_point.x = e.clientX;
        current_point.y = e.clientY;
    };

    // 鼠标移出时释放位置
    window.onmouseout = function() {
        current_point.x = null;
        current_point.y = null;
    };

    // 随机生成 config.n 个粒子
    for (var random_points = [], i = 0; config.n > i; i++) {
        var x = random() * canvas_width, // 随机位置
            y = random() * canvas_height,
            xa = 2 * random() - 1, // 随机移动方向
            ya = 2 * random() - 1;
        random_points.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000 // 最大连接距离
        });
    }

    all_array = random_points.concat([current_point]);

    // 0.1 秒后开始绘制
    setTimeout(function() {
        draw_canvas();
    }, 100);
}();
