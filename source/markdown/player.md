
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

## 总结
这些播放器都提供了易于嵌入的视频播放功能，适用于不同需求的场景。你可以选择：

- YouTube 和 Vimeo 适合常见的共享视频平台。
- HTML5` <video> `标签适合自托管视频。
- JW Player、Flowplayer 和 Video.js 适合需要高度定制和功能丰富的应用。
- Bilibili Player 和 Kaltura 等适合特定平台的视频播放需求。

根据你的需求（如是否需要自定义功能、广告支持、互动性等），选择合适的播放器。
