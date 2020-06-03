% Delay - coordinate embedding Time Series

 Series = dlmread('amplitude.dat');
 dce(Series,2,8);


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
 fileID = fopen('DCETS.dat','w');
 fprintf(fileID,'%f %f\n',DCETS);
 fclose(fileID);
end