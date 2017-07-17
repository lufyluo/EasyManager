app.provider('cueProvider', function(){
    return {
        $get: function () {
            return {
                /**
                 * @mainText 主内容
                 * @confText 副标题
                 * @backFn 回调函数
                 */
                alerts: function(mainText,confText,backFn){
                    $('body').append('<div class="cue-mask active">\
                                        <div class="cue-main">\
                                            <div class="cue-window alerts-window">\
                                                <div class="text-main">\
                                                    '+mainText+'\
                                                </div>\
                                                <div class="text-conf">\
                                                    '+confText+'\
                                                </div>\
                                                <div class="text-control">\
                                                    <span class="close-btn">确定</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                      </div>');
                    $('.cue-mask').fadeIn();
                    $('.close-btn').one('click',function(){
                        backFn?backFn():true;
                        $('.cue-mask').fadeOut(500,function(){
                            $('.cue-mask').remove();
                        });
                    })
                },
                /**
                 * @mainText 主内容
                 * @type 样式类型
                 */
                tips:function(mainText,type){
                    var htmlString = ''
                    switch(type){
                        case 'success':
                            htmlString = 'icon-icon_success';  
                            break; 
                        case 'tips':
                            htmlString = 'icon-icon_caution';  
                            break;   
                        case 'error':
                            console.log('error');  
                            htmlString = 'icon-cuowu';
                            break;                   
                    };
                    $('body').append('<div class="cue-mask active bgn">\
                                        <div class="cue-main">\
                                            <div class="cue-window tips-window obg">\
                                                <i class="iconfont '+htmlString+'"></i><span>'+mainText+'</span>\
                                            </div>\
                                        </div>\
                                      </div>');
                    $('.cue-mask').fadeIn();
                    if(type!='tips'){
                        $('.cue-mask').delay(1000).fadeOut(500,function(){
                            $('.cue-mask').remove();
                        });
                    }

                },
                /**
                 * @mainText 主内容
                 * @confText 副标题
                 * @successFn 点确定后执行的方法
                 * @closeFn 点取消后执行的方法
                 */
                confirm:function(mainText,confText,successFn,closeFn){
                    $('body').append('<div class="cue-mask active">\
                                        <div class="cue-main">\
                                            <div class="cue-window alerts-window">\
                                                <div class="text-main">\
                                                    '+mainText+'\
                                                </div>\
                                                <div class="text-conf">\
                                                    '+confText+'\
                                                </div>\
                                                <div class="confirm-control clearfix">\
                                                    <span class="ok-btn">确定</span>\
                                                    <span class="close-btn">取消</span>\
                                                </div>\
                                            </div>\
                                        </div>\
                                      </div>');
                    $('.cue-mask').fadeIn();
                    $('.close-btn').one('click',function(){  
                        closeFn?closeFn():true;                       
                        $('.cue-mask').fadeOut(500,function(){
                            $('.cue-mask').remove();
                        });
                    })
                    $('.ok-btn').one('click',function(){ 
                        successFn?successFn():true;                       
                        $('.cue-mask').fadeOut(500,function(){
                            $('.cue-mask').remove();
                        });
                    })
                },
                loadingOpen:function(){
                    $('body').append('<div class="cue-mask active">\
                                        <div class="cue-main">\
                                            <div class="cue-window tips-window lmw">\
                                                <img src="../images/loading.gif" width="100px" />\
                                            </div>\
                                        </div>\
                                      </div>');
                    $('.cue-mask').fadeIn();
                },
                loadingClose:function(backFn){
                    $('.cue-mask').fadeOut(500,function(){
                        $('.cue-mask').remove();
                        if(backFn){
                            backFn();
                        }
                    });
                }

            }
        }
    }
})