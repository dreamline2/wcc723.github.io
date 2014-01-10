---
layout: post
cTitle: Jekyll Bootstrap
category: jekyll
tagline: 之到處都可以看到的 Framework
tags: [jekyll, github, git]
cssdemo: 
thumbnail: 2014-01-02_165953.png
---
Bootstrap是一套好用的framework，而jekyll就利用bootstrap的便利建立一套jekyll framework，稱作為Jekyll Bootstrap。除了版型外，還另外增加許多實用的模組，如Disqus、google analytic等等，本篇就來介紹如何在github上建立jekyll bootstrap。

<!-- more -->
## 本篇重點
接續前篇github的使用，請務必先參考前一篇的內容。而本篇會進一步的使用jekyll bootstrap，且建立在前篇所建立的github page，最後在介紹常用的jekyll bootstrap元件。

## 安裝Jekyll bootstrap

透過Jekyll bootstrap號稱可以從0開始到建立一個Blog只要3分鐘，但根據我的經驗...第一次建立應該要超過10分鐘，除非這流程已經練習好幾次了。

[Jekyll bootrap](http://jekyllbootstrap.com/)

透過以上連結就可以到Jekyll bootrap的官方網站，詳細的介紹會放在文章的後半段，前半段會直接介紹如何安裝。再到Jekyll bootrap網站後，直接點選Code on Github。

![](/images/2014-01-02_165953.png)

到了github上，就把整個code下載到本機，而這邊我是直接Download zip。

![](/images/2014-01-02_170007.png)


下圖的左方是本機端(上次的github page資料夾)，右方則是下載的jekyll bootstrap，就把他們整個複製到本機端吧！

![](/images/2014-01-02_170143.png)

接下來打開`git shell`，如果是mac os可以打開`terminal`，依序輸入以下git指令，將jekyll bootstrap上傳到github page伺服器。

	git add --all
	git commit -m "jekyll bootstrap"
	git push

![](/images/2014-01-02_170404.png)

![](/images/2014-01-02_170557.png)

### 完成

最後只要輸入`username.github.io`就可以看到以下的網站，這樣就代表成功了。

參考[http://wcc723demo.github.io/](http://wcc723demo.github.io/)

![](/images/2014-01-02_170719.png)

------------------

## 設定
