% A program to compute forward/explicit Euler trajectories
% each row of traj represents the state space values

% Use the forward Euler method on the simple harmonic oscillator ODEs with  
% k = 2, m = 0.5, g = 0, and ß = 0 (i.e., no friction) 
% starting from the initial condition [x(t = 0), v(t = 0)]T = [-1, -2]T 
% with a timestep Δt = 0.1 to find [x(t = 0.1), v(t = 0.1)]T. 
% FE([-1,-2],0.1,0.1,true);

% FE([-1,-2],0.1,0.5,true);

% generate a 200-point trajectory and plot it in the state space (i.e., with the position x of the mass plotted on the x-axis and the velocity v on the y-axis).  Now repeat that plot with Δt = 0.11.  What are the differences between these two trajectories?

% Use your forward Euler solver from HW 5.4 on the SHO equations with k=2, m=1, and \beta=0, from the initial condition x(t=0)=-1 , v(t=0)=-2, with a timestep of 0.05, to compute the values of x and v at t=0.5.  [Note: this is problem 1 on HW 5.4 with a different m and a different timestep.  Also note that we use the symbols "h" and "delta t" interchangeably to mean "timestep."]
FE([-1,-2],0.05,0.5,false);

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
    plot(traj(:,1),traj(:,2))
end

disp('Forward Euler Trajectory');
disp(traj);
end

function [xPrime] = SHO(xCurrent)
% x' = v    
% v' = -(k/m) x - beta v
k = 2;
% m = 0.5;
m = 1;
beta = 0;
xPrime = [xCurrent(2), -(k/m)*xCurrent(1) - (beta/m) * xCurrent(2)];
end