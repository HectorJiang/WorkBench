<template>
<div class="row">
<div class="archive col-md-12 col-lg-12 col-sm-12 content-area">
    <main>
        <header class="entry-header border-bottom">
            <h2 class="entry-title p-name">
                <a href="#">{{article.title}}</a>
            </h2>
        </header>
        <article ref="prev">
        </article>
        <!-- <nav class="post-navigation navbar border-top">
            <div><div>上一篇</div><a href="https://www.misterma.com/archives/336/" title="使用 Xshell 远程登录 Linux 服务器">使用 Xshell 远程登录 Linux 服务器</a></div>
            <div><div class="text-lg-right text-xl-right text-md-right">下一篇</div><a href="https://www.misterma.com/archives/360/" title="Linux 压缩和解压 zip">Linux 压缩和解压 zip</a></div>
        </nav> -->
        <div id="comments" aria-label="评论区">
            <div id="respond-post-354" class="respond border-top">
                <div class="cancel-comment-reply">
                    <a id="cancel-comment-reply-link" href="https://www.misterma.com/archives/354/#respond-post-354" rel="nofollow" style="display:none" onclick="return TypechoComment.cancelReply();">取消回复</a> </div>

                <h2 id="response">发表评论</h2>
                <form method="post" action="https://www.misterma.com/archives/354/comment" id="comment-form" role="form">
                    <div class="row">
                        <!--评论内容输入-->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                            <label for="textarea" class="required">评论内容</label>
                            <textarea name="text" id="textarea" class="textarea form-control" required="" placeholder="请在此处输入评论内容"></textarea>
                        </div>
                        <!--Emoji表情面板-->
                        <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-12 form-group"> -->
                        <!-- <button type="button" class="btn btn btn-outline-secondary btn-sm" data-target="#emoji-box" data-toggle="collapse" aria-expanded="false" aria-controls="emoji-box" id="show-emoji" url="https://www.misterma.com/usr/themes/MWordStar/emoji.php">
                            <span>😀</span>
                            <span>Emoji表情</span>
                        </button> -->
                        <!-- <div id="emoji-box" class="collapse" aria-label="表情面板">
                            <div class="mt-2 mb-2 border">
                                <div class="emoji-classification border-bottom" aria-label="表情类型">
                                    <button aria-label="表情" title="表情" type="button" class="btn btn btn-outline-secondary btn-sm" classification="smileys">😀</button>
                                    <button aria-label="人物/手势" title="人物/手势" type="button" class="btn btn btn-outline-secondary btn-sm" classification="character">👦</button>
                                    <button aria-label="服装/配饰" title="服装/配饰" type="button" class="btn btn btn-outline-secondary btn-sm" classification="clothing">👕</button>
                                    <button aria-label="动物/自然" title="动物/自然" type="button" class="btn btn btn-outline-secondary btn-sm" classification="animal">🐶</button>
                                    <button aria-label="食物" title="食物" type="button" class="btn btn btn-outline-secondary btn-sm" classification="food">🍏</button>
                                    <button aria-label="运动" title="运动" type="button" class="btn btn btn-outline-secondary btn-sm" classification="motion">⚽</button>
                                    <button aria-label="旅行/地点" title="旅行/地点" type="button" class="btn btn btn-outline-secondary btn-sm" classification="tourism">🚚</button>
                                    <button aria-label="物体" title="物体" type="button" class="btn btn btn-outline-secondary btn-sm" classification="objects">⌚</button>
                                    <button aria-label="符号" title="符号" type="button" class="btn btn btn-outline-secondary btn-sm" classification="symbols">❤</button>
                                </div>
                                <div class="emoji-select ml-2 mr-2 clearfix" aria-label="表情选择">
                                    <div class="d-flex justify-content-center text-info m-3">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only">正在加载 Emoji</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- </div> -->
                        <!--姓名输入-->
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12 form-group">
                            <label for="author" class="required">姓名</label>
                            <input type="text" name="author" id="author" class="text form-control" value="" required="required" placeholder="请输入您的姓名或昵称" maxlength="20">
                        </div>
                        <!--Email输入-->
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12 form-group">
                            <label for="mail" class="required">电子邮件地址</label>
                            <input type="email" name="mail" id="mail" class="text form-control" value="" required="required" placeholder="请输入您的电子邮件地址" maxlength="64">
                        </div>
                        <!--提交按钮-->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                            <button type="submit" class="submit btn btn-secondary">提交评论</button>
                        </div>
                    </div>
                    <input type="hidden" name="_" value="a588f095e96a9cb14fe5cebbdff03109">
                </form>
            </div>
        </div>
    </main>
</div>
<div class="col-md-12 col-lg-4 col-sm-12 sidebar">
    <!-- <Profile /> -->
    <!-- <section class="content">
        <h4>博客目录</h4>
        <ul class="list-group list-group-flush" aria-label="博客目录">
            <a href="#标题一">
                <li class="d-flex justify-content-between align-items-center border-bottom">
                    标题一
                </li>
            </a>
            <li class="d-flex justify-content-between align-items-center border-bottom">
                标题二
            </li>
            <li class="d-flex justify-content-between align-items-center border-bottom">
                标题三
            </li>
        </ul>
    </section> -->
</div>    
</div>
</template>
<script>

//import Vditor from "vditor";
import VditorPreview from "vditor/dist/method.min.js";

export default {
    data() {
        return {
            id: this.$route.params.id,
            article: ""
        }
    },
    methods: {
        test(){
            
        },
        //请求数据
        getData() {
            this.$http.get("/articles/" + this.$route.params.id).then(res => {
                console.log(res)
                if (res.data.code == "200") {
                    this.article = res.data.result;
                    console.log(this.article)
                }
            }, error => {

            })
        }
    },
    created() {
        this.getData();
        this.test();
    },
    //生命周期函数：挂载完成
    updated() {
        VditorPreview.preview(this.$refs.prev,
            this.article.content, {
                hljs: {
                    style: 'native',
                    lineNumber: true
                },
                speech: {
                    enable: false
                },
                anchor: true,
                markdown: {
                    toc: true,
                }
            });
    }
}
</script>

<style>
.content {
    top: 86px;
    position: fixed;
    width: 350px;
}
</style>
