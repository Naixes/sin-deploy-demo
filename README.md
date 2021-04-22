### 工程化部署

快速部署

上云：可扩容

rpc：一种接口协议，速度更快，在 TCP 传输层进行数据对接，数据 protocol buffer

企业部署：

常规，git -> Jenkins -> 服务器

BAT，gitlab -> devops（敏捷开发，包含自己开发的 CI/CD） -> 上云

devops，开发运维一体化，CI/CD+插件化+自动化+可视化

上云，监控、上报、追溯、分析、弹性扩容（按照用户量自动扩容）

工程化发布：

阿里，ali deploy --production

腾讯

向服务器传文件：

ssh+scp，免密登录，端口转发

> pwd # 找到当前路径
>
> scp 当前路径/要拷贝的文件 root@ip:/root/
>
> ssh 端口转发，可以在家里访问内网，公司一般不允许

ftp、sftp

rzsz

#### 实战：监听文件并上传

```js
...
"bin": {
  "ali": "./index.js"
},
// sudo npm link，执行ali
```

包：chokidar 监听文件变动，shelljs

expect 输入密码

代码：https://github.com/Naixes/sin-deploy-demo

ssh 后置命令可以删除上传的文件

#### 实战：node 热部署

如果修改了服务器的文件需要重启才能正常访问，解决：

1. 开启 pm2 的 watch，监听文件变动，自动执行 restart，restart 途中还是会不能访问
2. 热部署可以解决方案 1 的问题，https://github.com/airuikun/node-reload

遍历文件

监视文件变动

- 清除文件缓存
- 处理内存泄漏
- 重新加载
  - 检查代码错误

#### 多机部署

使用配置文件+expect+scp+watch（chokidar）

#### 超大日志文件读取

文件流+多进程