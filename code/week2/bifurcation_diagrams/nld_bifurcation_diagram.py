# -*- coding: utf-8 -*-
"""NLD_Bifurcation_diagram.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1rk5aKUQHyd4jZ2z3uODfGMhXOwVo4WI-

# Problem Statement

Write a program to construct a bifurcation diagram for the logistic map. Your program should take the following arguments:



* An initial condition $x_{0}$
* An $r_{\min }$ and an $r_{\max }$ that specify a range of $r$ values for the $x$ -axis of your bifurcation plot
* An $r_{\text {step }},$ which specifies how many "slices" your plot has
* A number n of total iterates to perform
* A number $k$ of total iterates to discard without plotting (i.e., to remove the transient)

The output should be a plot of the logistic map bifurcation diagram for a range of $r$. Check your program by constructing a bifurcation plot for $r \in[2.4,4]$ with a step size of 0.01 . For each $r,$ consrruct a 1000 -iterate trajectory from $x_{0}=0.2,$ and discard the first five i.e., plot $x_{5}$ to $x_{1000}$ for each $r .$ The overall structure will look similar to that of Figure 1 below (although not quite identical; we'll get to that later in this quiz)
"""

# Create a Logistic map
from matplotlib import pyplot as plt
import numpy as np

# Get inputs
print("Bifurcation diagram parameters: \n")
x0 = float(input("Enter the value of x0(initial state)\n"))
rmin = float(input("Enter the min value of r(parameter)\n"))
rmax = float(input("Enter the max value of r(parameter)\n"))
rstep = float(input("Enter the step value of r(parameter)\n"))
n = input("Enter the number of iterations to plot \n")
k = input("Enter the number of iterations to discard \n")

trajectory = []
r = []
rcurr = rmin
while rcurr <= rmax:
    r.append(rcurr)
    prev = x0
    curr = 0
    curr_trajectory = []
    for i in range(int(n)):
        curr = prev * rcurr * (1-prev)
        curr_trajectory.append(curr)
        prev = curr
    del curr_trajectory[:int(k)] #Remove transient portion of points for each R
    rcurr = rcurr + rstep
    trajectory.append(curr_trajectory)

f = plt.figure(figsize=(6,4),dpi=300)
plt.plot(r, trajectory, "k,", markersize=0.01, mew=0)
f.savefig("bifurcation_diag.png")
plt.title("Bifurcation diagram")
plt.xlabel("R")
plt.ylabel("Xn")
plt.show()

# Create a Logistic map
from matplotlib import pyplot as plt
import numpy as np

# Get inputs
print("Bifurcation diagram parameters: \n")
x0 = float(input("Enter the value of x0(initial state)\n"))
rmin = float(input("Enter the min value of r(parameter)\n"))
rmax = float(input("Enter the max value of r(parameter)\n"))
rstep = float(input("Enter the step value of r(parameter)\n"))
n = input("Enter the number of iterations to plot \n")
k = input("Enter the number of iterations to discard \n")

trajectory = []
r = []
rcurr = rmin
while rcurr <= rmax:
    r.append(rcurr)
    prev = x0
    curr = 0
    curr_trajectory = []
    for i in range(int(n)):
        curr = prev * rcurr * (1-prev)
        curr_trajectory.append(curr)
        prev = curr
    del curr_trajectory[:int(k)] #Remove transient portion of points for each R
    rcurr = rcurr + rstep
    trajectory.append(curr_trajectory)

f = plt.figure(figsize=(6,4),dpi=300)
plt.plot(r, trajectory, "k,", markersize=0.01, mew=0)
f.savefig("bifurcation_diag.png")
plt.title("Bifurcation diagram")
plt.xlabel("R")
plt.ylabel("Xn")
plt.show()