# InterviewPrepAlgorithms

Resources for preparing for the algorithm portion of Front End job interviews.

### Approach to solution finding
  Treat the interview as if it was a collaboration session, and walk through as if you were solving the problem at work.  Most importantly talk it out and let the interviewer know your thought process.  Use these steps.
  * Understand the question
  * Identify test cases/conditions
  * Design the solution
  * Implement the solution
  * Review the solution
  
##### Understand the question
  Make sure you are in sync with the interviewer on the expectations.  Verify any assumptions you may have.
  
  * What is the expected behavior
  * What are the inputs?  (data structure, units, etc.)
  * What are the outputs?
  * Any special considerations (should the algorithm be stable?)
  * If you don't know the formula or definition of a term, ask.
  * Constraints
  
##### Identify test cases/conditions
  Depending on the question, consider the standard case as well as boundary cases.

  * Failure cases - Where the expected solution doesn't exist
  * Variety - wildly varying values or all values are the same
  * Number of elements - small or very large set
  * Null conditions
  * Duplicate conditions
  * Boundary conditions

##### Design the solution
  Sketch out the design. If you know there is a more elegant solution, but you only know how to do the brute force approach, acknowledge that.
    
  * Observations - Any observations, (e.g. At most one letter can exist an odd number of times in a palindrome)
  * Algorithm - Be able to describe the algorithm in steps
  * Code - Sketch out the solution in pseudo code. 
  * Complexity - Be able to describe the complexity of your solution.
  * Consider alternatives - Describe why you are rejecting a certain approach.
  * What data structures will be used.
  
##### Implement the solution
  * Write the solution
  * Let the interview know of any utility methods that you don't feel need to be coded (e.g. swap)
  
##### Review the solution
  * Walk through the solution with a test case showing intermediate output.  Walking through, you may have an idea for an improvement or may identify an error.  Share these with the interviewer.
  
  * Address qualities
    * Performance
    * Efficiency
    * Scalability
    * Extensibility
    * Complexity
    * Memory usage
    * Potential improvements
  
### Coaching: 
  * [Interview Kickstart] (http://interviewkickstart.com/) - SF Bay classes focused on the technical interview.
      Founded by Soham Mehta, one of the first five engineers at Box.
  * [Career Cup] (http://www.careercup.com/interview) - $150+/hour mock interviews
  * [Interview Coaching] (http://www.impactinterview.com/) - Coaching in cities around the country.
  * [Interview Academy] (http://www.interviewacademy.io/) - 4 week course in Mountain view, CA.  
      Founded by a Google employee

### References:
  * [Google Candidate Coaching Hangout - Video] (https://www.youtube.com/watch?v=oWbUtlUhwa8)
    Take special note at time 13:00 - discussion of how to approach underspecified problems.
  * [Algorithm Design Canvas] (http://www.hiredintech.com/algorithm-design/the-algorithm-design-canvas) - Tech recruiter site with many helpful resources
  * [Technical Interview Cheat Sheet](https://gist.github.com/TSiege/cbb0507082bb18ff7e4b) 
  * [Sorting Algorithms Animations](http://www.sorting-algorithms.com/)

### Books - Tech Interviews
  * [Elements of Programming Interviews] (http://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1479274836)      
      * Elements of Programming Interviews - [Solutions] (http://elementsofprogramminginterviews.com/solutions/)
  * [Cracking the Coding Interview] (http://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X/ref=zg_bs_2578_1) 
  * [Programming Interviews Exposed] (http://www.amazon.com/Programming-Interviews-Exposed-Secrets-Programmer/dp/047012167X)

### Books - Algorithms
  * [Introduction to Algorithms] (http://www.amazon.com/Introduction-Algorithms-3rd-Thomas-Cormen/dp/0262033844/ref=sr_1_1?ie=UTF8&qid=1424027412&sr=8-1&keywords=algorithm) - by by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein - 31 July, 2011 - Addison Wesley
  * [Algorithms - 4th Edition ] (http://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X/ref=sr_1_1?s=books&ie=UTF8&qid=1424027540&sr=1-1) - - by Robert Sedgewick, Kevin Wayne - 19 March, 2011 - MIT Press
  * [Algorithms in a Nutshell] (http://www.amazon.com/Algorithms-Nutshell-OReilly-George-Heineman-ebook/dp/B0043D2EGI/ref=sr_1_1?s=books&ie=UTF8&qid=1424027824&sr=1-1&keywords=algorithms+in+a+nutshell) - by George T. Heineman and Stanley Selkow - 30 june, 2009 - O'Reilly
  * [Algoirthm Design Manual](http://www.amazon.com/exec/obidos/ASIN/1848000693/thealgorithmrepo) - by Steven S. Skiena - 2nd Edition - 2008, Springer
    * [Algorithm Design Manual - PDF Version](http://sist.sysu.edu.cn/~isslxm/DSA/textbook/Skiena.-.TheAlgorithmDesignManual.pdf)
    * [Alogirthm Design Manual - Website](http://www3.cs.stonybrook.edu/~algorith/)
  
### Online practice:
  * [Hacker Rank] (https://www.hackerrank.com/)
  * [Geeks for Geeks] (http://www.geeksforgeeks.org/) - Excellent collection of algorithm concepts, quizzes, and experiences at a variety of tech companies
  * [Code Chef] (http://www.codechef.com/)
  * [Top Coder] (http://www.topcoder.com/) - Download Arena for the practice room
  * [PairUpToCode Exercises] (http://www.pairuptocode.com/) - Small set of HTML, Javascript exercises
  * [JS Assessment] (https://github.com/rmurphey/js-assessment) - Github respository of javascript programs with failing/incomplete tests.
  * [Project Euler] (https://projecteuler.net/) - An enormous number of problems to solve.  Write the code, submit the answer, repeat.
  * [Interview Cake] (https://www.interviewcake.com/) - Problems posted online or delivered weekly to your email.

### Example questions posted by interviewees
  * [Crazy for Code] (http://www.crazyforcode.com/interview-experiences/)
  * [Glass Door - Interviews] (http://www.glassdoor.com/Interview/index.htm)
  * [Coder Career] (http://codercareer.blogspot.com/)
  
### Complexity Analysis references
  * [Big O Cheat Sheet] (http://bigocheatsheet.com/) - Big O complexities for basic algorithms and data structures
  * [MIT paper on Big O Notation](http://web.mit.edu/16.070/www/lecture/big_o.pdf) - Short overview of Big O notation.
    
### Papers
  * [MapReduce: Simplified Data Processing on Large Clusters](http://research.google.com/archive/mapreduce.html) - Jeffrey Dean and Sanjay Ghemawat
  * [Bigtable: A Distributed Storage System for Structured Data](http://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf) - Fay Chang, Jeffrey Dean, Sanjay Ghemawat, Wilson C.  Hsieh, Deborah A.  Wallach Mike Burrows, Tushar Chandra, Andrew Fikes, Robert E. Grube
  * [Finding a needle in Haystack: Facebook’s photo storage](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf) - Doug Beaver, Sanjeev Kumar, Harry C. Li, Jason Sobel, Peter Vajgel
  * [Amazon.com Recommendations Item-to-Item Collaborative Filtering](http://www.cs.umd.edu/~samir/498/Amazon-Recommendations.pdf) - Greg Linden, Brent Smith, and Jeremy York • 
Amazon.com
  * [Distributed Caching with Memcached](http://www.linuxjournal.com/article/7451) - Aug 01, 2004  By Brad Fitzpatrick
  
