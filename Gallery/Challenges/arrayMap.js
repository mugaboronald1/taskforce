function hasSubarrayWithTargetSum(arr, target) {
    // Initialize variables
    let current_sum = 0;  // This will keep track of the current sum of the subarray
    let start = 0;        // This will be the starting index of the subarray
  
    // Iterate over the array with the 'end' index
    for (let end = 0; end < arr.length; end++) {
      // Add the current element to the current_sum
      current_sum += arr[end];
  
      // If current_sum exceeds the target, move the start index to the right
      // and subtract the elements from the current_sum until it's less than or equal to the target
      while (current_sum > target && start <= end) {
        current_sum -= arr[start];  // Subtract the element at the 'start' index from current_sum
        start++;                    // Move the start index to the right
      }
  
      // Check if current_sum is equal to the target
      if (current_sum === target) {
        return true;  // If yes, return true
      }
    }
  
    // If we finish the loop without finding any subarray with the target sum, return false
    return false;
  }
  
  // Example usage
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 17;
  console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
  