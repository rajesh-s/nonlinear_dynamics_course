var beta = 0.5;
var g = 1;
var A = 0; //1.5;
var driveFreq = 0;
var theta0 = 0.78539;
var omega0 = 0.78539;

var maxTrajLength = 100;
var currLength = 0;
var animate = true;
var traj = [
    [theta0, omega0]
];
var h = 0.1;
var thetaTS = [theta0]
var omegaTS = [omega0];
var currPoint = [theta0, omega0];


function generateTrajectory(betaIn, AIn, driveFreqIn, theta0In, omega0In, maxTrajLengthIn, stepIn) {
    animate = true;
    currLength = 0;
    beta = (+betaIn);
    A = (+AIn); //1.5;
    driveFreq = (+driveFreqIn); // .66666666;
    theta0 = (+theta0In);
    maxTrajLength = (+maxTrajLengthIn);
    omega0 = (+omega0In);
    h = (+stepIn);
    thetaTS = [theta0]
    omegaTS = [omega0];
    traj = [
        [theta0, omega0]
    ];


    for (var i = 0; i < maxTrajLength; i++) {
        currLength = currLength + 1;
        time = h * currLength;
        p = rk4(theta0, omega0, h * currLength, h);
        //p[0] = (p[0].mod(Math.PI)-Math.PI);
        theta0 = p[0];
        omega0 = p[1];
        if (p[0] > Math.PI) {
            p[0] -= 2 * Math.PI;
            theta0 = p[0];
        }
        if (p[0] < -Math.PI) {
            p[0] += 2 * Math.PI;
            theta0 = p[0];
        }
        traj.push(p);
        thetaTS.push([time, p[0]]);
        omegaTS.push([time, p[1]]);

    }
    currPoint = [Math.sin(p[0]), -Math.cos(p[0])];
    updatePlots();


}


function removeTrans() {

    var toRemove = 25;
    //for (var i=1;i<toRemove;i++){
    thetaTS.splice(0, toRemove);
    omegaTS.splice(0, toRemove);
    traj.splice(0, toRemove);

    //thetaTS.shift();
    //omegaTS.shift();
    //traj.shift();
    //}
    updatePlots();


}




function setup(betaIn, AIn, driveFreqIn, theta0In, omega0In, maxTrajLengthIn, stepIn) {

    animate = true;
    currLength = 0;
    beta = (+betaIn);
    A = (+AIn); //1.5;
    driveFreq = (+driveFreqIn); // .66666666;
    theta0 = (+theta0In);
    maxTrajLength = (+maxTrajLengthIn);
    omega0 = (+omega0In);
    h = (+stepIn);
    thetaTS = [theta0]
    omegaTS = [omega0];
    traj = [
        [theta0, omega0]
    ];


    //   for (var i=0;i<maxTrajLength;i++){
    //	currLength = currLength+1;
    //	time = h*currLength;
    //	p = rk4(theta0,omega0,h*currLength,h);
    //	//p[0] = (p[0].mod(Math.PI)-Math.PI);
    //	theta0 = p[0];
    //	omega0 = p[1];
    //	 if (p[0] > Math.PI) { p[0] -=2*Math.PI;theta0 = p[0];}
    //	if (p[0] < -Math.PI) { p[0] += 2*Math.PI; theta0 = p[0]; }
    //	traj.push(p);
    //	thetaTS.push([time,p[0]]);
    //	omegaTS.push([time,p[1]]);

    //}
    currPoint = [Math.sin(theta0), -Math.cos(omega0)];
    updatePlots();


    //This code will make it periodic boundary conditions 
    // if (p[0] > Math.PI) { p[0] -=2*Math.PI;}
    // if (p[0] < -Math.PI) { p[0] += 2*Math.PI; 
    // }


}







function animateTrajectory() {
    animate = true;
    currLength = currLength + 1;
    time = h * currLength;
    //document.getElementById("error").innerHTML =time.toString()
    p = rk4(theta0, omega0, h * currLength, h);
    //p[0] = (p[0].mod(Math.PI)-Math.PI);
    theta0 = p[0];
    omega0 = p[1];


    //This code will make it periodic boundary conditions 
    if (p[0] > Math.PI) {
        p[0] -= 2 * Math.PI;
        theta0 = p[0];
    }
    if (p[0] < -Math.PI) {
        p[0] += 2 * Math.PI;
        theta0 = p[0];
    }
    //document.getElementById("demo").innerHTML ="theta = " + p[0].toString()
    //document.getElementById("error").innerHTML ="omega = " + p[1].toString()

    currPoint = [Math.sin(p[0]), -Math.cos(p[0])];
    if (currLength <= maxTrajLength) {
        traj.push(p);
        //traj.push([p[0]%2*Math.pi,p[1]%(2*Math.pi)]);
        thetaTS.push([time, p[0]]);
        omegaTS.push([time, p[1]]);
    } else {
        traj.shift();
        //traj.push([p[0]%2*Math.pi,p[1]%(2*Math.pi)]);
        traj.push(p);
        thetaTS.push([time, p[0]]);
        omegaTS.push([time, p[1]]);
        thetaTS.shift();
        omegaTS.shift();
    }


    updatePlots();


    setTimeout(function() {
        if (animate) {
            animateTrajectory()
        }
    }, 10);

}

function updatePlots() {

    $.plot("#phasePlot", [{
        data: traj,
        points: {
            show: true,
            radius: 1
        },
        color: "red",
        shadowsize: 0
    }], {
        yaxis: {
            min: -Math.PI,
            max: Math.PI
        },
        xaxis: {
            min: -Math.PI,
            max: Math.PI
        }




    });

    //	]);
    //pendulumPlot
    $.plot("#pendulumPlot", [{
            data: [
                [0, 0], currPoint
            ],
            lines: {
                show: true
            },
            color: "red"
        },
        {
            data: [currPoint],
            points: {
                show: true
            },
            color: "black"
        }
    ], {
        yaxis: {
            min: -1.2,
            max: 1.2,
            tickLength: 0
        },
        xaxis: {
            min: -1.2,
            max: 1.2,
            tickLength: 0
        },
        grid: {
            show: false
        }
    });






    $.plot("#tsPlot", [{
            label: "theta",
            data: thetaTS,
            points: {
                show: true,
                radius: 1
            },
            shadowsize: 0
        },
        {
            label: "omega",
            data: omegaTS,
            lines: {
                show: true
            }
        }
    ], {
        yaxis: {
            min: -Math.PI,
            max: Math.PI
        }



    });

}


function stopAnimate() {
    animate = false;
}


function thetadot(x, w, t) {
    //thetadot = omega
    return (+w);
}

function omegadot(x, w, t) {
    return -beta * w - g * Math.sin(x) + A * Math.sin(driveFreq * t);

}

function rk4(x, v, t, h) {
    // Returns final (position, velocity) array after time dt has passed.
    //        x: initial position
    //        v: initial velocity
    //        a: acceleration function a(x,v,dt) (must be callable)
    //        dt: timestep

    var x1 = x;
    var v1 = v;

    var k1 = thetadot(x1, v1, t);
    var j1 = omegadot(x1, v1, t);



    var x2 = x + 0.5 * k1 * h;
    var v2 = v + 0.5 * j1 * h;

    var k2 = thetadot(x2, v2, t + h / 2);
    var j2 = omegadot(x2, v2, t + h / 2);


    var x3 = x + 0.5 * k2 * h;
    var v3 = v + 0.5 * j2 * h;
    var k3 = thetadot(x3, v3, t + h / 2);
    var j3 = omegadot(x3, v3, t + h / 2);


    var x4 = x + k3 * h;
    var v4 = v + j3 * h;
    var k4 = thetadot(x4, v4, t + h);
    var j4 = omegadot(x4, v4, t + h);

    var xf = x + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
    var vf = v + (h / 6) * (j1 + 2 * j2 + 2 * j3 + j4);

    return [xf, vf];
}




function predefinedSelection(selection) {

    if (selection == 's1cycle') {
        $("#betaIn").val("0.5");
        $("#driveFreqIn").val("0.6666666666");
        $("#AIn").val("0.2");
    } else if (selection == 'l1cycle') {
        $("#betaIn").val("0.5");
        $("#driveFreqIn").val("0.6666666666");
        $("#AIn").val("0.9");
    } else if (selection == '2cycle') {
        $("#betaIn").val("0.5");
        $("#driveFreqIn").val("0.6666666666");
        $("#AIn").val("1.07");
    } else if (selection == '4cycle') {
        $("#betaIn").val("0.5");
        $("#driveFreqIn").val("0.6666666666");
        $("#AIn").val("1.47");
    } else if (selection == "chaos") {
        $("#betaIn").val("0.5");
        $("#driveFreqIn").val("0.6666666666");
        $("#AIn").val("1.15");
    }


    //document.getElementById("demo3").innerHTML ="selection = "+selection.toString();

}
$(function() {
    setup($("#betaIn").val(), $("#AIn").val(), $("#driveFreqIn").val(), $("#theta0In").val(), $("#omega0In").val(), $("#maxTrajLengthIn").val(), $("#stepIn").val())
})