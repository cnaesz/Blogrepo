export function currencyFix(x){
  x = Number((x / 100).toFixed(2));
  return x;
}