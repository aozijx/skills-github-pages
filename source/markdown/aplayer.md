# APlayer

[演示站](https://aplayer.js.org/#/)
[虎纹鲨鱼の小站](https://tigsrk.cn/2018/03/04/Aplayer/)
[l&WK](https://www.cnblogs.com/lwk9527/p/17425769.html)

### 引入文件

```JavaScript
<link href="https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/aplayer/1.10.1/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
```
不知道要不要这个，说应该在MetingJS上面

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/jquery.min.js@3.5.1/jquery.min.js"></script>
```

### 代码(纯aplayer)

```JavaScript
    window.onload = function() {
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            autoplay: true,
            volume: 0.6,
            mutex: true,
            audio: [{
                name: 'AwayFromTheRain',
                artist: 'Chamber Chu',
                url: 'https://aozijx.github.io/xuao/source/music/AwayFromTheRain.mp3',
                cover: 'http://p1.music.126.net/9K-N70x_RByoJLYZXPDvpg==/109951167006905173.jpg',
            }]
        });
    };
```
一开始不加载，加上` window.onload = function(){} `后好了

### 插件MetingJS

```JavaScript
<meting-js
      server="netease"
      type="playlist"
      id="626864109"
      fixed="true"
      mini="true">
    </meting-js>
```
更方便，相对于APlayer

### 跳转页面不暂停

```JavaScript
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
```

| 参数            | 默认值     |  描述                                       |
|-----------------|------------|--------------------------------------------|
| **id**          | 必须值     | 歌曲 id / 歌单 id / 相册 id                |
| **server**      | 必须值     | 可选值：`netease`（网易云音乐）、`tencent`（QQ音乐）、`xiami`（虾米音乐）、`kugou`（酷狗音乐）、`baidu`（百度音乐） |
| **type**        | 必须值     | 可选值：`song`（单曲）、`album`（专辑）、`playlist`（歌单）、`search`（搜索） |
| **autoplay**    | `false`    | 自动播放（`true` 或 `false`）              |
| **fixed**       | `false`    | 吸底模式（`true` 或 `false`）              |
| **mini**        | `false`    | 迷你模式（`true` 或 `false`）              |
| **theme**       | `#2980b9`  | 主题色（可以设置为任意颜色）              |
| **loop**        | `all`      | 可选值：`all`（列表循环）、`one`（单曲循环）、`none`（不循环） |
| **order**       | `list`     | 可选值：`list`（顺序播放）、`random`（随机播放） |
| **volume**      | `0.7`      | 音量（0 到 1 之间）                       |
| **listfolded**  | `false`    | 是否折叠播放列表（`true` 或 `false`）     |
| **listmaxheight** | `340px`   | 播放列表最大高度                          |
| **mutex**       | `true`     | 与其他 APlayer 实例不可同时播放（`true` 或 `false`） |
