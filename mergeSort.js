//fonte: https://reactgo.com/merge-sort-algorithm-javascript/
/** Execution Time
 *      Example: 3.480ms
 *      File: 4.788ms 
 */

 function main(strings) {
     let property = 0;
     let resultMerge = mergeSort(strings);
     let aux = [];
     let propertyItem = '';
     let resultArray = [];

     aux = preSort (resultMerge, property, '$total');

     resultArray = aux[0];
     resultMerge = aux[1];

     propertyItem=resultMerge[0].split('|')[0];
     
     property =0;
     aux = preSort(resultMerge, property,propertyItem);

     property++;
     propertyItem = '$total';
     aux = preSort(aux[0], property, propertyItem);

     aux[0].map(element => {
         resultArray.push(element);
     })
     aux[1].map(element => {
         resultArray.push(element);
     })

     return resultArray;
 }

 function preSort(resultMerge, property, filter) {
     let result =[];
     let itensToRemove = [];
     let i = 0;

     /* for(let i=0; i< resultMerge.length; i++ ){
         if (resultMerge[i].split('|')[property] === filter){
             result.push(resultMerge[i]);
             itensToRemove.push(i);//decidi por este contador pq se fizer  splice ele pula o que sera o elemento seguinte
         }
        } */

     resultMerge.filter(element => {

        if (element.split('|')[property] === filter){
            result.push(element);
            itensToRemove.unshift(i);//decidi por este contador pq se fizer  splice ele pula o que sera o elemento seguinte
        }
        i++;
    })

     itensToRemove.map(element=>{
         resultMerge.splice(element,1);
     })

     return [result, resultMerge];
 }

function mergeSort(array,halfArraySize = array.length/2){

  if(array.length <= 1){
    return array;  // it means we no longer divide the array
                  // into smaller chunks
  }

  const left = array.splice( 0,halfArraySize ); //left part of  the array
  return merger( mergeSort( left ),mergeSort( array ) )
}

function merger(left, right) {
    
    const arr = [  ];
    while (left.length && right.length) {
        
        let firstLeft = left[ 0 ].split('|');
        let firstRight = right[ 0 ].split('|');
        
        /*  if (firstLeft[0] === '$total'){
            arr.push(left.shift())
            return [ ...arr, ...left, ...right ];
        }

        if (firstRight[0] === '$total'){
            arr.push(right.shift())
            return [ ...arr, ...left, ...right ];
        } */

        //comparing net_value
        if (firstLeft[ firstLeft.length -1] > firstRight[ firstRight.length -1]) {
            arr.push( left.shift( ) ) // remove from the left part and push into
                                              //the sorted array
        } else {
            arr.push( right.shift(  ) ) // remove from the right part and push into
                                               //the sorted array
        }
    }
    return [ ...arr, ...left, ...right ];
}

//console.log(mergeSort([10,5,3,7,2,6,4,1,8,9]));
console.time("mergeSort");
//exemplo
strings=['bar|$total|-200','foo|sauce|300','$total|$total|200','bar|sup|-400','foo|$total|400','bar|bro|200','foo|lettuce|100'];

//arquivo
//strings = ['womens footwear|boots|cold weather|-2018.34|-9','kids footwear|kids|kids|2373.19|22','womens footwear|shoes|ballet|18363.41|117','product care|product care|product care|2280.9|240','accessories|handbags|clutch|98|1','mens footwear|boots|campus|328|1','womens footwear|boots|casuals|29090.73|125','kids footwear|kids|$total|2373.19|22','womens footwear|boots|riding|7187.84|8','accessories|handbags|$total|52589.06|145','womens footwear|shoes|cold weather|-131.85|-3','accessories|giftable|$total|57|1','mens footwear|boots|cold weather|1688.8|5','kids footwear|baby|baby|384|8','womens footwear|shoes|dress|14542.39|49','mens footwear|boots|western|3311|10','womens footwear|shoes|sandals|48355|209','womens footwear|shoes|clogs|4436.4|17','womens footwear|boots|tailored|42454.92|121','accessories|belts|$total|-20.19|0','mens footwear|boots|harness|7795.45|25','womens footwear|shoes|pumps|1628|12','mens footwear|boots|work|32963.85|121','accessories|small leather goods|$total|10927.64|123','accessories|men|bags|21232.8|41','womens footwear|shoes|mocs|4443.75|31','mens footwear|shoes|loafers|15703|79','accessories|handbags|crossbody|21242|66','mens footwear|shoes|sneakers|39299|213','womens footwear|boots|harness|12790.85|45','womens footwear|shoes|slippers|7788.79|32','mens footwear|boots|casuals|23874|82','womens footwear|boots|moto|2164.8|8','mens footwear|$total|$total|178959.8|742','womens footwear|boots|work|19317.84|60','accessories|handbags|shoulder|12158.71|32','mens footwear|boots|$total|99739.9|341','womens footwear|shoes|oxfords|26081.2|128','kids footwear|baby|$total|384|8','womens footwear|shoes|sneakers|40678.91|272','accessories|belts|womens|-20.19|0','womens footwear|boots|western|39314.15|144','product care|product care|$total|2280.9|240','mens footwear|boots|tailored|29778.81|97','accessories|eye|$total|0|0','accessories|handbags|tote|7166.2|17','accessories|men|$total|21232.8|41','womens footwear|boots|campus|13778.59|40','womens footwear|$total|$total|330267.42|1406','product care|$total|$total|2280.9|240','accessories|eye|eye|0|0','accessories|$total|$total|84786.29|310','accessories|handbags|satchel|3757.14|10','accessories|giftable|giftable|57|1','accessories|handbags|hobo|8167|19','kids footwear|$total|$total|2757.2|30','womens footwear|shoes|$total|166186.02|864','mens footwear|shoes|mocs|382.4|2','accessories|small leather goods|small leather goods|10927.64|123','mens footwear|shoes|$total|79219.9|401','$total|$total|$total|599051.63|2728','mens footwear|shoes|oxfords|23425.49|101','mens footwear|shoes|cold weather|410|6','womens footwear|boots|$total|164081.39|542'];

//console.log(mergeSort(strings));
console.log(main(strings));

console.timeEnd("mergeSort");