# ` <audio> ` 标签

HTML `<audio>` 标签用于在网页中嵌入音频文件。它提供了简单的音频播放功能，并且可以结合不同的属性来控制播放行为。

## 基本语法

```html
<audio controls>
  <source src="your-audio-file.mp3" type="audio/mp3">
  <source src="your-audio-file.ogg" type="audio/ogg">
  您的浏览器不支持音频播放。
</audio>
```

## 常用属性
- control
此属性为` <audio> `标签提供控制界面（如播放/暂停按钮、音量控制等）。

```html
<audio controls>
  <source src="your-audio-file.mp3" type="audio/mp3">
</audio>
```
- autoplay
此属性指定音频在页面加载后自动播放。

```html
<audio controls autoplay>
  <source src="your-audio-file.mp3" type="audio/mp3">
</audio>
```
- loop
此属性指定音频在播放完毕后自动重新开始播放。

```html
<audio controls loop>
  <source src="your-audio-file.mp3" type="audio/mp3">
</audio>
```
- muted
此属性指定音频默认静音。

```html
<audio controls muted>
  <source src="your-audio-file.mp3" type="audio/mp3">
</audio>
```
- preload
此属性指定浏览器在页面加载时如何处理音频文件。它可以取以下值：
`auto`: 浏览器会在页面加载时预加载音频。
`metadata`: 只会加载音频文件的元数据（如时长等），不会加载整个音频。
`none`: 不会预加载音频文件。

```html
<audio controls preload="auto">
  <source src="your-audio-file.mp3" type="audio/mp3">
</audio>
```
- <source>
通过` <source> `标签可以为` <audio> `元素提供多个音频文件及其格式。当浏览器不支持某种格式时，它会尝试加载下一个` <source>`。

```html
<audio controls>
  <source src="your-audio-file.mp3" type="audio/mp3">
  <source src="your-audio-file.ogg" type="audio/ogg">
  您的浏览器不支持音频播放。
</audio>
```
## 完整示例

```html
<audio controls autoplay loop preload="auto">
  <source src="your-audio-file.mp3" type="audio/mp3">
  <source src="your-audio-file.ogg" type="audio/ogg">
  您的浏览器不支持音频播放。
</audio>
```
在这个示例中，音频会在页面加载时自动播放，并且循环播放。如果浏览器不支持 <audio> 元素，则会显示替代文本。
## 兼容性
大多数现代浏览器都支持` <audio> `元素（如 Chrome、Firefox、Safari 和 Edge）。但是，某些旧版浏览器可能不支持该元素，因此建议使用多个` <source> `标签来确保兼容性。