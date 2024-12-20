# React 19 useEffect Cleanup Function Issue

This repository demonstrates a common issue with the `useEffect` hook in React 19:  incorrectly handling cleanup functions, specifically when dealing with intervals.  The `bug.js` file shows the problem; the `bugSolution.js` demonstrates the correct way to resolve it. 

## Problem
The example code in `bug.js` uses `setInterval` within a `useEffect` hook but fails to properly clear the interval in the cleanup function.  This leads to multiple intervals running concurrently, potentially causing performance issues or memory leaks. 

## Solution
The solution, found in `bugSolution.js`, demonstrates the proper usage of the cleanup function in `useEffect`. The `setInterval` function returns an ID which is then used within the cleanup function to correctly clear the interval when the component unmounts or the effect reruns.