% Delay - coordinate embedding Time Series

% Run your embedding program on the amplitude.dat time series with τ = 8
% and m = 7.  Plot the zeroth element of the reconstructed state vector --
% x(t) -- on the horizontal axis and the second (x(t-2τ), here) on the
% vertical axis (i.e., j = 0 and k = 2).

% What kind of attractor does this appear to be from the plot? Chaotic

%The dynamics used to generate this trajectory were three-dimensional and
%have a capacity dimension of 2.1.  What requirements does the Takens
%theorem place on m for a successful embedding of this time series? m->5

 Series = dlmread('amplitude.dat');
 dce(Series,7,8);

%  If you were to perform a delay-coordinate embedding of that time-series
%  data with m=2 and tau=2, what would the third point be? (1.1, 0.5)

% Series = dlmread('test.dat');
%dce(Series,2,2);

% If you were to perform a delay-coordinate embedding of the time-series
% data in question 11 with m=3 and tau=1, what would the second point be? (1.4, 1.1, 0.9)
% dce(Series,3,1);


function DCETS = dce(TS, m, tau)
% TS : scalar time series
% m : embedding dimension
% tau : embedding delay
 
 DCETS = zeros(length(TS)-tau*(m-1),m);
 for ii=1:length(DCETS)
     for jj = 1:m
         DCETS(ii,jj) = TS((ii)+(m-jj)*tau);
     end
 end

 disp(DCETS);
 plot(DCETS(:,1),DCETS(:,3))
 xlabel('x(t)')
 ylabel('x(t-2\tau)')
end