
//Given Array of Objects:
const item = [ 
    {
        name: 'Bike', 
        price:100
    }, 
    {
        name: 'TV',
         price:200
    }, 
    {
        name: 'Album',
        price:10
     
    },
    {
        name: 'Book', 
        price:5
    },
    {
        name: 'Phone',
         price:500
    },
    {
        name: 'Computer', 
        price:1000
    }, ]
    
    // Cheap Item
   // ===================================================


    // Algorithm by using reduce() Method: 
    //             1. We sort items in descending order. 
    //             2. We return value of item at index zero
                    
    let cheapItem=item.sort((price1,price2)=>  price1.price - price2.price)[0].name;
    console.log(cheapItem);

    //Output: Book



    // expensive item
    //=============================================

    // Algorithm by using reduce() Method:
    //             1. We sort items in ascending order. 
    //             2. We return value of item at index zero


    let expensiveItem=item.sort((price1,price2)=>  price2.price - price1.price)[0].name;
    console.log(expensiveItem);

    //Output: Computer



    // full price of all products combined
    //===================================================================
          //Algorithm: i use reduce():
                   //The reduce() method executes a reducer function on each element of the array and returns a single output value.

      
      let TotalPrice_AllProduct = item.reduce((initialPrice, itemOb) => {
        total=initialPrice + itemOb.price;
        return total;
      }, 0);
      console.log(`The total price for all products is: ${TotalPrice_AllProduct}`); 

      //Output: 1815

      //Algorithm: i use reduce():
                   //The reduce() method executes a reducer function on each element of the array and returns a single output value.
      


    // full price of all product combined and remove product that are under the 10 dollar
    //======================================================================================

    let TotalPriceOver_10 = item.reduce((initialPrice, itemOb) => {
        if(itemOb.price<10){
            console.log(`item of price ${itemOb.price} skipped`);
        }
        else{
            total=initialPrice + itemOb.price;
        }
        return total;
      }, 0);

      console.log(`The total price for all products -<10 is: ${TotalPrice_AllProduct}`); 

    //Output: 1810


    //================================= END =================================

    
    