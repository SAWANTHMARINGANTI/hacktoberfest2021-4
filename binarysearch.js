
// Program to implement recursive Binary Search
  
   
// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
 function binarySearch(arr, l, r, x)
{
    if (r >= l) {
         mid = l + Math.floor((r - l) / 2);
   
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
   
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
  
        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }
   
    // We reach here when element is not
    // present in array
    return -1;
}
  
    arr =new Array(2, 3, 4, 10, 40);
    x = 10;
    n = arr.length;
    result = binarySearch(arr, 0, n - 1, x);
      
(result == -1) ? document.write("Element is not present in array")
               : document.write ("Element is present at index " + result);
                 
// This code is contributed by simranarora5sos
</script>
