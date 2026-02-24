1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:
   1.getElementById:Tt is a DOM method which is used to select 1 HTML element and can be manupulated farther.
   example:let card=getElementById('card1');

   2.getElementsByClassName:Tt is a DOM method which is used to select HTML elements under a class and these elements can be manupulated farther.It returns a HTMLCollection.
   example:let card=getElementsByClassName('card1');

   3.querySelector:Tt is a DOM method which is used to select 1 HTML element having id or name or tagName etc. and can be manupulated farther.
   example:let card=document.querySelector('#card1');
   let card=document.querySelector('.card1');

   4.querySelectorAll:Tt is a DOM method which is used to select HTML elements having id or name or tagName etc. and can be manupulated farther.It returns a NodeList.
   let card=document.querySelectorAll('.card1');//this will return all the elements under the cart class.

2. How do you create and insert a new element into the DOM?
   Answer:
   To creat a new element we have to write
   let div=document.creatElement("div");
   div.innerHTML='<div>Hello</div>';
   to insert this new element into a cart section we have to use the appendChild()function.
   cart.appendChild(div);

3. What is Event Bubbling? And how does it work?
   Answer:
   event handler is added on the parent.when clicked on its element the event handler is then activated and runs on that element,then it moves upward to its parent and continius to go up till it reached the HTML document.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:
   event delegation uses event bubbling to handle the child elements of the parent element instead of using multiple event handler to multiple child element.
   example of event bubbling:allCarts.addEventListener("click", function (event)){
   console.log(event.target);
   }
   example of event delegation:if (event.target.classList.contains("btn-success")){
   console.log("btn was clicked);
   }
   usefulness:lets us handle chiled elements dynamically instead of using multiple event listener.it reduces number of event listeners running on an element.Code become more sufficient.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:
   stopPropagation():stopPropagation() is a method that stopes the event from bubbling upward.only the element where was clicked is handled and event stops running instead of going to its parents and grandparents.

   preventDefault():every HTML element has its default behaviour.but with preventDefault() we tell browser to stop its default behaviour and handle element behaviour manually.
   example:
   let a=document.getElementById("link).addEventListener('click',function(e){
   e.preventDefault();
   alert('link was pressed');
   })
