import csv
from datetime import datetime
from datetime import timedelta 
import random

rowData=[]

currentTime = datetime.now() - timedelta(days =7)

def generateCSV (n, sample_limit):
    
    for x in range(0,int(n)):
        sample_timing = currentTime
        for sample in range(1,sample_limit): 
            with open('set'+ str(sample) + '.csv', 'w') as myfile:
                wr = csv.writer(myfile, dialect='excel')
            
                sample_timing = sample_timing + timedelta(seconds=60)
                for client in range(1,51):

                    col0 = "Client " + str(client)
                    rowData.append(col0)

                    time = str(sample_timing)
                    col1 = time[0:16]
                    rowData.append(col1)

                    col2 = round(random.uniform(210, 260),2)
                    rowData.append(col2)

                    col3 = round((col2 - round(random.uniform(1, 20),2)), 2) 
                    rowData.append(col3)

                    col4 = round(random.uniform(col2, col3),2)
                    rowData.append(col4)

                    col5 = round(random.uniform(0.1, 6),2)
                    rowData.append(col5)

                    col6 = round(min(abs(col5 - round(random.uniform(0.1, 3),2)), (col5 -0.1)), 2)
                    rowData.append(col6)

                    col7 = round(random.uniform(col5, col6),2)
                    rowData.append(col7)

                    col8 = round((col4 * col7 * round(random.uniform(0.3,1),2))/60,2)
                    rowData.append(col8)   
                       
                    wr.writerow(rowData)   
                    # temp=temp+1
                    rowData.clear()     

            


       
    print("\t\t\t\t\t\t\t\t\t\t CSV💻 Files Created🎉 Successfully.!!😎")   


reserve_variable = input("Please type 1")
sample_limit = input("Enter the number of samples : ")
      

generateCSV(reserve_variable, int(sample_limit))
