(function ($) {
    $.fn.timeline = function () {
        
        var timeline_container = $(this);
        
        var timelineHeight = 0;
        
        var initialize = function () {
            $.getJSON("js/timeline.json", function (data) {
                $.each(data.events, function (i, data) {
                    if (i % 2 === 0) {
                        var div_data = "<div class='eventContainer'><div class='event aleft'><div class='year'>" + data.year +
                        "</div> <div class='text'>" + data.event + "</div></div><div class='arrow-left aright'></div></div>";
                        $(div_data).appendTo("#timeline");
                    } else {
                        var div_data = "<div class='eventContainer'><div class='arrow-right aleft'></div><div class='event aleft'><div class='year'>" + data.year +
                        "</div> <div class='text'>" + data.event + "</div></div></div>";
                        $(div_data).appendTo("#timeline");
                    }
                });
                addEvents();
            });
            return false;
        };
        
        var setTimeLine = function (i) {
            $(".vline").height(i);
        };
        
        var addEvents = function () {
            $.each($("#timeline .eventContainer"), function (i, val) {
                if (i % 2 === 0) {
                    if (i !== 0)
                    $(val).css("margin-top", timelineHeight);
                    $(val).css("float", "right");
                    $(val).appendTo("#leftEvents");
                } else {
                    if (i === 1)
                    timelineHeight += 10; else if (i > 1)
                    timelineHeight -= 5;
                    $(val).css("margin-top", timelineHeight);
                    $(val).appendTo("#rightEvents");
                }
                
                timelineHeight = $(val).height()-62;
            });
            setTimeLine($("#leftEvents").height() - 20);
        };
        
        var testing = function () {
            var h = $("#timeline").outerHeight();
            console.log(h);
        };
        
        initialize();
    };
})(jQuery);