function sortArray(a)
{
      
    let low = 0; 
    let high = a.length - 1; 
    let mid = 0;
    let temp = 0; 
    while (mid <= high)
    {
        if(a[mid] == 0)
        {
            temp = a[low]; 
            a[low] = a[mid]; 
            a[mid] = temp; 
            low++; 
            mid++; 
        }
        else if(a[mid] == 1)
        {
            mid++; 
        }
        else
        {
            temp = a[mid]; 
            a[mid] = a[high]; 
            a[high] = temp; 
            high--;
        }
          
    }
}
  
function printArray(arr)
{
    let i;
    for (i = 0; i < arr.length; i++)
    {
       console.log(arr[i] + " ");
    }
    console.log("\n")
}
  
let arr= [2,2,1,1,0,0 ];
sortArray(arr);
printArray(arr); 

//time complexity is 0(n)
//space complexity is 0(1)