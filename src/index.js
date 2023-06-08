export function getMonth(n) {
   let result = '';

   if (n <= 12 && n >= 0) {
      if (n === 1) {
         result = `${n} - январь`
      } else if (n === 2) {
         result = `${n} - февраль`
      } else if (n === 3) {
         result = `${n} - март`
      } else if (n === 4) {
         result = `${n} - апрель`
      } else if (n === 5) {
         result = `${n} - май`
      } else if (n === 6) {
         result = `${n} - июнь`
      } else if (n === 7) {
         result = `${n} - июль`
      } else if (n === 8) {
         result = `${n} - август`
      } else if (n === 9) {
         result = `${n} - сентябрь`
      } else if (n === 10) {
         result = `${n} - октябрь`
      } else if (n === 11) {
         result = `${n} - ноябрь`
      } else if (n === 12) {
         result = `${n} - декабрь`
      }    
   } else if (isNaN(n)) {
      result = 'error'
   } else {
      result = `${n} - не является числовым обозначением месяца`
   }

   return result
}