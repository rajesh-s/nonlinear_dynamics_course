% Implement a function for counting the number of boxes N(є) of side length
% є needed to cover a two-dimensional trajectory of a dynamical system.
% Your code should take the trajectory and an є; it should output N(є).

 Trajectory = dlmread('DCETS.dat');
 CountBoxes(Trajectory,0.5);
 
function [NUMBOXES] = CountBoxes(A,epsilon)

mins = zeros(1,size(A,2));
maxs = zeros(1,size(A,2));

for ii = 1:length(maxs)
    maxs(ii) = max(A(:,ii));
end

for ii = 1:length(mins)
    mins(ii) = min(A(:,ii));
end

BoxMatrix = zeros(ceil((maxs(1)-mins(1))/epsilon),ceil((maxs(2)-mins(2))/epsilon));

for index = 1:size(A,1)
    xCurr = A(index,:);
    ind = zeros(1,size(A,2));
    for ii = 1:length(ind)
        ind(ii) = ceil((xCurr(ii)-mins(ii))/epsilon);
        if ind(ii) == 0
            ind(ii) = 1;
        end
    end
        BoxMatrix(ind(1),ind(2))= 1;
end

NUMBOXES = sum(sum(BoxMatrix));
disp(NUMBOXES);
end
    