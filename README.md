# Difference between Shallow Copy and Deep Copy in JavaScript

Lets understand the shallow copy and deep copy methods with JavaScript objects. There are multiple ways to copy objects in JavaScript. Some of them are making shallow copies and some are deep copies. If we want to copy an object, we can do that with bellow ways. Lets see with examples

### Shallow Copy
Just assigning object1 to object2 with equal “=” sign. This creates a shallow copy of object. This mean it create a reference to parent object. If we change any value of copied object , that affects for original object as well. Example :

![Alt text](/images/shallow%20copy.PNG?raw=true "Optional Title")

In above example, we are assigning personOne object to copyOne. This means we create a copy of personOne object. If we change any value of copyOne object, the personOne object is also change. As result we can see the both objects are updated. This we called as shallow copying.

### Deep Copy
If we want to copy object and update the copy without affecting to original parent object we need to use deep copy methods. Deep copy means, the changes for copies will not affect for original object. We can JSON method or Spread operator to achieve this.

Example 1 Using , JSON.parse(JSON.stringify(obj))
![Alt text](/images/deep%20copy%201.PNG?raw=true "Optional Title")

Here we can create deep copy of the original personTwo object. If we change a value in copyTwo object that will not affect to personTwo object. So usign this JSON.parse(JSON.stringify(obj)) method we can create a deep copy.

Example 2 Using Spread Operator , {…obj}
![Alt text](/images/deep%20copy%202.PNG?raw=true "Optional Title")

Another way of achieving deep copy is using spread operator {…obj}. This is also creates a deep copy of parent object. If we change some value in copyThree object that will not affect for personThree object.

### Summary
A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable. Creating a reference to same object we are calling as shallow copy and creating new object with original object values we are calling as deep copy. In shallow copy, child object updates affects for original object and in deep copy, child object updates does not affect for original object.

### Get In Touch
Linkedin -> https://www.linkedin.com/in/tharaka-udayanga-61a424166/