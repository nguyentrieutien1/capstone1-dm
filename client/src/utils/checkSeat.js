export const checkSeat = (index) => {
     switch (index) {
       case 0:
         return "Tầng dưới";
       case 1:
         return "Tầng trên";
       case 2:
         return "Tầng trên nữa";
       case 3:
         return "Tầng trên nữa nữa";
       default:
         return "Xe giấy hay gì mà nhiều tầng thế ?";
     }
}