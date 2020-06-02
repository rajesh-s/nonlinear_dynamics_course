% A program to compute backward/implicit Euler trajectories
% each row of traj represents the state space values

% Use your backward Euler solver to compute [x(t = 0.5),v(t = 0.5)]T, given the same initial condition and time step as in problem 1(a) above
% for the simple harmonic oscillator ODEs with k = 2, m = 0.5, and β = 0.
BE([-1,-2],0.1,0.5,true);

function [ traj ] = BE(xo,h,finalTime,showPlot)

% Set xo as the first iterate of trajectory
xcurr = xo;
traj(1,:) = xo;
% Calculate number of iterates
n = length(h:h:finalTime)+1;

for i = 2:n
% Take a FE ste,
% Solve xNew = xCurr + h*f(xcurr)
xFE= FE(xcurr,h,h,false);
traj(i,:) = xcurr + h*SHO(xFE(2,:));

% Update xcurr, each row of traj represents the state space values
xcurr = traj(i,:);
end

if showPlot
    plot(traj(:,1),traj(:,2),'r')
end
    
disp('Backward Euler Trajectory');
disp(traj);
end

function [ traj ] = FE(xo,h,finalTime,showPlot)

% Set xo as the first iterate of trajectory
xcurr = xo;
traj(1,:) = xo;
% Calculate number of iterates
n = length(h:h:finalTime)+1;

for i = 2:n
% Take a FE ste,
% Solve xNew = xCurr + h*f(xcurr)
traj(i,:) = xcurr + h*SHO(xcurr);

% Update xcurr, each row of traj represents the state space values
xcurr = traj(i,:);
end

if showPlot
    plot(traj(:,1),traj(:,2),'b')
    disp('Forward Euler Trajectory');
    disp(traj);
end
end

function [xPrime] = SHO(xCurrent)
% x' = v    
% v' = -(k/m) x - beta v
k = 2;
m = 0.5;
beta = 0;
xPrime = [xCurrent(2), -(k/m)*xCurrent(1) - (beta/m) * xCurrent(2)];
end