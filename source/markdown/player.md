
在互联网上，很多视频播放器提供嵌入功能，允许你将视频内容嵌入到其他网站或者页面中。类似于你提到的 Bilibili 播放器（通过` <iframe> `嵌入视频），有许多常见的播放器支持这样的功能，以下是一些流行的播放器选项：
<hr>

### 1. YouTube Player
- **描述**：YouTube 提供了一个嵌入式播放器，可以通过` <iframe> `方式将 YouTube 视频嵌入到其他网页中。
- **嵌入代码示例**：

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/{video-id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
- **特点**：
  - 支持各种视频格式。
  - 提供自定义播放器样式和功能（如自动播放、控制条隐藏等）。
  - 支持字幕、多语言等功能。
<hr>

### 2. Vimeo Player
- **描述**：Vimeo 也提供了一个嵌入式播放器，通常用于高质量、专业内容的播放。
- **嵌入代码示例**：

```html
<iframe src="https://player.vimeo.com/video/{video-id}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
```
- **特点**：
  - 高清晰度播放。
  - 提供定制化选项，如播放器大小、自动播放、隐藏控制条等。
  - 支持个人化的播放器主题。
<hr>

### 3. HTML5` <video> `标签
- **描述**：HTML5 原生的` <video> `标签支持多种视频格式，可以直接嵌入并播放视频，适合没有依赖于第三方平台的视频托管。
- **示例代码**：

```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
```
- **特点**：
  - 完全由浏览器支持，不依赖外部服务。
  - 支持自定义控制条和样式。
  - 支持多种视频格式。
<hr>

### 4. JW Player
- **描述**：JW Player 是一个专业的视频播放器，常用于自定义网站的视频播放功能，支持视频广告、分析、字幕等功能。
- **嵌入代码示例**：

```html
<div id="my-player"></div>
<script src="https://cdn.jwplayer.com/libraries/xxxxxxx.js"></script>
<script>
    jwplayer("my-player").setup({
        file: "https://www.example.com/path/to/video.mp4",
        image: "https://www.example.com/path/to/thumbnail.jpg"
    });
</script>
```
- **特点**：
  - 强大的定制能力，支持多种视频格式、广告插入等功能。
  - 适用于专业内容、企业应用
<hr>

### 5. Flowplayer
- **描述**：Flowplayer 是一个开源的 HTML5 视频播放器，支持自定义外观和行为，广泛用于嵌入式视频播放。
- **嵌入代码示例**：

```html
<div id="player"></div>
<script src="https://releases.flowplayer.org/7.2.7/flowplayer.min.js"></script>
<script>
    flowplayer("#player", {
        clip: {
            sources: [
                { type: "video/mp4", src: "https://www.example.com/video.mp4" }
            ]
        }
    });
</script>
```
- **特点**：
  - 高度定制化，适合专业需求。
  - 可以处理直播流、广告等复杂需求。
<hr>

### 6. Plyr
- **描述**：Plyr 是一个简洁、易于使用的 HTML5 视频和音频播放器，支持自定义外观和功能，适用于嵌入式视频播放。
- **嵌入代码示例**：

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
</video>
<script src="https://cdn.plyr.io/3.5.4/plyr.js"></script>
<script>
    const player = new Plyr('video');
</script>
```
- **特点**：
  - 轻量且易于集成。
  - 提供自定义皮肤和控件样式。
  - 支持多平台，包括视频、音频和直播流。
<hr>

### 7. Video.js
- **描述**：Video.js 是一个开源的 HTML5 视频播放器，具有丰富的插件和功能，支持跨平台播放。
- **嵌入代码示例**：

```html
<video id="my-video" class="video-js vjs-default-skin" controls>
    <source src="video.mp4" type="video/mp4">
</video>
<script src="https://vjs.zencdn.net/7.10.2/video.js"></script>
<script>
    var player = videojs('my-video');
</script>
```
- **特点**：
  - 开源且支持插件扩展。
  - 支持自定义皮肤、控件和行为。
  - 丰富的 API 和文档。
<hr>

### 8. Kaltura Player
- **描述**：Kaltura 提供一个企业级的在线视频平台，它的播放器支持多种功能，包括内容保护、广告、直播等。
- **嵌入代码示例**：

```html
<iframe src="https://cdnapisec.kaltura.com/p/XXXXXX/sp/XXXXXX00/embedIframeJs/uiconf_id/XXXXXX/partner_id/XXXXXX?iframeembed=true&playerId=kaltura_player&entry_id={video-id}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
```
- **特点**：
  - 支持广告、分析、内容保护等功能。
  - 企业级的视频解决方案，适合需要高度控制的视频播放环境。
<hr>

### 9. Bilibili Player
- **描述**：Bilibili 提供了一个嵌入式播放器，适用于嵌入 Bilibili 视频。你可以通过指定` bvid `来嵌入 Bilibili 的视频。
- **嵌入代码示例**：

```html
<iframe src="https://player.bilibili.com/player.html?bvid=BV1hL4y1w72r" frameborder="0" scrolling="no" width="100%" height="500" allowfullscreen="true"></iframe>
```
- **特点**：
  - 适用于中国大陆的视频平台，支持高质量视频播放。
  - 支持直播、弹幕等互动功能。
<hr>
<hr>

### 10. 腾讯视频播放器 (Tencent Video)
- **描述**：腾讯视频是中国大陆最受欢迎的视频平台之一，提供了强大的视频播放功能。你可以通过嵌入其播放器在你的网站或应用中播放腾讯视频的内容。
- **嵌入代码示例**：

```html
<iframe frameborder="0" width="100%" height="500" src="https://v.qq.com/iframe/player.html?vid={video-id}&autoplay=true" allowfullscreen="true"></iframe>
```
- **特点**：
  - 支持高清视频播放。
  - 提供视频资源库，可以嵌入腾讯视频的内容。
  - 支持自动播放、全屏等控制。
<hr>

### 11. 爱奇艺视频播放器 (iQIYI Player)
- **描述**：爱奇艺是中国领先的视频平台之一，提供各种娱乐内容，支持嵌入播放器。
- **嵌入代码示例**：

```html
<iframe src="https://open.iqiyi.com/developer/player.html?vid={video-id}&tvId={tv-id}" width="100%" height="500" frameborder="0" allowfullscreen="true"></iframe>
```
- **特点**：
  - 提供高清、超清视频播放。
  - 支持各种广告、互动和视频特效。
  - 专注于娱乐、电影、电视剧等内容。
<hr>

### 12. 优酷视频播放器 (Youku Player)
- **描述**：优酷是中国老牌视频平台，提供影视剧、综艺、体育赛事等视频内容，支持在网页上嵌入播放器。
- **嵌入代码示例**：

```html
<iframe frameborder="0" width="100%" height="500" src="https://player.youku.com/embed/{video-id}" allowfullscreen="true"></iframe>
```
- **特点**：
  - 提供多种视频资源，包括电视剧、电影、综艺等。
  - 播放器支持全屏、自动播放等功能。
  - 支持 HTML5 和 Flash 播放，兼容性强。
<hr>

### 13.  芒果TV播放器 (Mango TV)
- **描述**：芒果TV 是湖南广播电视台旗下的视频平台，提供丰富的综艺节目和电视剧。
- **嵌入代码示例**：

```html
<iframe frameborder="0" width="100%" height="500" src="https://www.mgtv.com/v/{video-id}" allowfullscreen="true"></iframe>
```
- **特点**：
  - 专注于国内综艺节目、电视剧等内容。
  - 提供高质量的直播和点播内容。
  - 支持多种视频格式。
<hr>

### 14.  搜狐视频播放器 (Sohu Video)
- **描述**：搜狐视频是中国的一大视频平台，提供电影、电视剧、综艺等视频内容，也支持嵌入式播放器。
- **嵌入代码示例**：

```html
<iframe src="https://tv.sohu.com/v/{video-id}" width="100%" height="500" frameborder="0" allowfullscreen="true"></iframe>
```
- **特点**：
  - 提供丰富的视频库，包括电影、电视剧、综艺等。
  - 播放器支持多种功能，如自动播放、全屏、控制条等。
<hr>

### 15.  抖音短视频播放器 (Douyin Player)
- **描述**：抖音是中国的短视频平台，类似于 TikTok，提供了嵌入其短视频内容的功能。
- **嵌入代码示例**：

```html
<iframe src="https://open.douyin.com/player/video?vid=7429954886776753408&autoplau=0" width="100%" height="500" frameborder="0" referrerpolicy="unsafe-url" allowfullscreen="true"></iframe>
```
- **特点**：
  - 专注于短视频，适合展示创意和用户生成内容（UGC）。
  - 提供高质量的视频播放和用户互动。
  - 支持分享到社交媒体等平台。
<hr>

### 16.  哔哩哔哩直播播放器 (Bilibili Live)
- **描述**：除了常规的 Bilibili 视频，Bilibili 也提供了直播内容的播放器，可以嵌入到你的网站或应用中。
- **嵌入代码示例**：

```html
<iframe src="https://live.bilibili.com/{live-room-id}" width="100%" height="500" frameborder="0" allowfullscreen="true"></iframe>
```
- **特点**：
  - 支持直播内容，包括游戏直播、二次元、娱乐节目等。
  - 提供实时弹幕互动功能。
  - 可以通过 Bilibili 账户进行互动。
<hr>

### 17.  快手视频播放器 (Kuaishou Player)
- **描述**：快手是中国的另一大短视频平台，类似于抖音，专注于短视频和直播内容。
- **嵌入代码示例**：

```html
<iframe src="https://www.kuaishou.com/embed/{video-id}" width="100%" height="500" frameborder="0" allowfullscreen="true"></iframe>
```
- **特点**：
  - 提供短视频、直播和互动功能。
  - 面向年轻用户，内容偏向社交和娱乐。
<hr>
<hr>

## 总结
- YouTube 和 Vimeo 适合常见的共享视频平台。
- HTML5` <video> `标签适合自托管视频。
- JW Player、Flowplayer 和 Video.js 适合需要高度定制和功能丰富的应用。
- Bilibili Player 和 Kaltura 等适合特定平台的视频播放需求。
- 涵盖了各大视频平台，如 腾讯视频、爱奇艺、优酷、芒果TV 等，提供了丰富的视频内容和嵌入功能。

这些播放器通常都提供 HTML 嵌入代码，方便你将其嵌入到网站中。需要注意的是，不同平台的嵌入代码和播放器功能可能有所不同，你可以根据实际需求（如是否需要自定义功能、广告支持、互动性等）调整播放器的显示效果、大小、控制项等,选择合适的播放器。
