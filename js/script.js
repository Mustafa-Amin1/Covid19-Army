window.onload = function(){
setTimeout(() => {
  ready() 
    }, 1000);
};
function ready() {
    document.getElementsByClassName('body-layer')[0]
    document.getElementsByClassName('body-layer')[0].style.display="none"
  
  }
//======================== start numbers counter animation=========================
$(function () {
    var fx = function fx() {
        $(".animated__number").each(function (i, el) {
            var data = parseInt(this.dataset.n, 10);
            var props = {
                "from": {
                    "count": 0
                },
                "to": {
                    "count": data
                }
            };
            $(props.from).animate(props.to, {
                duration: 4500 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete: function () {
                    if (el.dataset.sym !== undefined) {
                        el.textContent = el.textContent.concat(el.dataset.sym)
                    }
                }
            });
        });
    };

    var reset = function reset() {
        //console.log($(this).scrollTop())
        if ($(this).scrollTop() > 1500) {
            $(this).off("scroll");
            fx()
        }
    };

    $(window).on("scroll", reset);
});
//======================== End numbers counter animation=========================

// ========================Start chart animation ==========================
var progress = document.getElementById('animationProgress');
var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Deaths',
                fill: false,
                borderColor: window.chartColors.red,
                backgroundColor: window.chartColors.red,
                data: 
                [
                    17, 259, 2977, 49233, 280224
                ]
            },
            {
            label: 'Coronavirus Cases ',
            fill: false,
            borderColor: window.chartColors.blue,
            backgroundColor: window.chartColors.blue,
            data: [
                580,
                11950,
                86604,
                789130,
                4098288,
            ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Animation Progress Bar'
        },
        animation: {
            duration: 2000,
            onProgress: function (animation) {
                progress.value = animation.currentStep / animation.numSteps;
            },
            onComplete: function () {
                window.setTimeout(function () {
                    progress.value = 0;
                }, 2000);
            }
        }
    }
};
var mychart = function reset() {
    if ($(this).scrollTop() > 1500) {
        $(this).off("scroll");
        var ctx = document.getElementById('canvas').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
};
$(window).on("scroll", mychart);


