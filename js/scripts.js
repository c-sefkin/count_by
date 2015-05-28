var countUpBy = function(multiple, number) {
  var count = []
  var division = (number / multiple)
  for (var i = 1; i <= division; i += 1) {
    count.push(multiple * i);
   }
return count;
}
