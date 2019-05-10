# 学习vscode开发php
## 安装xampp
## 安装
  - - 在网站https://www.apachefriends.org/zh_cn/index.html下载xampp，安装 
  - - 把php.exe所在文件夹添加进系统变量path中
  - - 在cmd输入php -v可以看到是否成功，成功会显示版本信息
## 配置 xampp=>control Pannel
  ### httpd.config 
     ···
        Listen 8082 #主要 80端口已经再用
        Listen 9000 #调试路径要用的端口
        Include conf/extra/httpd-vhosts.conf  #不能注释
     ···
  ### mysql=>my.ini
  + port=3037 #修改端口
  ### C:\xampp\apache\conf\extra\httpd-vhosts.conf
  ``` 
            <VirtualHost *:9000>
            DirectoryIndex test.php 
            DocumentRoot "D:/C/github/php/"
            ServerName localhost
            ErrorLog "logs/spider"
            CustomLog "logs/dspider" common
            </VirtualHost>
            <Directory "D:/C/github/php/">  
                Options Indexes FollowSymLinks Includes ExecCGI  
                AllowOverride All  
                Require all granted  
            </Directory>
 ```
 ### 验证成功
  + 在cmd窗口，执行netstat -an 看本机是否有监听 9000端口
  + 在D:/C/github/php/文件夹里新建一个test.php文件。注意，一定要以打开文件夹的形式才能成功设置断点调试，单个文件无效
  + 点击齿轮，选择php->选择listen for xdebug
## 监听调试
 ### 安装
        *  把 php -i>>tes.txt 后 text里的文本放入输入框
        *  https://xdebug.org/wizard.php
        *  Analyse my phpinfo() output确定
        *  将下载的php_xdebug-2.6.1-7.2-vc15.dll插进拷贝进xampp/php/ext文件夹中
 ### C:\xampp\php\php.ini 在最后面加上,9010是vscode监听的debug端口
 ``` 
    [xdebug]
    zend_extension=C:\xampp\php\ext\php_xdebug-2.6.1-7.2-vc15.dll
    xdebug.remote_enable = 1
    xdebug.remote_autostart = 1
    xdebug.remote_host=127.0.0.1
    xdebug.remote_port=9010
```
 ### Vscode
 #### 设置
        右侧栏中点击扩展，输入xdebug，出来的php debug，点击安装
        在菜单栏：文件->首选项->配置，右边新增加一行配置：
        “php.validate.executablePath”: “C:/xampp/php/php.exe”
 #### .vscode\launch.json
··· 
                    {
                // 使用 IntelliSense 了解相关属性。 
                // 悬停以查看现有属性的描述。
                // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
                "version": "0.2.0",
                "configurations": [
                    {
                        "name": "Listen for XDebug",
                        "type": "php",
                        "request": "launch",
                        "port": 9010
                    },
                    {
                        "name": "Launch currently open script",
                        "type": "php",
                        "request": "launch",
                        "program": "${file}",
                        "cwd": "${fileDirname}",
                        "port": 9001
                    }
                ]
            }
···
    
