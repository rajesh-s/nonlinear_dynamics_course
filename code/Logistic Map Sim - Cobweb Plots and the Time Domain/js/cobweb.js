var webData = [];
var g2 = [];
var iterates = [];
var xL;
var rL;
var iL;
var currBif = [];
var zeroN;



//Logistic Map

function f(x, r) {
    // return the value of x_n+1
    return (+r) * (+x) * (1 - x);
}

function cobweb(n, x0, r) {
    currBif = [];
    var x = (+x0); // initial value of x is 0
    var y = 0.; // initial value of y is y0
    iterates = [];
    rL = (+r);
    if ((+n) > 0) {
        g2 = [
            [x, x],
            [x, f(x, (+r))]
        ]; // start with initial conditions
        //just added this line to try and fix IC
        iterates.push([0, x0]);
        // loop for required number of iterations
        for (var i = 1; i <= (+n); i++) {
            p = cobwebiter(x, r);
            x = p[0];
            y = p[1];
            xL = x;
            iterates.push([i, x]);
            currBif.push([(+r), x]);
        }
        iL = (+n);
    } else {
        g2 = [];
        iterates = [];
        xL = (+x0);
        iL = 1;
        zeroN = true;
    }
    //plotBifurcationDiagram();
    plotTS();
    webData = [];
    for (var i = 0; i <= 40; i++)
        webData.push([i / 40, f(i / 40, r)]);
    plotCobWebPlot();
}

function cobwebiter(x0, r) {
    // Perform iterations of the logistic map
    var x = +f(x0, r);
    var y = +f(x, r);

    // Add data to the plot as well.
    g2.push([x, x]);
    g2.push([x, y]);

    return [x, y];
}


function addIterate() {

    if (zeroN) {
        g2 = [
            [xL, xL],
            [xL, f(xL, rL)]
        ];
        zeroN = false;
    } else {
        p = cobwebiter(xL, rL);
        xL = p[0];
        iL = iL + 1;
        iterates.push([iL, xL]);
        //currBif.push([rL,xL]);
    }
    //Update Plots
    plotCobWebPlot();
    plotTS();
}


function removeIterate() {
    g2.shift()
    g2.shift()
    iterates.shift();
    //Update Plots
    plotCobWebPlot();
    plotTS();
}


function startAnimate() {
    //Remove an Iterate
    g2.shift()
    g2.shift()
    iterates.shift();
    //Add an Iterate
    p = cobwebiter(xL, +rL);
    xL = p[0];
    iL = iL + 1;
    //currBif.push([rL,xL]);
    iterates.push([iL, xL]);
    animate = true;
    //Replot
    //if ($("#enableBifAnimate:checked").length > 0 && plotCurrIterates) {plotBifurcationDiagram();}
    plotCobWebPlot();
    plotTS();
    //setTimeout(update, updateInterval);
    setTimeout(function() {
        if (animate) {
            startAnimate()
        }
    }, 30);
}

function stopAnimate() {
    animate = false;
}




function plotCobWebPlot() {
    $.plot($("#cobwebPlot"), [{
            label: "r=" + rL,
            data: webData,
            clickable: false
        },
        {
            data: [
                [0, 0],
                [1, 1]
            ]
        },
        {
            label: "cobweb",
            data: g2,
            lines: {
                show: true
            },
            color: "red",
            clickable: false
        }
    ], {
        grid: {
            hoverable: true,
            clickable: true
        },

        yaxis: {
            min: 0,
            max: 1.2
        },
        selection: {
            mode: "y"
        }
    }); //end of $plot
}

function plotTS() {
    $.plot("#tsPlot", [{
        data: iterates,
        points: {
            show: true
        },
        color: "red"
    }], {
        yaxis: {
            min: 0,
            max: 1
        }
    });
}


///This is all the setup stuff
$(function() {
    $("<div id='tooltip'></div>").css({
        position: "absolute",
        display: "none",
        border: "1px solid #fdd",
        padding: "2px",
        "background-color": "#fee",
        opacity: 0.80
    }).appendTo("body");

    $("#cobwebPlot").bind("plothover", function(event, pos, item) {
        strY = pos.y;
        if (4 * pos.y >= 4) {
            strY = 4;
        } else if (4 * pos.y <= 0) {
            strY = 0;
        } else {
            strY = 4 * pos.y
        }
        strY = strY.toFixed(2);


        if (item) {
            var x = item.datapoint[0].toFixed(2),
                y = item.datapoint[1].toFixed(2);
        }

    });
    pointSIZE = $("#pointsize").val();
    //This sets up the plot click actions on the cobwebPlot
    $("#cobwebPlot").bind("plotclick", function(event, pos, item) {
        if (item) {
            strY = pos.y;
            $("#clickdata").text(" - click point " +
                item.dataIndex + " in " +
                item.series.label + " new R = " + strY);
            plot.highlight(item.series, item.datapoint);

            //strY = pos.y;
            if (4 * pos.y >= 4) {
                strY = 4;
            } else if (4 * pos.y <= 0) {
                strY = 0;
            } else {
                strY = 4 * pos.y
            }

            strY = strY.toFixed(2);
            $("#clickdata").text(" - click point " +
                item.dataIndex + " in " +
                item.series.label + " new R = " + strY);
        }
        $("#param").val(strY);
        cobweb($("#iterations").val(), $("#initial").val(), strY);
    });
    if (typeof $.fn.prop != 'function') {
        $.fn.prop = $.fn.attr;
    }



    $("#cobwebPlot").bind("plotunselected", function(event) {
        $("#selection").text("");
    });



    $("#clearSelection").click(function() {
        plot.clearSelection();
    });






    cobweb(50, 0.2, 3, 0);

});