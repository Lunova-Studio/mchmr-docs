---
title: 常见问题
aside: false
prevNext: false
authors:
  - name: Gabriel Ryder
    username: 6get-xiaofan
    avatar: https://www.github.com/6get-xiaofan.png
    to: https://github.com/6get-xiaofan
    target: _blank
---

在这里列出了在部署或使用 McHMR 的所有常见问题，部分问题你可以尝试在这里找到解决方案。

如果你有什么建议或者反馈想对我们提出，你可以加入 QQ 群反馈，我们会在 QQ 群中进行回复。

## 常见问题

::accordion{default-value="first-item" collapsible}
  ::accordion-item{value="first-item"}
  #title
  更新器部分玩家点击后没有反应，打不开

  #content
  1. 部分玩家可能安装了第三方的精简版 Windows 操作系统、卸载了系统 .NET 运行时文件或者在 Windows7 等旧版本操作系统上使用，这将使其 Windows 操作系统没有 .NET Framework 4.8 运行时环境，解决方法就是下载并安装 .NET Framework 4.8 运行时环境。

     [点击此处](https://dotnet.microsoft.com/zh-cn/download/dotnet-framework/thank-you/net48-web-installer)到官网进行下载。

  2. 部分玩家电脑上启用了 UAC，玩家在使用更新器时，UAC 会阻止更新器的运行，解决方法就是在 UAC 中选择“是”，允许更新器运行，或者禁用 UAC。

  3. 部分玩家电脑上启用了 Windows Defender 防火墙，玩家在使用更新器时，Windows Defender 防火墙会阻止更新器的运行，解决方法就是在 Windows Defender 防火墙中选择“允许应用”，允许更新器运行，或者关闭 Windows Defender 防火墙。
  ::

  ::accordion-item
  #title
  前端可以访问，点击登录没有反应

  #content
  1. 用户未按要求在 `webConfig.js` 中配置后端公网地址。

     解决方案：打开 `webConfig.js` 文件，将 `webApiBaseUrl` 的值修改为你后端的公网地址，通常情况下是你的公网 IP 和后端端口的拼接，此处可以使用域名。

     修改完成后使用快捷键 `Ctrl + F5` 强制刷新页面，或者手动清除浏览器缓存。

  2. 浏览器缓存问题

     解决方案：使用快捷键 `Ctrl + F5` 强制刷新页面，或者手动清除浏览器缓存。

  3. 确定后端正确输出了 `McHMR v*.* Startup success!`。

     解决方案：打开后端的日志文件，查看是否有 `McHMR v*.* Startup success` 的输出，如果没有，说明后端未正确部署。

  4. 访问后端地址，查看网页是否正确输出 `欢迎使用 McHMR，这是 API 地址，当你看到这个提示，说明你已经正常部署版本管理端后端了，请通过前端地址访问。`

     解决方案：打开后端的日志文件，查看是否有 `McHMR v*.* Startup success` 的输出，如果确定后端正确部署，终端输出了 `McHMR v*.* Startup success`，请检查服务器的防火墙是否开放后端TCP端口。
  ::
  ::accordion-item
  #title
  前端刷新页面后为 404

  #content
  1. 用户未按要求在 Nginx 的 `nginx.conf` 中配置伪静态。

     解决方案：打开 Nginx 的 `nginx.conf` 文件，在 `server` 块中添加 `location / { try_files $uri $uri/ /index.html; }`，如果没有 `server` 块，请参照上方自行添加。

  ::accordion-item
  #title
  感兴趣 Token 失效，10 分钟后再试

  #content
  1. 用户在制作完客户端包后，未删除首次获取的 Token，需要分发客户端包前删除 Token。

     解决方案：打开客户端文件夹 `mchmr`，找到 `config.json` 文件，删除其中的 `token` 字段。
::
