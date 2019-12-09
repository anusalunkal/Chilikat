var chilkat = require('@chilkat/ck-node8-win64'); 


function UpdateNWriteCsv(TestID,columnName,setCellValue) 

{

    var csv = new chilkat.Csv();

    csv.HasColumnNames = false;

    // Load the CSV records from the file:
  
    csv.LoadFile("C://Users//asudharson//Desktop//csvWrite//chilkatFile.csv");
    
    //Convert the data in to String
    csvDoc = csv.SaveToString();
    console.log(csvDoc);
    
  // find the row count using line splitter 
   var rowcount=csvDoc.split('\n').length;
   console.log(rowcount);
   
   // find the columncount by getting first array
   var columnHeader=csvDoc.split('\n');
   console.log(columnHeader[0]);

   console.log(csvDoc.split('\t'));

    var columnCount= columnHeader[0].split(',').length;
    console.log(columnCount);
   
   for(i=0;i<rowcount-1;i++)
	  {
	   var rowId=csv.GetCell(i,0);
	   for(j=0;j<columnCount;j++)
	    {
		 var columnId=csv.GetCell(i,j);
		 if(columnId==columnName)
			 {
			 var k=j;
			 }
		 if(rowId==TestID)
			 {
			 csv.SetCell(i,k,setCellValue);
			 }  
	    }
	   }

   csv.SaveFile("C://Users//asudharson//Desktop//csvWrite//chilkatFile.csv");

    

}
UpdateNWriteCsv(1008,'InsNumber','ReshmaSajeev');
UpdateNWriteCsv(1009,'InsNumber','AnuSAlunkal');
UpdateNWriteCsv(1005,'InsNumber','DivyaPerumal');
UpdateNWriteCsv(1006,'InsNumber','Deepa');




