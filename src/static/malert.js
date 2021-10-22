/*
 * 移动端仿alert弹框 0.1.0
 * Date: 2016-08-08
 * by: xiewei
 * 模拟移动端alert弹出框插件【依赖于flexible.js和jquery或者zepto】
 */
(function($){
    $.malert=function (option) {
        var _win_w = $(window).width();
        var _name = option.name || "_zb_alert_hs_";
        var _bg_opacity = option.bg_opacity || .5;
        var _radius = option.radius || 5;
        var _unit = option.unit || "rem"; //以移动端rem为单位
        var _w = option.width || "6";
        var _h = option.height || "4";
        var _text = option.text;
        var _type = option.type;
        var _buttons = option.buttons;
        //弹框类型
        if(_type=='tip'){
            var _ceng_bg = '<div style="width:100%;height:100%;position:fixed;top:0;left:0;background:#000;opacity:0;z-index: 199999"></div>';
            var _ceng_con = '<div style="width:' + _w + _unit + ';height:' + _h + _unit + ';margin:' + (-_h / 2) + _unit + ' 0 0 ' + (-_w / 2) + _unit + ';border-radius:' + _radius + 'px;position:fixed;top:44%;left:50%;background:#222;opacity:0.9;z-index: 199999">';
            _ceng_con += '<p class="' + _name + '_p" style="color:#fff;font-size:.4rem;text-align:center;padding:0 .2rem"><span>' + _text + '</span></p>';
            _ceng_con += '</div>';
            var _res_html = _ceng_bg + _ceng_con;
            $('body').append(_res_html);
            var _ceng_con_p_h = $('.' + _name + '_p').height() / (_win_w / 10);
            var _ceng_con_p_span_w = $('.' + _name + '_p').children('span').width() / (_win_w / 10);
            if(_ceng_con_p_span_w + 0.6*2>=_w){
                var _ceng_con_p_w=_w-0.6*2;
            }else{
                var _ceng_con_p_w=_ceng_con_p_span_w;
            }
            $('.' + _name + '_p').css({"margin-top": 0.8 + "rem"});
            $('.' + _name + '_p').parent('div').css({"height": (_ceng_con_p_h + 1.6) + "rem","width": (_ceng_con_p_w + 0.6*2) + "rem","margin-left":-(_ceng_con_p_w + 0.6*2)/2+"rem","margin-top":-(_ceng_con_p_h + 0.6)/2+"rem"});
            setTimeout(function(){
                $('.' + _name + '_p').parent('div').prev('div').remove();
                $('.' + _name + '_p').parent('div').remove();
            },1200);
        }else if(_type=='tip02'){
            var _ceng_bg = '<div style="width:100%;height:100%;position:fixed;top:0;left:0;background:#000;opacity:' + _bg_opacity + '"></div>';
            var _ceng_con = '<div style="width:' + _w + _unit + ';height:' + _h + _unit + ';margin:' + (-_h / 2) + _unit + ' 0 0 ' + (-_w / 2) + _unit + ';border-radius:' + _radius + 'px;position:fixed;top:50%;left:50%;background:#fff">';
            _ceng_con += '<div style="width:100%;height:100%;position:relative">';
            _ceng_con += '<div style="width:100%;height:' + (_h - 1.35) + 'rem;padding-top:1px">';
            _ceng_con += '<p class="' + _name + '_p" style="color:#666;font-size:.4rem;text-align:center;padding:0 .5rem">' + _text + '</p>';
            _ceng_con += '</div>';
            _ceng_con += '<div style="width:100%;height:1rem;position:absolute;bottom:.35rem;left:0">';
            if(_buttons){
                if(_buttons.length>2){
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;margin:0 .35rem;border-radius:4px;text-align:center;line-height:1rem;background:#73d13a;color:#fff;font-size:.38rem">'+_buttons[0]+'</a>';
                }
                if(_buttons.length === 1){
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;margin:0 .35rem;border-radius:4px;text-align:center;line-height:1rem;background:#73d13a;color:#fff;font-size:.38rem">'+_buttons+'</a>';

                }
                else{
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;float:left;width:'+(_w-1.05)/2+'rem;text-align:center;line-height:1rem;background:#73d13a;color:#fff;font-size:.38rem;margin:0 .35rem 0 .35rem;border-radius:4px">'+_buttons[0]+'</a>';
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_ok_btn" style="display:block;height:1rem;float:left;width:'+(_w-1.05)/2+'rem;text-align:center;line-height:1rem;background:#73d13a;color:#fff;font-size:.38rem;border-radius:4px">'+_buttons[1]+'</a>';
                }
            }else{
                _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;float:left;width:'+(_w-1.05)/2+'rem;text-align:center;line-height:1rem;background:#73d13a;color:#fff;font-size:.38rem;margin:0 .35rem 0 .35rem;border-radius:4px">取消</a>';
                _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_ok_btn" style="display:block;height:1rem;float:left;width:'+(_w-1.05)/2+'rem;text-align:center;line-height:1rem;background:#73d13a;color:#fff;font-size:.38rem;border-radius:4px">确定</a>';
            }
            _ceng_con += '</div>';
            _ceng_con += '</div>';
            _ceng_con += '</div>';
            var _res_html = _ceng_bg + _ceng_con;
            $('body').append(_res_html);
            var _ceng_con_p_h = $('.' + _name + '_p').height() / (_win_w / 10);
            var pingfen_top = (_h - 1 - _ceng_con_p_h) / 2;
            $('.' + _name + '_p').css({"margin-top": pingfen_top + "rem"});
            $('.' + _name + '_cancle_btn').click(function () {
                $(this).parent('div').parent('div').parent('div').prev('div').remove();
                $(this).parent('div').parent('div').parent('div').remove();
                if(option.cancle){
                    option.cancle();
                }
            });
            $('.' + _name + '_ok_btn').click(function () {
                $(this).parent('div').parent('div').parent('div').prev('div').remove();
                $(this).parent('div').parent('div').parent('div').remove();
                if(option.ok){
                    option.ok();
                }
            });
        }else{
            var _ceng_bg = '<div style="width:100%;height:100%;position:fixed;top:0;left:0;background:#000;opacity:' + _bg_opacity + '"></div>';
            var _ceng_con = '<div style="width:' + _w + _unit + ';height:' + _h + _unit + ';margin:' + (-_h / 2) + _unit + ' 0 0 ' + (-_w / 2) + _unit + ';border-radius:' + _radius + 'px;position:fixed;top:50%;left:50%;background:#fff">';
            _ceng_con += '<div style="width:100%;height:100%;position:relative">';
            _ceng_con += '<div style="width:100%;height:' + (_h - 1) + 'rem;padding-top:1px">';
            _ceng_con += '<p class="' + _name + '_p" style="color:#666;font-size:.4rem;text-align:center;padding:0 .5rem">' + _text + '</p>';
            _ceng_con += '</div>';
            _ceng_con += '<div style="width:100%;height:1rem;position:absolute;bottom:0;left:0;border-top:1px solid #e6e6e6">';
            if(_buttons){
                if(_buttons.length<2){
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;float:left;width:100%;text-align:center;line-height:1rem;color:#73d13a;font-size:.38rem">'+_buttons[0]+'</a>';
                }
                else{
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;float:left;width:50%;text-align:center;line-height:1rem;color:#73d13a;font-size:.38rem">'+_buttons[0]+'</a>';
                    _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_ok_btn" style="display:block;height:1rem;float:left;width:50%;text-align:center;line-height:1rem;color:#73d13a;font-size:.38rem;margin-left:-1px;border-left:1px solid #e6e6e6">'+_buttons[1]+'</a>';
                }
            }else{
                _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_cancle_btn" style="display:block;height:1rem;float:left;width:50%;text-align:center;line-height:1rem;color:#73d13a;font-size:.38rem">取消</a>';
                _ceng_con += '<a href="javascript:void(0)" class="' + _name + '_ok_btn" style="display:block;height:1rem;float:left;width:50%;text-align:center;line-height:1rem;color:#73d13a;font-size:.38rem;margin-left:-1px;border-left:1px solid #e6e6e6">确定</a>';
            }
            _ceng_con += '</div>';
            _ceng_con += '</div>';
            _ceng_con += '</div>';
            var _res_html = _ceng_bg + _ceng_con;
            $('body').append(_res_html);
            var _ceng_con_p_h = $('.' + _name + '_p').height() / (_win_w / 10);
            var pingfen_top = (_h - 1 - _ceng_con_p_h) / 2;
            $('.' + _name + '_p').css({"margin-top": pingfen_top + "rem"});
            $('.' + _name + '_cancle_btn').click(function () {
                $(this).parent('div').parent('div').parent('div').prev('div').remove();
                $(this).parent('div').parent('div').parent('div').remove();
                if(option.cancle){
                    option.cancle();
                }
            });
            $('.' + _name + '_ok_btn').click(function () {
                $(this).parent('div').parent('div').parent('div').prev('div').remove();
                $(this).parent('div').parent('div').parent('div').remove();
                if(option.ok){
                    option.ok();
                }
            });
        }
    }
})(jQuery);