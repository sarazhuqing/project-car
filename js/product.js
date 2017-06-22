loadPage(1);
function loadPage(page){

	$.ajax({
    url:'data/page1.php?pageNo='+page,
    success:function(data){
        var html="";
        for(var i=0;i<data.data.length;i++){
            var obj=data.data[i];
            html+=`
            <li>
                <a href=""><img src="${obj.pic}" alt=""/></a>
                <p><span>￥</span>${obj.price}</p>
                <h1><a href="">${obj.pname}</a></h1>
            </li>
            `;
        }
        $("#product ul").html(html);
console.log(data.pageNo);
        getPage(data.pageNo);
    },
    error:function(){
        alert("请求商品出错，请检查网络")
    }
});

}

/*分页*/
function getPage(pageNo){
    $.get('data/page.php',function(data){
        var total=data;
        var html='';
        for(var i=1;i<=total;i++){
            if(i==pageNo){
                html+=`<li class="active"><a href="#">${i}</a></li>`;
            }else{
                html+=`<li><a href="#">${i}</a></li>`;
            }

        }
        $(".pager").html(html);


    })
}

$('ol.pager').on('click','a',function(e){

    e.preventDefault();
    var p=$(this).html();
    loadPage(p);

});
