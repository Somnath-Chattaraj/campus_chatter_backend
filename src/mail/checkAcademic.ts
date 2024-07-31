import fs from "fs";
import path from "path";

// Import the CommonJS module for __dirname and rename it
const currentDir = require("./dirNameHelper");

// Function to check if an email has a valid college domain
function checkCollegeEmail(email: string): boolean {
  const filePath = path.join(currentDir, "emails.json");
  const domains: string[] = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Extract the domain from the email
  const emailDomain = email.split("@")[1];

  // Perform binary search
  return binarySearch(domains, emailDomain);
}

// Function to perform binary search on a sorted array
function binarySearch(arr: string[], target: string): boolean {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid];

    if (midVal === target) {
      return true;
    } else if (midVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

export default checkCollegeEmail;