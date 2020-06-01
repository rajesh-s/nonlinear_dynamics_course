# Pendulum

Explore the damped, sinusoidally driven pendulum --  This system is governed by the following system of ODEs:

$\dot{\theta}=\omega \\ \dot{\omega}=\frac{-\beta}{mL}\omega-\frac{g}{L}\sin{\theta}-\frac{A}{mL}\sin{\Omega t}$

In these equations, Θ is angular position, ω is angular velocity, m is mass,  L is pendulum length, g is acceleration due to gravity, β is the drag coefficient, A is the (drive) amplitude and Ω is the (drive) frequency.  In the driven pendulum in the movie, the amplitude was fixed by the cam follower design and the frequency was controlled by the actuator that drove the motor, but in this problem you'll vary both of those parameters.  For simplicity, we will assume that m = L = 1, which makes the equations look like this:

$\dot{\theta}=\omega \\ \dot{\omega}=-\beta\omega-g\sin{\theta}-A\sin{\Omega t}$

## Usage

To use this application, which simulates the equations above, you need to set the parameter values and initial conditions in the text fields located in the bottom-right panel, then click "Setup". This should be done any time you change the text field values.

To begin the simulation after doing that setup, either click "Start Animation", which will generate a trajectory one step at a time, or click "Generate Full Trajectory", which will generate an n-point-long trajectory, where n is the "Max Trajectory Length" input.

The "Time" panel (bottom left) shows time-series plots of Θ (angular position, shown in yellow) and ω (angular velocity, shown in blue).  The "Phase" panel (top right) shows a state-space portrait, with ω on the y-axis and Θ on the x-axis.