# 懒加载

## (问题)如何设置元素，图片，音频等资源进入画面后才开始加载，怎样写全局script，实现图片，音频和视频的懒加载
- 要实现全局的懒加载功能，即只有当图片、音频或视频进入视口时才开始加载资源，你可以使用 JavaScript 来监听页面滚动事件，检查这些元素是否进入了视口。如果进入了视口，则动态地设置它们的` src `或` data-src `属性，从而开始加载资源。

- 这种技术常常与 **Intersection Observer API** 结合使用，Intersection Observer 是一种高效的方式来检测元素是否出现在视口中，它比传统的滚动事件监听更为高效。
### 全局懒加载的实现步骤
1. 给图片、音频和视频标签添加` data-src `或 ` data-srcset ` （图片）属性，用来存储资源的实际 URL。
2. 使用` Intersection Observer `来监控这些元素是否进入视口。
3. 当元素进入视口时，设置它们的` src `或` srcset `来开始加载资源。

### 示例代码

```html
<!-- 图片 -->
<img class="lazy-load" data-src="path_to_image.jpg" alt="Image" />

<!-- 音频 -->
<audio class="lazy-load" data-src="path_to_audio.mp3" preload="none" controls>
  Your browser does not support the audio element.
</audio>

<!-- 视频 -->
<video class="lazy-load" data-src="path_to_video.mp4" preload="none" controls>
  Your browser does not support the video element.
</video>

<script>
  // 创建 Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        // 如果是图片元素
        if (target.tagName.toLowerCase() === 'img') {
          target.src = target.getAttribute('data-src');
        }
        
        // 如果是音频元素
        if (target.tagName.toLowerCase() === 'audio') {
          target.src = target.getAttribute('data-src');
        }
        
        // 如果是视频元素
        if (target.tagName.toLowerCase() === 'video') {
          target.src = target.getAttribute('data-src');
        }

        // 加载完资源后，停止观察
        observer.unobserve(target);
      }
    });
  }, {
    rootMargin: '0px', // 当元素进入视口时就触发
    threshold: 0.1 // 10%的元素进入视口时触发
  });

  // 开始观察所有具有 'lazy-load' 类的元素
  const lazyElements = document.querySelectorAll('.lazy-load');
  lazyElements.forEach(element => {
    observer.observe(element);
  });
</script>
```
### 解释：
- ` IntersectionObserver `用来监听哪些元素进入了视口，` entries `是一个数组，包含了所有被观察元素的状态信息。` entry.isIntersecting `表示该元素是否进入了视口。
- `target.src = target.getAttribute('data-src')`：一旦元素进入视口，就会从` data-src `属性获取资源的 URL，并赋值给元素的` src `属性，从而开始加载资源。
- `rootMargin: '0px'`：表示观察区域的上下左右扩展范围。0px 意味着只要元素的 10% 进入视口时就开始加载。
- `threshold: 0.1`：设置了在元素 10% 进入视口时就触发懒加载。你可以调整此值来控制懒加载的触发条件。

### 注意
- 对于图片，可以使用` data-srcset `来支持响应式图像的懒加载。
- 对于音频和视频，可以通过` data-src `存储资源的 URL，确保它们在需要时加载。

### 示例：支持响应式图片懒加载

```html
<img class="lazy-load" data-src="small_image.jpg" data-srcset="small_image.jpg 600w, large_image.jpg 1200w" alt="Responsive Image" />
```
在这个例子中，data-srcset 可以存储多个图片源地址，用于不同的屏幕尺寸和分辨率。

这种方法能够高效地延迟加载图片、音频和视频，减少页面初始加载时的资源消耗，提高页面性能。

## (问题)

```html
<script>
var images = document.getElementsByTagName("img");
  function callback(entries) {
   for (let i of entries) {
     if (i.isIntersecting) {
         let img = i.target;
         let trueSrc = img.getAttribute("data-src");
         img.setAttribute("src", trueSrc);
         observer.unobserve(img);
     }
   } 
 }
     const observer = new IntersectionObserver(callback);
     for (let i of images) {
       observer.observe(i);
     }你写的和这个有什么区别？github上有一个lazyload的项目tuupola，他又zuol什么优化？
</script>
```
你提到的代码实现和我提供的实现思路在基本功能上是相似的：它们都使用` IntersectionObserver `来实现图片懒加载。主要的区别在于细节的处理和优化方式。

### 你的代码与我提供的代码的区别：
1. **选择元素**：
- 你的代码使用了` document.getElementsByTagName("img")`，这会获取页面中所有的` <img> `标签。
- 我在示例中使用了` document.querySelectorAll('.lazy-load')`，这是选择具有` .lazy-load `类的图片元素。使用类选择器更加灵活，可以更方便地控制懒加载的范围，只应用于特定的图片，而不必加载页面中所有的图片。
2. **懒加载的启动条件**：
- 你的代码对每个` img `元素使用` IntersectionObserver.observe `来启动监听，几乎没有限制。
- 我的示例中使用了` threshold: 0.1 `和` rootMargin: '0px' `这两个参数来优化懒加载的触发条件。这些参数决定了元素进入视口的条件（例如，元素的 10% 进入视口时开始加载），并且可以控制视口的扩展区域，从而提前加载资源，避免加载时的延迟。
3. **元素移除监听**：
- 在你的代码中，使用` observer.unobserve(img) `来停止观察已经加载的图片，这样避免多次加载同一个图片。
- 在我的代码中，同样有` observer.unobserve(target) `处理，但我在每个元素加载完成后，停止观察该元素，防止不必要的监听。

### tuupola 项目优化分析：
在 GitHub 上，tuupola 的懒加载库（`lazyload`）做了一些优化，主要关注以下几个方面：
1. **性能优化**：
- **延迟加载触发**：tuupola 使用了` requestIdleCallback `或` setTimeout `来延迟加载操作，确保在浏览器空闲时才进行加载，避免占用主线程资源。
- **批量加载**：通过延迟加载和批量加载的方式减少了不必要的资源请求，尽量将资源请求合并，降低了网络请求的数量。
- **减少滚动事件的触发频率**： tuupola 库通过` IntersectionObserver `实现了高效的监听，避免了传统方式中滚动事件触发过于频繁的问题。
2. **适应性和兼容性**：
- 支持响应式图像：tuupola 支持` srcset `属性，能够根据设备的屏幕分辨率和尺寸加载不同尺寸的图片，这样可以减少带宽浪费并提供更好的用户体验。
- 多种元素支持：虽然最初是为图片设计的，但 tuupola 库也支持音频、视频、ifram等其他资源的懒加载。
3. **加载策略优化**：
- **占位符和渐进式加载**：通过占位符图片或模糊加载来提供一种渐进式的加载体验，提升用户的感知性能，避免页面突然跳动。
- **错误处理**：tuupola 提供了错误处理机制，在资源加载失败时可以进行替代显示，减少用户的负面体验。
4. **API 和可配置性**：
tuupola 提供了一个灵活的 API，允许开发者根据需要自定义各种配置参数，例如` threshold`、`rootMargin`、`data-src` 等，使得懒加载更具可定制性。
它还提供了事件处理，比如在图片加载前后触发的事件，可以通过 API 调整加载行为。
### tuupola 的主要优化总结：
- **性能优化**：通过使用` IntersectionObserver `和` requestIdleCallback `等技术，减少了滚动事件的开销，并推迟了加载，优化了浏览器渲染性能。
- **兼容性**：支持各种资源的懒加载，且能够处理响应式图片、视频、音频等资源。
- **用户体验**：通过占位符、渐进式加载和错误处理等方式提高了用户体验，避免了资源加载过程中的空白或错位现象。
- **灵活的配置**：提供了大量的配置选项，可以根据具体需求调整加载策略。
### 总结：
- 你的代码和我提供的代码基本实现了懒加载的核心功能，但 tuupola 在性能、用户体验和兼容性上做了更深入的优化。
- 如果要提高性能和兼容性，可以参考 tuupola 项目的实现，结合` IntersectionObserver `和合适的延迟加载策略，使用更多的优化选项，如响应式图像和错误处理机制。
