% A program that implements a Trapezoidal method of solving ODE that
% averages the results of forward and backward ODE's

% Use this solver to generate a trajectory of the simple harmonic oscillator ODEs with k = 2, m = 0.5, and β = 0.  Start from the initial condition [x(t = 0), v(t = 0)]T = [-1, -2]T with a time step Δt = 0.1.  What is [x(t = 0.5), v(t = 0.5)]T?

% Trapezoidal([-1,-2],0.1,0.5);

% Generate a 500-point trajectory of the same ODE system from [x(t = 0), v(t = 0)]T = [-1, -2]T with a time step of Δt = 0.01.  Which of the following describes this trajectory?

% Trapezoidal([-1,-2],0.01,5.01);

% Now generate a 5000-point trajectory of the same ODE system from [x(t = 0), v(t = 0)]T = [-1, -2]T with a time step of Δt = 0.01

% Trapezoidal([-1,-2],0.01,50.01);

% SHO equations with k=2, m=0.5, and =0, from the initial condition x(t=0)=-1 , v(t=0)=-2, with a timestep of 0.05, to compute the values of x and v at t=0.5

Trapezoidal([-1,-2],0.05,0.5);

function [ traj ] = Trapezoidal(xo,h,finalTime)

% Set xo as the first iterate of trajectory
xcurr = xo;
traj(1,:) = xo;
% Calculate number of iterates
n = length(h:h:finalTime)+1;

for i = 2:n
    xFE = xcurr + h*SHO(xcurr);
traj(i,:) = xcurr + (h/2)*(SHO(xcurr)+SHO(xFE));
% FE: SHO(xcurr)
% BE: SHO(xFE)

% Update xcurr, each row of traj represents the state space values
xcurr = traj(i,:);
end

plot(traj(:,1),traj(:,2),'r') % plotting v vs x
disp('Trapezoidal results');
disp(traj);

end

function [xPrime] = SHO(xCurrent)
% x' = v    
% v' = -(k/m) x - beta v
k = 2;
m = 0.5;
beta = 0;
xPrime = [xCurrent(2), -(k/m)*xCurrent(1) - (beta/m) * xCurrent(2)];
end