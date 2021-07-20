export const tokyoNumber = {
 data(){
  return{
   title: "Welcome to Tokyo",
   subTitle:"Tokyo is a great",
   number:0,
  }
 },
 filters:{
  lowerCase(value){
   return value.toLowerCase();
  }
 },
}