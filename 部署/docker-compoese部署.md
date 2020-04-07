docker-compose常见问题:
修改了docker-compose.yml，必须删除当前的container，再启动创建新的container才行？
也就是？好像只能重新 docker-compose build 然后 docker-compose up -d

解决:
docker-compose up -d 作用是创建与启动容器，会重建有变化的服务器（删掉以前建立的容器）
docker-compose up -d --no-create 如果存在与yaml中描述的容器就会直接启动，不会重建
stop start retart只是针对已存在容器的操作。


mysql容器执行sql语句：


dockerfile编译
注意最后的 . 一定要加，意思是默认路径是当前路径，不加会报错
# 注意最后的 . 
docker build -t image_name .
# 也可以直接添加tag属性
docker build -t image_name:tag .

docker run -p 8010:8010 -it --name s_export slurm-export
-p: 设置本地端口与映射端口；--name: 设置container名称；-i : 以交互模式运行容器，通常与 -t 同时使用；-t : 为容器重新分配一个伪输入终端，通常与 -i 同时使用


进入容器中修改内容

查看单个容器日志
docker-compose logs -f nginx 
进入容器
docker-compose exec container_name bash 

/usr/share/nginx/html/backend/admin" failed 


一定要在虚拟环境中

ALLOWED_HOSTS配置
